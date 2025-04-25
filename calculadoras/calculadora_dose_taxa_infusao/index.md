---
layout: default
title: Calculadora de Taxa de Infusões e de Doses
nav_order: 3
parent: Calculadoras
---

# Calculadora de Taxa de Infusões e de Doses

## Calculadora de Taxa de Infusão

<table class="calculadora" aria-describedby="tbl-taxa-infusao-desc">
  <caption id="tbl-taxa-infusao-desc">Calcular Taxa de Infusão (mL/h) com base na Dose, Peso e Concentração</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="pesoPaciente">Peso do Paciente</label></th>
      <td data-label="Valor"><input type="number" id="pesoPaciente" class="input-editavel" placeholder="Insira o peso" min="0" step="any"></td>
      <td data-label="Unidade">kg</td>
    </tr>
    <tr>
      <th scope="row"><label for="dosagem">Dose Desejada</label></th>
      <td data-label="Valor"><input type="number" id="dosagem" class="input-editavel" placeholder="Insira a dose" min="0" step="any"></td>
      <td data-label="Unidade">
        <select id="unidadeDosagem" class="input-editavel" style="width: auto;">
          <option value="mcg/kg/min">mcg/kg/min</option>
          <option value="mg/kg/h">mg/kg/h</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row"><label for="concentracao">Concentração Solução</label></th>
      <td data-label="Valor"><input type="number" id="concentracao" class="input-editavel" placeholder="Insira a concentração" min="0" step="any"></td>
      <td data-label="Unidade">
        <select id="unidadeConcentracao" class="input-editavel" style="width: auto;">
          <option value="mcg/ml">mcg/ml</option>
          <option value="mg/ml">mg/ml</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Taxa Calculada (mL/h)" colspan="2" class="resultado" id="resultadoTaxaInfusao" aria-live="polite"></td>
    </tr>
  </tbody>
</table>
<!-- Botão de cálculo removido pois o JS atualiza em tempo real -->

---

## Calculadora de Dosagem

<table class="calculadora" aria-describedby="tbl-dosagem-desc">
  <caption id="tbl-dosagem-desc">Calcular Dose (mcg/kg/min ou mg/kg/h) com base na Taxa, Peso e Concentração</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="pesoPacienteDosagem">Peso do Paciente</label></th>
      <td data-label="Valor"><input type="number" id="pesoPacienteDosagem" class="input-editavel" placeholder="Insira o peso" min="0" step="any"></td>
      <td data-label="Unidade">kg</td>
    </tr>
    <tr>
      <th scope="row"><label for="taxaDosagem">Taxa de Infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaDosagem" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">mL/h</td>
    </tr>
    <tr>
      <th scope="row"><label for="concentracaoDosagem">Concentração Solução</label></th>
      <td data-label="Valor"><input type="number" id="concentracaoDosagem" class="input-editavel" placeholder="Insira a concentração" min="0" step="any"></td>
      <td data-label="Unidade">
        <select id="unidadeConcentracaoDosagem" class="input-editavel" style="width: auto;">
          <option value="mcg/ml">mcg/ml</option>
          <option value="mg/ml">mg/ml</option>
        </select>
      </td>
    </tr>
     <tr>
      <th scope="row"><label for="unidadeDosagemDesejada">Unidade de Dose Desejada</label></th>
      <td data-label="Unidade" colspan="2">
        <select id="unidadeDosagemDesejada" class="input-editavel" style="width: auto;">
          <option value="mcg/kg/min">mcg/kg/min</option>
          <option value="mg/kg/h">mg/kg/h</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoDosagem" aria-live="polite"></td>
    </tr>
  </tbody>
</table>
<!-- Botão de cálculo removido pois o JS atualiza em tempo real -->

---

## Calculadora de Taxa de Infusão (Independente do Peso)

<table class="calculadora" aria-describedby="tbl-taxa-infusao-indep-desc">
  <caption id="tbl-taxa-infusao-indep-desc">Calcular Taxa de Infusão (mL/h) com base na Dose (U/min ou U/h) e Concentração (U/mL)</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="doseInfusao">Dose Desejada</label></th>
      <td data-label="Valor"><input type="number" id="doseInfusao" class="input-editavel" placeholder="Insira a dose" min="0" step="any"></td>
      <td data-label="Unidade">
        <select id="unidadeDoseInfusao" class="input-editavel" style="width: auto;">
          <option value="U/min">U/min</option>
          <option value="U/h">U/h</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row"><label for="concentracaoInfusao">Concentração Solução</label></th>
      <td data-label="Valor"><input type="number" id="concentracaoInfusao" class="input-editavel" placeholder="Insira a concentração" min="0" step="any"></td>
      <td data-label="Unidade">U/mL</td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Taxa Calculada (mL/h)" colspan="2" class="resultado" id="resultadoTaxaInfusaoIndependente" aria-live="polite"></td>
    </tr>
  </tbody>
</table>
<!-- Botão de cálculo removido pois o JS atualiza em tempo real -->

---

## Calculadora de Dose (Independente do Peso)

<table class="calculadora" aria-describedby="tbl-dose-indep-desc">
  <caption id="tbl-dose-indep-desc">Calcular Dose (U/min ou U/h) com base na Taxa (mL/h) e Concentração (U/mL)</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaDose">Taxa de Infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaDose" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">mL/h</td>
    </tr>
    <tr>
      <th scope="row"><label for="concentracaoDose">Concentração Solução</label></th>
      <td data-label="Valor"><input type="number" id="concentracaoDose" class="input-editavel" placeholder="Insira a concentração" min="0" step="any"></td>
      <td data-label="Unidade">U/mL</td>
    </tr>
    <tr>
      <th scope="row"><label for="unidadeDoseDesejada">Unidade de Dose Desejada</label></th>
      <td data-label="Unidade" colspan="2">
        <select id="unidadeDoseDesejada" class="input-editavel" style="width: auto;">
          <option value="U/min">U/min</option>
          <option value="U/h">U/h</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoDoseIndependente" aria-live="polite"></td>
    </tr>
  </tbody>
</table>
<!-- Botão de cálculo removido pois o JS atualiza em tempo real -->

<script>
// Helper function to safely get element value or return NaN
function getNumericValue(id) {
  const element = document.getElementById(id);
  if (!element) return NaN;
  const value = parseFloat(element.value);
  // Treat empty string as NaN, but allow 0
  return element.value === '' ? NaN : value;
}

// Helper function to safely get element value
function getValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : null;
}

// Helper function to set innerHTML safely
function setResult(id, htmlContent) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = htmlContent;
    }
}

// --- Calculadora de Taxa de Infusão (com peso) ---
function calcularTaxaInfusao() {
  console.log('calcularTaxaInfusao triggered'); // Log function entry
  const dose = getNumericValue('dosagem');
  const unidadeDose = getValue('unidadeDosagem');
  const peso = getNumericValue('pesoPaciente');
  const concentracao = getNumericValue('concentracao');
  const unidadeConc = getValue('unidadeConcentracao');

  let taxa = NaN;
  let resultado = '';

  if (isNaN(dose) || isNaN(peso) || isNaN(concentracao) || peso <= 0 || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoTaxaInfusao', '');
    // Ajuste de concentração para mcg/ml (base unit for calculation)
    let concEmMcgMl = (unidadeConc === 'mg/ml') ? concentracao * 1000 : concentracao;

    if (unidadeDose === 'mcg/kg/min') {
      // dose (mcg/kg/min) * peso (kg) * 60 (min/h) / conc (mcg/ml) = taxa (ml/h)
      taxa = (dose * peso * 60) / concEmMcgMl;
    } else if (unidadeDose === 'mg/kg/h') {
      // dose (mg/kg/h) * peso (kg) * 1000 (mcg/mg) / conc (mcg/ml) = taxa (ml/h)
      taxa = (dose * peso * 1000) / concEmMcgMl;
    }

    if (!isNaN(taxa)) {
        resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    } else {
        resultado = 'Erro no cálculo ou unidade inválida.';
    }
  }
  setResult('resultadoTaxaInfusao', resultado);
}

// --- Calculadora de Dosagem (com peso) ---
function calcularDosagem() {
  console.log('calcularDosagem triggered'); // Log function entry
  const taxa = getNumericValue('taxaDosagem');
  const peso = getNumericValue('pesoPacienteDosagem');
  const concentracao = getNumericValue('concentracaoDosagem');
  const unidadeConc = getValue('unidadeConcentracaoDosagem');
  const unidadeDesejada = getValue('unidadeDosagemDesejada');

  let dosagem = NaN;
  let resultado = '';

  if (isNaN(taxa) || isNaN(peso) || isNaN(concentracao) || peso <= 0 || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoDosagem', '');
    // Ajuste de concentração para mcg/ml
    let concEmMcgMl = (unidadeConc === 'mg/ml') ? concentracao * 1000 : concentracao;

    if (unidadeDesejada === 'mcg/kg/min') {
      // taxa (ml/h) * conc (mcg/ml) / peso (kg) / 60 (min/h) = dose (mcg/kg/min)
      dosagem = (taxa * concEmMcgMl) / (peso * 60);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mcg/kg/min</strong>`;
    } else if (unidadeDesejada === 'mg/kg/h') {
      // taxa (ml/h) * conc (mcg/ml) / peso (kg) / 1000 (mcg/mg) = dose (mg/kg/h)
      dosagem = (taxa * concEmMcgMl) / (peso * 1000);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mg/kg/h</strong>`;
    } else {
         resultado = 'Unidade de dose desejada inválida.';
    }
  }
  setResult('resultadoDosagem', resultado);
}

// --- Calculadora de Taxa de Infusão (Independente do Peso, U/min ou U/h) ---
function calcularTaxaInfusaoIndependente() {
  console.log('calcularTaxaInfusaoIndependente triggered'); // Log function entry
  const dose = getNumericValue('doseInfusao');
  const unidadeDose = getValue('unidadeDoseInfusao');
  const concentracao = getNumericValue('concentracaoInfusao'); // Assume U/mL

  let taxa = NaN;
  let resultado = '';

  if (isNaN(dose) || isNaN(concentracao) || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoTaxaInfusaoIndependente', '');
    if (unidadeDose === 'U/min') {
      // dose (U/min) * 60 (min/h) / conc (U/ml) = taxa (ml/h)
      taxa = (dose * 60) / concentracao;
    } else if (unidadeDose === 'U/h') {
      // dose (U/h) / conc (U/ml) = taxa (ml/h)
      taxa = dose / concentracao;
    }

     if (!isNaN(taxa)) {
        resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    } else {
        resultado = 'Erro no cálculo ou unidade inválida.';
    }
  }
  setResult('resultadoTaxaInfusaoIndependente', resultado);
}

// --- Calculadora de Dose (Independente do Peso, U/min ou U/h) ---
function calcularDoseIndependente() {
  console.log('calcularDoseIndependente triggered'); // Log function entry
  const taxa = getNumericValue('taxaDose');
  const concentracao = getNumericValue('concentracaoDose'); // Assume U/mL
  const unidadeDoseDesejada = getValue('unidadeDoseDesejada');

  let dose = NaN;
  let resultado = '';

  if (isNaN(taxa) || isNaN(concentracao) || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoDoseIndependente', '');
    if (unidadeDoseDesejada === 'U/min') {
      // taxa (ml/h) * conc (U/ml) / 60 (min/h) = dose (U/min)
      dose = (taxa * concentracao) / 60;
      resultado = `Dose: <strong>${dose.toFixed(2)} U/min</strong>`;
    } else if (unidadeDoseDesejada === 'U/h') {
      // taxa (ml/h) * conc (U/ml) = dose (U/h)
      dose = taxa * concentracao;
      resultado = `Dose: <strong>${dose.toFixed(2)} U/h</strong>`;
    } else {
        resultado = 'Unidade de dose desejada inválida.';
    }
  }
  setResult('resultadoDoseIndependente', resultado);
}

// --- Setup Event Listeners ---
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded for dose_taxa_infusao'); // Log DOM ready
  const calculators = [
    { func: calcularTaxaInfusao, ids: ['dosagem', 'unidadeDosagem', 'pesoPaciente', 'concentracao', 'unidadeConcentracao'] },
    { func: calcularDosagem, ids: ['taxaDosagem', 'pesoPacienteDosagem', 'concentracaoDosagem', 'unidadeConcentracaoDosagem', 'unidadeDosagemDesejada'] },
    { func: calcularTaxaInfusaoIndependente, ids: ['doseInfusao', 'unidadeDoseInfusao', 'concentracaoInfusao'] },
    { func: calcularDoseIndependente, ids: ['taxaDose', 'concentracaoDose', 'unidadeDoseDesejada'] }
  ];

  calculators.forEach(calc => {
    calc.ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        console.log(`Adding listener for ${id}`); // Log listener attachment
        const eventType = (el.tagName === 'SELECT') ? 'change' : 'input';
       el.addEventListener(eventType, calc.func);
       }
     });
     // Calculation triggers on input/change via listeners above
   });
 });
 </script>
