# Playwright E2E Testing Instructions

This document provides comprehensive instructions for running and maintaining Playwright end-to-end (e2e) tests for the joaogabriel-13.github.io website.

## Overview

The e2e tests validate that the website's products (calculators and prescriptions pages) display correctly across different browsers and devices. These tests ensure:

- Visual elements render properly
- Interactive components function as expected
- Pages are responsive on mobile, tablet, and desktop
- Navigation works correctly
- Accessibility features are present

## Test Structure

```
tests/
└── e2e/
    ├── homepage.spec.js          # Tests for homepage display and navigation
    ├── calculadoras.spec.js      # Tests for calculator pages
    └── prescricoes.spec.js       # Tests for prescriptions pages
```

## Prerequisites

### Local Development

1. **Node.js**: Version 16.x or higher
   ```bash
   node --version
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:
   ```bash
   npx playwright install
   ```

   Or install specific browsers:
   ```bash
   npx playwright install chromium
   npx playwright install firefox
   npx playwright install webkit
   ```

4. **Install System Dependencies** (Linux/CI environments):
   ```bash
   npx playwright install-deps
   ```

## Running Tests

### Basic Test Execution

Run all tests:
```bash
npm test
```

Or:
```bash
npx playwright test
```

### Run Tests in Headed Mode

See the browser while tests run:
```bash
npm run test:headed
```

Or:
```bash
npx playwright test --headed
```

### Run Tests in UI Mode

Interactive test runner with time-travel debugging:
```bash
npm run test:ui
```

### Run Tests in Debug Mode

Step through tests with debugging:
```bash
npm run test:debug
```

### Run Specific Test File

```bash
npx playwright test tests/e2e/homepage.spec.js
npx playwright test tests/e2e/calculadoras.spec.js
npx playwright test tests/e2e/prescricoes.spec.js
```

### Run Tests on Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project="Mobile Chrome"
```

### Run Tests with Specific Options

```bash
# Run tests matching a pattern
npx playwright test -g "calculator"

# Run tests with maximum retries
npx playwright test --retries=3

# Run tests with specific timeout
npx playwright test --timeout=30000

# Run tests with workers (parallel execution)
npx playwright test --workers=4
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npm run test:report
```

Or:
```bash
npx playwright show-report
```

This opens an interactive HTML report in your browser showing:
- Test results
- Screenshots on failure
- Traces for debugging
- Performance metrics

## Test Configuration

The tests are configured via `playwright.config.js` in the root directory.

### Key Configuration Options

- **Base URL**: `https://joaogabriel-13.github.io` (production)
  - Override for local testing: `BASE_URL=http://localhost:4000 npm test`
  
- **Test Directory**: `./tests/e2e`

- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome

- **Retries**: 2 retries on CI, 0 locally

- **Screenshots**: Captured on failure

- **Traces**: Captured on first retry

### Environment Variables

You can customize test execution with environment variables:

```bash
# Test against local Jekyll server
BASE_URL=http://localhost:4000 npm test

# Enable CI mode (affects retries and workers)
CI=true npm test

# Run with specific timeout
TIMEOUT=60000 npm test
```

## Test Descriptions

### Homepage Tests (`homepage.spec.js`)

1. **Homepage Display**: Validates title, heading, navigation, and theme elements
2. **Navigation Functionality**: Ensures navigation links are present and visible
3. **Responsiveness**: Tests display on desktop, mobile, and tablet viewports

### Calculator Tests (`calculadoras.spec.js`)

1. **Index Page**: Validates calculator landing page with links to all calculators
2. **Dilution Calculator Display**: Checks all form fields, buttons, and result areas
3. **Calculation Functionality**: Tests actual calculation with sample inputs
4. **Alternative Calculator**: Validates second calculator on the same page
5. **Input Validation**: Ensures inputs only accept numbers and have proper attributes
6. **Mobile Responsiveness**: Tests calculator display on mobile devices

### Prescriptions Tests (`prescricoes.spec.js`)

1. **Index Page**: Validates prescriptions landing page
2. **Main Prescriptions Page**: Checks page load and main container
3. **Theme Toggle**: Tests dark/light theme switching functionality
4. **Tab Navigation**: Validates tab buttons and navigation
5. **Tab Content Display**: Ensures tab content areas render correctly
6. **Copy Button**: Checks for copy functionality button
7. **Responsiveness**: Tests display on mobile, tablet, and desktop
8. **CSS Variables**: Validates CSS custom properties are properly loaded

## Continuous Integration (CI/CD)

### GitHub Actions Example

Create `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
        
      - name: Run Playwright tests
        run: npm test
        
      - name: Upload test results
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

## Writing New Tests

### Test Template

```javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    // Navigate to page
    await page.goto('/path/to/page');

    // Perform actions
    const element = page.locator('selector');
    await element.click();

    // Assert results
    await expect(element).toBeVisible();
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

### Best Practices

1. **Use Descriptive Test Names**: Clearly describe what is being tested
2. **Isolate Tests**: Each test should be independent and not rely on others
3. **Use Locators Wisely**: Prefer role-based locators or data-testid attributes
4. **Wait for Elements**: Use `await expect()` instead of hardcoded waits
5. **Test User Workflows**: Test complete user journeys, not just individual elements
6. **Add Comments**: Explain complex test logic
7. **Keep Tests Maintainable**: Avoid hardcoding values that may change

### Common Locator Strategies

```javascript
// By ID
page.locator('#elementId')

// By class
page.locator('.className')

// By text content
page.locator('text=Button Text')
page.locator('button:has-text("Submit")')

// By role (recommended for accessibility)
page.getByRole('button', { name: 'Submit' })
page.getByRole('heading', { level: 1 })

// By test ID
page.locator('[data-testid="element"]')

// By CSS selector
page.locator('div > button.primary')

// Chaining
page.locator('form').locator('button')
```

## Debugging Tests

### Visual Debugging

```bash
# Run with UI mode for interactive debugging
npx playwright test --ui

# Run in headed mode to see browser
npx playwright test --headed

# Run in debug mode with step-through
npx playwright test --debug
```

### Trace Viewer

When a test fails with trace enabled:

```bash
npx playwright show-trace trace.zip
```

The trace viewer shows:
- Screenshots at each step
- DOM snapshots
- Network activity
- Console logs
- Action timeline

### Screenshots on Failure

Screenshots are automatically captured on test failure and stored in:
```
test-results/
└── [test-name]-[browser]/
    └── test-failed-1.png
```

## Troubleshooting

### Common Issues

1. **Browser Not Installed**
   ```
   Error: browserType.launch: Executable doesn't exist
   ```
   Solution: Run `npx playwright install`

2. **Element Not Found**
   ```
   Error: Timeout 30000ms exceeded waiting for locator
   ```
   Solutions:
   - Check if element exists in page
   - Use `page.locator().waitFor()` 
   - Increase timeout: `await expect(element).toBeVisible({ timeout: 60000 })`

3. **Page Not Loading**
   ```
   Error: page.goto: Timeout 30000ms exceeded
   ```
   Solutions:
   - Check BASE_URL is correct
   - Ensure website is accessible
   - Check network connectivity

4. **Tests Flaky on CI**
   Solutions:
   - Add retries in config
   - Use `waitForLoadState('networkidle')`
   - Increase timeouts for CI environment

### Getting Help

- [Playwright Documentation](https://playwright.dev)
- [Playwright Discord Community](https://discord.gg/playwright)
- [GitHub Issues](https://github.com/microsoft/playwright/issues)

## Maintenance

### Updating Playwright

```bash
# Update to latest version
npm install -D @playwright/test@latest

# Update browsers
npx playwright install
```

### Updating Tests

When the website changes:

1. Review test failures to understand what changed
2. Update locators if element selectors changed
3. Update assertions if expected content changed
4. Add new tests for new features
5. Remove tests for deprecated features

### Test Coverage

Aim to cover:
- ✅ Critical user paths
- ✅ All interactive components
- ✅ Different viewport sizes
- ✅ Different browsers
- ✅ Accessibility features
- ✅ Error states and edge cases

## Additional Resources

### Playwright Ecosystem

- **Playwright Inspector**: Visual debugging tool
- **Codegen**: Generate tests by recording actions
  ```bash
  npx playwright codegen https://joaogabriel-13.github.io
  ```
- **Test Generator**: Auto-generate test code
- **Trace Viewer**: Debug with full context

### Testing Best Practices

1. Test user behavior, not implementation
2. Make tests resilient to changes
3. Keep tests fast and focused
4. Use meaningful assertions
5. Maintain test independence
6. Document complex scenarios

## Summary

These Playwright tests ensure that the calculators and prescriptions pages (products) display correctly across all supported browsers and devices. Regular test execution helps catch issues early and maintains product quality.

For questions or issues, refer to the Playwright documentation or create an issue in the repository.
