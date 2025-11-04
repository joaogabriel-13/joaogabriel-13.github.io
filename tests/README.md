# E2E Tests

This directory contains end-to-end (e2e) tests using Playwright to validate product displays on the website.

## Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npm test
```

## Test Files

- **homepage.spec.js** - Tests homepage display and navigation
- **calculadoras.spec.js** - Tests calculator pages functionality and display
- **prescricoes.spec.js** - Tests prescriptions page functionality and display

## Full Documentation

For complete documentation on running, debugging, and writing tests, see:
[.github/instructions/playwright-tests.instructions.md](../.github/instructions/playwright-tests.instructions.md)

## Common Commands

```bash
# Run in UI mode (interactive)
npm run test:ui

# Run with browser visible
npm run test:headed

# Debug tests
npm run test:debug

# View test report
npm run test:report
```
