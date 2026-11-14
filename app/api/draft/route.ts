import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';
export async function GET(req: Request) {
  const u = new URL(req.url);
  if (
    !process.env.SANITY_PREVIEW_SECRET ||
    u.searchParams.get('secret') !== process.env.SANITY_PREVIEW_SECRET
  )
    return new Response('Unauthorized', { status: 401 });
  (await draftMode()).enable();
  const path = u.searchParams.get('path') || '/';
  return NextResponse.redirect(
    new URL(
      path.startsWith('/') && !path.startsWith('//') ? path : '/',
      u.origin,
    ),
  );
}
