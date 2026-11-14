import { describe, it, expect, vi } from 'vitest';
import { POST } from '../app/api/enquiry/route';
const data = {
  kind: 'quote',
  name: 'Example Name',
  email: 'example@example.com',
  service: 'Software Development',
  message: 'A custom internal application for our operations.',
  consent: true,
  website: '',
};
function request(body: unknown, origin = 'https://vrksolutions.in') {
  return new Request('https://vrksolutions.in/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', origin },
    body: JSON.stringify(body),
  });
}
describe('server enquiry endpoint', () => {
  it('rejects cross-origin submissions', async () => {
    expect((await POST(request(data, 'https://other.example'))).status).toBe(
      403,
    );
  });
  it('rejects invalid input', async () => {
    expect((await POST(request({ ...data, email: 'invalid' }))).status).toBe(
      400,
    );
  });
  it('never claims delivery when email is unconfigured', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    const response = await POST(request(data));
    expect(response.status).toBe(503);
    expect((await response.json()).message).toContain('not connected');
    vi.unstubAllEnvs();
  });
});
