'use client';
import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/content';
export default function BriefBuilder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: services[0].title,
    objective: '',
    features: '',
    timeline: 'Exploring options',
    budget: 'Prefer to discuss',
  });
  const fields = [
    'service',
    'objective',
    'features',
    'timeline',
    'budget',
  ] as const;
  const field = fields[step];
  const summary = Object.entries(data)
    .map(([k, v]) => `${k}: ${v || 'To discuss'}`)
    .join('\n');
  const update = (v: string) => setData({ ...data, [field]: v });
  return (
    <div className="brief-builder">
      <div className="brief-controls">
        <div className="eyebrow">PROJECT BRIEF / 0{step + 1} OF 05</div>
        <h3>
          {
            [
              'What are we building?',
              'What should it achieve?',
              'What needs to be included?',
              'When are you looking to start?',
              'Any budget direction?',
            ][step]
          }
        </h3>
        <label htmlFor="brief-field">
          {
            [
              'Required service',
              'Project objective',
              'Key features or requirements',
              'Preferred timeline',
              'Optional budget range',
            ][step]
          }
        </label>
        {field === 'service' ? (
          <select
            id="brief-field"
            value={data.service}
            onChange={(e) => update(e.target.value)}
          >
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        ) : field === 'timeline' ? (
          <select
            id="brief-field"
            value={data.timeline}
            onChange={(e) => update(e.target.value)}
          >
            {[
              'Exploring options',
              'Ready to start',
              'Within 1–3 months',
              'Flexible',
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        ) : (
          <textarea
            id="brief-field"
            rows={3}
            value={data[field]}
            placeholder="Tell us a little more…"
            onChange={(e) => update(e.target.value)}
            maxLength={1500}
          />
        )}
        <div className="brief-actions">
          <button
            className="text-button"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            ← Back
          </button>
          {step < 4 ? (
            <button className="button" onClick={() => setStep(step + 1)}>
              Next step ↗
            </button>
          ) : (
            <Link
              className="button"
              href={'/get-quote?brief=' + encodeURIComponent(summary)}
            >
              Continue to quotation ↗
            </Link>
          )}
        </div>
      </div>
      <div className="brief-summary">
        <span className="eyebrow">YOUR NEXT CHAPTER</span>
        <h3>
          A clear brief.
          <br />A stronger beginning.
        </h3>
        <dl>
          {Object.entries(data).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v || 'To discuss'}</dd>
            </div>
          ))}
        </dl>
        <div className="brief-actions">
          <a
            href={
              'https://wa.me/919398845947?text=' +
              encodeURIComponent(
                'Project enquiry for VRK Solutions\n' + summary,
              )
            }
            target="_blank"
            rel="noreferrer"
          >
            Send via WhatsApp ↗
          </a>
          <button
            className="text-button"
            onClick={() => {
              setStep(0);
              setData({
                service: services[0].title,
                objective: '',
                features: '',
                timeline: 'Exploring options',
                budget: 'Prefer to discuss',
              });
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
