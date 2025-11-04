# Example Test Output

This document shows what a successful test run looks like.

## Running Tests

```bash
$ npm test

> joaogabriel-13.github.io@1.0.0 test
> playwright test

Running 68 tests using 4 workers

  ✓  1 [chromium] › homepage.spec.js:4:3 › Homepage › should display the homepage correctly (2.3s)
  ✓  2 [chromium] › homepage.spec.js:20:3 › Homepage › should have functional navigation (1.8s)
  ✓  3 [chromium] › homepage.spec.js:40:3 › Homepage › should be responsive (3.2s)
  ✓  4 [chromium] › calculadoras.spec.js:4:3 › Calculadoras - Calculator Pages › calculadoras index page should display correctly (1.5s)
  ✓  5 [chromium] › calculadoras.spec.js:22:3 › Calculadoras - Calculator Pages › calculadora de diluicoes should display correctly (2.1s)
  ✓  6 [chromium] › calculadoras.spec.js:54:3 › Calculadoras - Calculator Pages › calculadora de diluicoes should perform calculation (1.9s)
  ✓  7 [chromium] › calculadoras.spec.js:72:3 › Calculadoras - Calculator Pages › calculadora alternative dilution should display correctly (2.0s)
  ✓  8 [chromium] › calculadoras.spec.js:102:3 › Calculadoras - Calculator Pages › calculadora inputs should only accept numbers (1.2s)
  ✓  9 [chromium] › calculadoras.spec.js:117:3 › Calculadoras - Calculator Pages › calculadora should be responsive on mobile (1.6s)
  ✓  10 [chromium] › prescricoes.spec.js:4:3 › Prescrições - Prescriptions Page › prescricoes index page should display correctly (1.4s)
  ✓  11 [chromium] › prescricoes.spec.js:16:3 › Prescrições - Prescriptions Page › minhas prescricoes page should load (2.2s)
  ✓  12 [chromium] › prescricoes.spec.js:33:3 › Prescrições - Prescriptions Page › minhas prescricoes should have theme toggle (2.5s)
  ✓  13 [chromium] › prescricoes.spec.js:53:3 › Prescrições - Prescriptions Page › minhas prescricoes should have tab navigation (1.8s)
  ✓  14 [chromium] › prescricoes.spec.js:77:3 › Prescrições - Prescriptions Page › minhas prescricoes should display tab content (1.5s)
  ✓  15 [chromium] › prescricoes.spec.js:91:3 › Prescrições - Prescriptions Page › minhas prescricoes should have copy button (1.3s)
  ✓  16 [chromium] › prescricoes.spec.js:100:3 › Prescrições - Prescriptions Page › minhas prescricoes should be responsive (3.4s)
  ✓  17 [chromium] › prescricoes.spec.js:129:3 › Prescrições - Prescriptions Page › minhas prescricoes CSS variables should be defined (1.6s)
  
  [... tests continue for firefox, webkit, and Mobile Chrome ...]

  68 passed (2.5m)

To open last HTML report run:

  npx playwright show-report
```

## Test Report

After running tests, open the HTML report:

```bash
$ npm run test:report
```

The report shows:
- ✅ All tests passed
- 📊 Test duration
- 🌐 Browser coverage
- 📸 Screenshots (on failure)
- 🔍 Traces for debugging

## Individual Test Results

### Homepage Tests
```
✓ Homepage › should display the homepage correctly
✓ Homepage › should have functional navigation
✓ Homepage › should be responsive
```

### Calculator Tests
```
✓ Calculadoras › calculadoras index page should display correctly
✓ Calculadoras › calculadora de diluicoes should display correctly
✓ Calculadoras › calculadora de diluicoes should perform calculation
✓ Calculadoras › calculadora alternative dilution should display correctly
✓ Calculadoras › calculadora inputs should only accept numbers
✓ Calculadoras › calculadora should be responsive on mobile
```

### Prescriptions Tests
```
✓ Prescrições › prescricoes index page should display correctly
✓ Prescrições › minhas prescricoes page should load
✓ Prescrições › minhas prescricoes should have theme toggle
✓ Prescrições › minhas prescricoes should have tab navigation
✓ Prescrições › minhas prescricoes should display tab content
✓ Prescrições › minhas prescricoes should have copy button
✓ Prescrições › minhas prescricoes should be responsive
✓ Prescrições › minhas prescricoes CSS variables should be defined
```

## CI/CD Execution

In GitHub Actions, tests run automatically and results are available as artifacts:

1. Navigate to **Actions** tab in GitHub
2. Select the latest workflow run
3. Download **playwright-report** artifact
4. Extract and open `index.html` to view results

## Test Coverage Matrix

| Test | Chromium | Firefox | WebKit | Mobile Chrome |
|------|----------|---------|--------|---------------|
| Homepage display | ✓ | ✓ | ✓ | ✓ |
| Navigation | ✓ | ✓ | ✓ | ✓ |
| Responsiveness | ✓ | ✓ | ✓ | ✓ |
| Calculator display | ✓ | ✓ | ✓ | ✓ |
| Calculator function | ✓ | ✓ | ✓ | ✓ |
| Prescriptions display | ✓ | ✓ | ✓ | ✓ |
| Theme toggle | ✓ | ✓ | ✓ | ✓ |
| Tab navigation | ✓ | ✓ | ✓ | ✓ |

**Total**: 17 tests × 4 browsers = **68 test executions**
