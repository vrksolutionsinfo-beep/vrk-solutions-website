import { describe, it, expect } from 'vitest';
import { enquirySchema } from '../lib/validation';
const valid = {
  kind: 'quote',
  name: 'Example Name',
  email: 'example@example.com',
  service: 'Software Development',
  message: 'A custom internal application for our operations.',
  consent: true,
  website: '',
};
describe('enquiry validation', () => {
  it('accepts a complete enquiry', () =>
    expect(enquirySchema.safeParse(valid).success).toBe(true));
  it('requires consent and valid email', () => {
    expect(enquirySchema.safeParse({ ...valid, consent: false }).success).toBe(
      false,
    );
    expect(enquirySchema.safeParse({ ...valid, email: 'bad' }).success).toBe(
      false,
    );
  });
  it('bounds untrusted content', () =>
    expect(
      enquirySchema.safeParse({ ...valid, message: 'x'.repeat(6001) }).success,
    ).toBe(false));
});
