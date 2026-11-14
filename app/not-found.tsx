import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="container page-intro">
      <span className="eyebrow">404 / A DIFFERENT DIRECTION</span>
      <h1>This page isn’t here.</h1>
      <p>Let’s get you back to something useful.</p>
      <Link className="button" href="/">
        Return home ↗
      </Link>
    </main>
  );
}
