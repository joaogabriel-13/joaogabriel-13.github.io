---
layout: default
title: Drogas Vasoativas
nav_order: 2
parent: Calculadora de Doses por Paciente
---

# Drogas Vasoativas

Informe o peso do paciente para calcular as doses das medicações:

<div class="form-group">
  <label for="pesoPaciente"><strong>Peso do paciente (kg):</strong></label>
  <input type="number" id="pesoPaciente" placeholder="Insira o peso" min="0" step="any">
</div>

---

## Norepinefrina

- **Dose mínima:** 0,01 mcg/kg/min
- **Dose máxima:** 3 mcg/kg/min
- **Concentrações:** 64 mcg/ml, 160 mcg/ml, 200 mcg/ml

<table class="calculadora" aria-describedby="tbl-norepinefrina-desc">
  <caption id="tbl-norepinefrina-desc">Cálculo de Dose - Norepinefrina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaNorepinefrina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaNorepinefrina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('norepinefrina')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoNorepinefrina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Dobutamina

- **Dose mínima:** 0,05 mcg/kg/min
- **Dose máxima:** 20 mcg/kg/min
- **Concentrações:** 1000 mcg/ml, 4000 mcg/ml

<table class="calculadora" aria-describedby="tbl-dobutamina-desc">
  <caption id="tbl-dobutamina-desc">Cálculo de Dose - Dobutamina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaDobutamina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaDobutamina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('dobutamina')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoDobutamina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Dopamina

- **Dose mínima:** 1 mcg/kg/min
- **Dose máxima:** 20 mcg/kg/min
- **Concentração:** 1 mg/ml (1000 mcg/ml)

<table class="calculadora" aria-describedby="tbl-dopamina-desc">
  <caption id="tbl-dopamina-desc">Cálculo de Dose - Dopamina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaDopamina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaDopamina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('dopamina')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoDopamina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Nitroprusseto

- **Dose mínima:** 0,5 mcg/kg/min
- **Dose máxima:** 10 mcg/kg/min
- **Concentração:** 200 mcg/ml

<table class="calculadora" aria-describedby="tbl-nitroprusseto-desc">
  <caption id="tbl-nitroprusseto-desc">Cálculo de Dose - Nitroprusseto</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaNitroprusseto">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaNitroprusseto" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('nitroprusseto')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoNitroprusseto" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Nitroglicerina

- **Dose mínima:** 5 mcg/min
- **Dose máxima:** 200 mcg/min
- **Concentração:** 200 mcg/ml

<table class="calculadora" aria-describedby="tbl-nitroglicerina-desc">
  <caption id="tbl-nitroglicerina-desc">Cálculo de Dose - Nitroglicerina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaNitroglicerina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaNitroglicerina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('nitroglicerina')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoNitroglicerina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Epinefrina

- **Dose mínima:** 0,1 mcg/kg/min
- **Dose máxima:** 2 mcg/kg/min
- **Concentração:** 60 mcg/ml

<table class="calculadora" aria-describedby="tbl-epinefrina-desc">
  <caption id="tbl-epinefrina-desc">Cálculo de Dose - Epinefrina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaEpinefrina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaEpinefrina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('epinefrina')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoEpinefrina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

<script>
// Helper function to safely get element value or return NaN
function getNumericValue(id) {
  const element = document.getElementById(id);
  return element ? parseFloat(element.value) : NaN;
}

function calcularDosePorTaxa(medicamento) {
  console.log(`calcularDosePorTaxa triggered for ${medicamento}`); // Log function entry
  const taxaInputId = 'taxa' + capitalize(medicamento);
  const taxa = getNumericValue(taxaInputId);
  const resultadoElement = document.getElementById('resultado' + capitalize(medicamento));

  if (!resultadoElement) return; // Exit if result element doesn't exist

  // Validation checks for taxa
   if (isNaN(taxa)) {
     // Reverted: Just return if taxa is invalid/empty
     // Keep existing result content if validation fails
     return;
   }
  if (taxa < 0) {
     // Reverted: Just return if taxa is negative
     // Keep existing result content if validation fails
     return;
   }
   // Clear result only AFTER taxa validation passes
   resultadoElement.innerHTML = '';
   // No special message for taxa === 0, let the calculation proceed to show 0 dose.
   // if (taxa === 0) { ... }
   // Stray brace removed here

  let resultadoHtml = '';
  let dosePorHora, dosePorPeso, doseMcgMin;

  // Nitroglicerina calculation is different (mcg/min, no weight)
  if (medicamento === 'nitroglicerina') {
    doseMcgMin = taxa * 200 / 60; // 200 mcg/ml concentration
    resultadoHtml = `<strong>200 mcg/ml:</strong> ${taxa.toFixed(2)} ml/h = ${doseMcgMin.toFixed(2)} mcg/min`;
    resultadoElement.innerHTML = resultadoHtml;
    return; // Calculation done for Nitroglicerina
  }

  // For other drugs, check weight
  const peso = getNumericValue('pesoPaciente');
  if (isNaN(peso) || peso <= 0) {
    // Reverted: Just return if weight is invalid/empty
    // Keep existing result content if validation fails
    return;
  }
  // Clear result only AFTER weight validation passes (for weight-dependent drugs)
  // Note: Nitroglicerina doesn't depend on weight, so its result is cleared earlier if taxa is valid.
  if (medicamento !== 'nitroglicerina') {
      resultadoElement.innerHTML = '';
  }


  let concent = []; // Concentrations in mcg/ml
  switch (medicamento) {
    case 'norepinefrina': concent = [64, 160, 200]; break;
    case 'dobutamina':    concent = [1000, 4000]; break;
    case 'dopamina':      concent = [1000]; break; // 1 mg/ml = 1000 mcg/ml
    case 'nitroprusseto': concent = [200]; break;
    case 'epinefrina':    concent = [60]; break;
    default:
      resultadoHtml = 'Medicamento desconhecido.';
      resultadoElement.innerHTML = resultadoHtml;
      return;
  }

  resultadoHtml = concent.map(c => {
    dosePorHora = taxa * c; // mcg/h
    dosePorPeso = dosePorHora / (60 * peso); // mcg/kg/min
    return `<strong>${c} mcg/ml:</strong> ${dosePorHora.toFixed(2)} mcg/h (${dosePorPeso.toFixed(3)} mcg/kg/min)`;
  }).join('<br>');

  resultadoElement.innerHTML = resultadoHtml;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded for drogovasoativas'); // Log DOM ready
  const meds = ['norepinefrina', 'dobutamina', 'dopamina', 'nitroprusseto', 'nitroglicerina', 'epinefrina'];
  const pesoInput = document.getElementById('pesoPaciente');

  // Function to trigger calculation for all weight-dependent meds based on peso change
  function calcularTodasDosesPesoDependente() {
      meds.filter(m => m !== 'nitroglicerina').forEach(m => calcularDosePorTaxa(m));
  }

  if (pesoInput) {
      console.log('Adding listener for pesoPaciente'); // Log listener attachment
      pesoInput.addEventListener('input', calcularTodasDosesPesoDependente);
  }

  // Add event listeners to each taxa input to recalculate its specific dose
  meds.forEach(m => {
    const taxaInput = document.getElementById('taxa' + capitalize(m));
    if (taxaInput) {
      console.log(`Adding listener for ${taxaInput.id}`); // Log listener attachment
      taxaInput.addEventListener('input', () => calcularDosePorTaxa(m));
    }
     // Button click handled by onclick attribute in HTML
  });

     // Calculation triggers on input/change via listeners above
 });
 </script>
