"""Check a running production build using its rendered HTML, without browser automation."""
import argparse,json,re,sys,urllib.request,urllib.error,urllib.parse,xml.etree.ElementTree as ET
from html.parser import HTMLParser
from collections import deque
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.meta={};self.canonical=[];self.links=[];self.h1=0;self.title='';self.in_title=False;self.script=False;self.schema=False;self.buf='';self.schemas=[];self.text=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='title':self.in_title=True
  if t=='h1':self.h1+=1
  if t=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if t=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if t=='a' and a.get('href'):self.links.append(a['href'])
  if t=='script':self.script=True;self.schema=a.get('type')=='application/ld+json';self.buf=''
 def handle_data(self,data):
  if self.in_title:self.title+=data
  if self.schema:self.buf+=data
  if not self.script:self.text.append(data)
 def handle_endtag(self,t):
  if t=='title':self.in_title=False
  if t=='script':
   if self.schema:self.schemas.append(json.loads(self.buf))
   self.script=False;self.schema=False
p=argparse.ArgumentParser();p.add_argument('--base',default='http://127.0.0.1:3100');p.add_argument('--canonical',default='https://www.vrksolutions.in');p.add_argument('--output',default='work/seo/rendered-audit.json');a=p.parse_args();base=a.base.rstrip('/');canonical=a.canonical.rstrip('/');errors=[];rows=[];titles={};descriptions={}
def request(path):
 try:
  with urllib.request.urlopen(urllib.request.Request(base+path,headers={'User-Agent':'Googlebot'}),timeout=30) as r:return r.status,r.headers,r.read().decode(errors='replace')
 except urllib.error.HTTPError as e:return e.code,e.headers,e.read().decode(errors='replace')
def check(ok,message):
 if not ok:errors.append(message)
status,headers,xml=request('/sitemap.xml');check(status==200,'Sitemap is unavailable');urls=[e.text for e in ET.fromstring(xml).findall('{*}url/{*}loc')];paths={urllib.parse.urlsplit(u).path for u in urls};check(len(urls)==len(set(urls)),'Sitemap contains duplicates');check(all(u.startswith(canonical+'/') and not urllib.parse.urlsplit(u).fragment and not urllib.parse.urlsplit(u).query for u in urls),'Sitemap contains noncanonical URLs')
queue=deque(['/']);seen=set();links=set()
while queue:
 path=queue.popleft().rstrip('/') or '/'
 if path in seen:continue
 seen.add(path)
 status,headers,html=request(path);check(status==200,f'{path}: HTTP {status}')
 if status!=200:continue
 page=Page();page.feed(html);expected=canonical+path
 check(page.h1==1,f'{path}: expected one H1, found {page.h1}')
 check(bool(page.title),f'{path}: missing title');check(bool(page.meta.get('description')),f'{path}: missing description')
 check(len(page.canonical)==1 and page.canonical[0].rstrip('/')==expected.rstrip('/'),f'{path}: incorrect canonical {page.canonical}')
 check(page.meta.get('og:url','').rstrip('/')==expected.rstrip('/'),f'{path}: incorrect Open Graph URL')
 check(page.meta.get('twitter:card')=='summary_large_image',f'{path}: missing social card')
 check(bool(page.schemas),f'{path}: missing structured data')
 noindex='noindex' in page.meta.get('robots','')
 check(noindex if path=='/work' else not noindex,f'{path}: incorrect indexing directive')
 for text,label,store in [(page.title,'title',titles),(page.meta.get('description',''),'description',descriptions)]:
  if text in store and store[text]!=path:errors.append(f'{path}: duplicate {label} with {store[text]}')
  store[text]=path
 visible=re.sub(r'\s+',' ',' '.join(page.text))
 for schema in page.schemas:
  if schema.get('@type')=='FAQPage':
   for q in schema.get('mainEntity',[]):
    check(q['name'] in visible,f'{path}: FAQ question missing from visible content')
    check(q['acceptedAnswer']['text'] in visible,f'{path}: FAQ answer missing from visible content')
 for href in page.links:
  u=urllib.parse.urlsplit(href)
  if u.scheme or u.netloc or not u.path.startswith('/'):continue
  target=u.path.rstrip('/') or '/';links.add(target)
  if target not in seen and not re.search(r'\.[a-z0-9]+$',target):queue.append(target)
 rows.append({'path':path,'status':status,'title':page.title,'description':page.meta.get('description'),'canonical':page.canonical[0] if page.canonical else None,'h1':page.h1,'noindex':noindex,'jsonLdBlocks':len(page.schemas)})
for path in paths:check((path.rstrip('/') or '/') in seen,f'{path}: sitemap page not discoverable through internal links')
for path in ['/this-page-does-not-exist','/services/not-a-service','/work/not-a-published-case','/insights/not-an-article']:
 status,_,html=request(path);check(status==404,f'{path}: unknown page should return 404, got {status}')
status,_,html=request('/get-quote?brief=test-private-query');page=Page();page.feed(html);check(page.canonical==[canonical+'/get-quote'],'Query-string quotation has an incorrect canonical')
for path in ['/brand/social.png','/llms.txt','/robots.txt']:
 status,headers,_=request(path);check(status==200,f'{path}: unavailable')
status,_,robots=request('/robots.txt');check('Disallow: /\n' not in robots,'Production robots blocks the entire website');check('Sitemap: '+canonical+'/sitemap.xml' in robots,'Robots sitemap host mismatch')
report={'base':base,'canonicalOrigin':canonical,'pagesChecked':len(rows),'internalPathsChecked':len(links),'sitemapUrls':len(urls),'errors':errors,'pages':rows};open(a.output,'w').write(json.dumps(report,indent=2));print(json.dumps({k:v for k,v in report.items() if k!='pages'},indent=2));sys.exit(bool(errors))
