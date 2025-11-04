# Testing Guide

This project includes comprehensive end-to-end (e2e) tests using Playwright to ensure products display correctly across different browsers and devices.

## Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests
npm test
```

## Test Coverage

We have **17 e2e tests** covering:

### Homepage (3 tests)
- ✅ Homepage display validation
- ✅ Navigation functionality
- ✅ Responsive design (mobile, tablet, desktop)

### Calculadoras (6 tests)
- ✅ Calculator index page
- ✅ Dilution calculator display
- ✅ Calculation functionality with sample data
- ✅ Alternative dilution calculator
- ✅ Input validation (number-only fields)
- ✅ Mobile responsiveness

### Prescrições (8 tests)
- ✅ Prescriptions index page
- ✅ Main prescriptions page load
- ✅ Dark/Light theme toggle
- ✅ Tab navigation
- ✅ Tab content display
- ✅ Copy button functionality
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ CSS custom properties validation

## Running Tests

### All tests
```bash
npm test
```

### Specific test file
```bash
npx playwright test tests/e2e/homepage.spec.js
npx playwright test tests/e2e/calculadoras.spec.js
npx playwright test tests/e2e/prescricoes.spec.js
```

### Interactive UI mode
```bash
npm run test:ui
```

### Debug mode
```bash
npm run test:debug
```

### With browser visible
```bash
npm run test:headed
```

## View Test Results

```bash
npm run test:report
```

## Documentation

For complete documentation, see:
- **[.github/instructions/playwright-tests.instructions.md](.github/instructions/playwright-tests.instructions.md)** - Full testing instructions
- **[tests/README.md](tests/README.md)** - Quick reference for test directory

## CI/CD

Tests run automatically on:
- Push to `main` or `master` branch
- Pull requests
- Manual workflow dispatch

See [.github/workflows/playwright.yml](.github/workflows/playwright.yml) for CI configuration.

## Test Configuration

Configuration is in `playwright.config.js`:
- **Base URL**: `https://joaogabriel-13.github.io`
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome
- **Retries**: 2 on CI, 0 locally
- **Screenshots**: On failure
- **Traces**: On first retry

## Local Development Testing

To test against a local Jekyll server:

```bash
# Start Jekyll server in one terminal
bundle exec jekyll serve

# Run tests against local server in another terminal
BASE_URL=http://localhost:4000 npm test
```

## Troubleshooting

**Browser not installed?**
```bash
npx playwright install
```

**Need system dependencies (Linux)?**
```bash
npx playwright install-deps
```

**Tests timing out?**
- Check if the website is accessible
- Verify BASE_URL is correct
- Increase timeout in test code

For more troubleshooting help, see the full documentation.
