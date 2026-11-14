import { createClient } from 'next-sanity';
import { draftMode } from 'next/headers';
export const configured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export async function query<T>(
  q: string,
  params: Record<string, string> = {},
): Promise<T | null> {
  if (!configured) return null;
  const preview = (await draftMode()).isEnabled;
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2026-11-01',
    useCdn: !preview,
    perspective: preview ? 'drafts' : 'published',
    token: preview ? process.env.SANITY_API_READ_TOKEN : undefined,
  });
  return client.fetch<T>(
    q,
    { ...params, preview },
    { next: { revalidate: preview ? 0 : 60 } },
  );
}
