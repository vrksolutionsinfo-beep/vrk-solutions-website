import { JsonLd } from './JsonLd';
export type Question = [string, string];
export function Questions({
  items,
  structured = false,
}: {
  items: Question[];
  structured?: boolean;
}) {
  return (
    <>
      {structured && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map(([question, answer]) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
          }}
        />
      )}
      <div className="faq-list">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
