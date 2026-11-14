'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="container page-intro">
      <h1>A brief interruption.</h1>
      <p>
        Something went wrong loading this page. Please try again or contact
        info@vrksolutions.in.
      </p>
      <button className="button" onClick={reset}>
        Try again ↗
      </button>
    </main>
  );
}
