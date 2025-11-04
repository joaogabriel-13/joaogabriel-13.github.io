// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should display the homepage correctly', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Bem-vindo/);

    // Check main heading
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Bem-vindo');

    // Check navigation is present
    const navigation = page.locator('nav').first();
    await expect(navigation).toBeVisible();

    // Check that Just the Docs theme is mentioned
    const content = page.locator('body');
    await expect(content).toContainText('Just the Docs');
  });

  test('should have functional navigation', async ({ page }) => {
    await page.goto('/');

    // Check that navigation links are present
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    // Verify key sections are accessible via navigation
    const sections = [
      'Calculadoras',
      'Prescrição',
    ];

    for (const section of sections) {
      const link = page.locator(`nav a:has-text("${section}")`);
      // Check if link exists and is visible
      if (await link.count() > 0) {
        await expect(link.first()).toBeVisible();
      }
    }
  });

  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });
});
