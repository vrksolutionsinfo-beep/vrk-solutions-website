import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';
export const dynamic = 'force-dynamic';
export default function Studio() {
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? (
    <NextStudio config={config} />
  ) : (
    <main className="container page-intro">
      <p className="eyebrow">CONTENT WORKSPACE</p>
      <h1>Connect your Sanity project.</h1>
      <p>
        Set the Sanity project ID and dataset in your environment to enable the
        editorial studio.
      </p>
    </main>
  );
}
