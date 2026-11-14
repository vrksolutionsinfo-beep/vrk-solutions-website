import { test, expect } from '@playwright/test';
test('brief builder creates a quotation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page
    .getByLabel('Project objective')
    .fill('Improve our business operations');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page
    .getByLabel('Key features or requirements')
    .fill('Customer dashboard');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('link', { name: 'Continue to quotation' }).click();
  await expect(
    page.getByRole('textbox', { name: 'Tell us about your project' }),
  ).toHaveValue(/Improve our business operations/);
});
test('mobile navigation closes on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
});
