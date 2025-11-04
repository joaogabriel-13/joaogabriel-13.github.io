// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Calculadoras - Calculator Pages', () => {
  test('calculadoras index page should display correctly', async ({ page }) => {
    await page.goto('/calculadoras/');

    // Check page title contains "Calculadoras"
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Calculadoras');

    // Verify that calculator links are present
    const calculatorLinks = [
      'Calculadora de Diluições',
      'Calculadora de Dose por Paciente',
      'Calculadora de Dose e Taxa de Infusão',
      'Outras Calculadoras',
    ];

    for (const linkText of calculatorLinks) {
      const link = page.locator(`a:has-text("${linkText}")`);
      await expect(link.first()).toBeVisible();
    }
  });

  test('calculadora de diluicoes should display correctly', async ({ page }) => {
    await page.goto('/calculadoras/calculadora_diluicoes/');

    // Check page heading
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Calculadora de Diluição');

    // Verify calculator table is present
    const table = page.locator('table.calculadora').first();
    await expect(table).toBeVisible();

    // Check for input fields
    const c1Input = page.locator('#c1');
    await expect(c1Input).toBeVisible();
    
    const v1Input = page.locator('#v1');
    await expect(v1Input).toBeVisible();
    
    const c2Input = page.locator('#c2');
    await expect(c2Input).toBeVisible();
    
    const v2Input = page.locator('#v2');
    await expect(v2Input).toBeVisible();

    // Check for calculate button
    const calculateBtn = page.locator('#btn-calcular-dil');
    await expect(calculateBtn).toBeVisible();
    await expect(calculateBtn).toContainText('Calcular');

    // Verify result display area exists
    const resultArea = page.locator('#resultadoDiluição');
    await expect(resultArea).toBeVisible();
  });

  test('calculadora de diluicoes should perform calculation', async ({ page }) => {
    await page.goto('/calculadoras/calculadora_diluicoes/');

    // Fill in three values
    await page.fill('#c1', '10');
    await page.fill('#v1', '5');
    await page.fill('#c2', '2');

    // Click calculate button
    await page.click('#btn-calcular-dil');

    // Wait for result to appear
    const resultArea = page.locator('#resultadoDiluição');
    await expect(resultArea).not.toBeEmpty();
    
    // Result should contain "Volume final"
    await expect(resultArea).toContainText(/Volume final|V2/);
  });

  test('calculadora alternative dilution should display correctly', async ({ page }) => {
    await page.goto('/calculadoras/calculadora_diluicoes/');

    // Scroll to alternative calculator section
    const altSection = page.locator('h2:has-text("Calculadora de Diluição – Mistura")');
    await expect(altSection).toBeVisible();

    // Verify alternative calculator table
    const altTable = page.locator('table.calculadora').nth(1);
    await expect(altTable).toBeVisible();

    // Check for alternative calculator inputs
    const c1AltInput = page.locator('#c1Alt');
    await expect(c1AltInput).toBeVisible();
    
    const c2AltInput = page.locator('#c2Alt');
    await expect(c2AltInput).toBeVisible();
    
    const cfAltInput = page.locator('#cfAlt');
    await expect(cfAltInput).toBeVisible();
    
    const vfAltInput = page.locator('#vfAlt');
    await expect(vfAltInput).toBeVisible();

    // Check for calculate button
    const calculateBtnAlt = page.locator('#btn-calcular-dil-alt');
    await expect(calculateBtnAlt).toBeVisible();

    // Verify result display area
    const resultAreaAlt = page.locator('#resultadoDiluiçãoAlt');
    await expect(resultAreaAlt).toBeVisible();
  });

  test('calculadora inputs should only accept numbers', async ({ page }) => {
    await page.goto('/calculadoras/calculadora_diluicoes/');

    const c1Input = page.locator('#c1');
    
    // Verify input type
    const inputType = await c1Input.getAttribute('type');
    expect(inputType).toBe('number');

    // Verify min attribute
    const minValue = await c1Input.getAttribute('min');
    expect(minValue).toBe('0');
  });

  test('calculadora should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/calculadoras/calculadora_diluicoes/');

    // Verify elements are still visible on mobile
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    const table = page.locator('table.calculadora').first();
    await expect(table).toBeVisible();

    const calculateBtn = page.locator('#btn-calcular-dil');
    await expect(calculateBtn).toBeVisible();
  });
});
