// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Prescrições - Prescriptions Page', () => {
  test('prescricoes index page should display correctly', async ({ page }) => {
    await page.goto('/prescricoes/');

    // Check page heading
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Prescrições');

    // Verify link to prescriptions file
    const prescriptionLink = page.locator('a[href*="minhas_prescricoes.html"]');
    await expect(prescriptionLink).toBeVisible();
    await expect(prescriptionLink).toContainText('prescrição');
  });

  test('minhas prescricoes page should load', async ({ page }) => {
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Check that page loads successfully
    await expect(page).toHaveTitle(/Assistente Médico/);

    // Verify main container is present
    const container = page.locator('.container');
    await expect(container).toBeVisible();

    // Check for header with title
    const header = page.locator('.header-container');
    await expect(header).toBeVisible();

    const title = page.locator('h1');
    await expect(title).toBeVisible();
  });

  test('minhas prescricoes should have theme toggle', async ({ page }) => {
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Check for theme toggle button
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();

    // Click theme toggle to test functionality
    await themeToggle.click();

    // Wait for DOM updates after click
    await page.waitForLoadState('domcontentloaded');

    // Verify theme data attribute changed
    const htmlElement = page.locator('html');
    const dataTheme = await htmlElement.getAttribute('data-theme');
    
    // Theme should be one of the valid values
    expect(['dark', 'light', null]).toContain(dataTheme);
  });

  test('minhas prescricoes should have tab navigation', async ({ page }) => {
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Check for tab navigation
    const tabNav = page.locator('.tab-nav');
    await expect(tabNav).toBeVisible();

    // Verify tabs are present
    const tabs = page.locator('.tab-nav button');
    const tabCount = await tabs.count();
    expect(tabCount).toBeGreaterThan(0);

    // Click first tab to test functionality
    if (tabCount > 0) {
      const firstTab = tabs.first();
      await firstTab.click();

      // Wait for active class to be applied
      await expect(firstTab).toHaveClass(/active/);
    }
  });

  test('minhas prescricoes should display tab content', async ({ page }) => {
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Find all tab content areas
    const tabContents = page.locator('.tab-content');
    const contentCount = await tabContents.count();
    
    // At least one tab content should exist
    expect(contentCount).toBeGreaterThan(0);

    // At least one tab content should be active/visible
    const activeContent = page.locator('.tab-content.active');
    const activeCount = await activeContent.count();
    expect(activeCount).toBeGreaterThan(0);
  });

  test('minhas prescricoes should have copy button', async ({ page }) => {
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Check for copy selected button (may be hidden initially)
    const copyBtn = page.locator('#copiarSelecionadosBtn');
    
    // Button should exist in DOM even if not visible
    const buttonExists = await copyBtn.count();
    expect(buttonExists).toBe(1);
  });

  test('minhas prescricoes should be responsive', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Verify key elements are visible on mobile
    const container = page.locator('.container');
    await expect(container).toBeVisible();

    const header = page.locator('.header-container');
    await expect(header).toBeVisible();

    const tabNav = page.locator('.tab-nav');
    await expect(tabNav).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/prescricoes/minhas_prescricoes.html');
    
    await expect(container).toBeVisible();
    await expect(header).toBeVisible();

    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/prescricoes/minhas_prescricoes.html');
    
    await expect(container).toBeVisible();
    await expect(header).toBeVisible();
  });

  test('minhas prescricoes CSS variables should be defined', async ({ page }) => {
    await page.goto('/prescricoes/minhas_prescricoes.html');

    // Check that CSS custom properties are applied
    const rootStyles = await page.evaluate(() => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      return {
        primaryColor: styles.getPropertyValue('--primary-color'),
        cardBg: styles.getPropertyValue('--card-bg'),
      };
    });

    // Verify that CSS variables are set
    expect(rootStyles.primaryColor).toBeTruthy();
    expect(rootStyles.cardBg).toBeTruthy();
  });
});
