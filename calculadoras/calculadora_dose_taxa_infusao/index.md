---
layout: default
title: Calculadora de Taxa de Infusões e de Doses
nav_order: 3
parent: Calculadoras
---

# Calculadora de Taxa de Infusões e de Doses

## Calculadora de Taxa de Infusão

<div class="form-group">
  <label for="pesoPaciente">Peso do Paciente (kg):</label>
  <input type="number" id="pesoPaciente" placeholder="Insira o peso em kg" min="0" step="any">
</div>
<div class="form-group">
  <label for="dosagem">Dose:</label>
  <input type="number" id="dosagem" placeholder="Insira a dose" min="0" step="any">
  <select id="unidadeDosagem">
    <option value="mcg/kg/min">mcg/kg/min</option>
    <option value="mg/kg/h">mg/kg/h</option>
  </select>
</div>
<div class="form-group">
  <label for="concentracao">Concentração da Solução:</label>
  <input type="number" id="concentracao" placeholder="Insira a concentração" min="0" step="any">
  <select id="unidadeConcentracao">
    <option value="mcg/ml">mcg/ml</option>
    <option value="mg/ml">mg/ml</option>
  </select>
</div>
<div class="result" id="resultadoTaxaInfusao"></div>

---

## Calculadora de Dosagem

<div class="form-group">
  <label for="pesoPacienteDosagem">Peso do Paciente (kg):</label>
  <input type="number" id="pesoPacienteDosagem" placeholder="Insira o peso em kg" min="0" step="any">
</div>
<div class="form-group">
  <label for="taxaDosagem">Taxa de Infusão (mL/h):</label>
  <input type="number" id="taxaDosagem" placeholder="Insira a taxa de infusão" min="0" step="any">
</div>
<div class="form-group">
  <label for="concentracaoDosagem">Concentração da Solução:</label>
  <input type="number" id="concentracaoDosagem" placeholder="Insira a concentração" min="0" step="any">
  <select id="unidadeConcentracaoDosagem">
    <option value="mcg/ml">mcg/ml</option>
    <option value="mg/ml">mg/ml</option>
  </select>
</div>
<div class="form-group">
  <label for="unidadeDosagemDesejada">Unidade de Dose:</label>
  <select id="unidadeDosagemDesejada">
    <option value="mcg/kg/min">mcg/kg/min</option>
    <option value="mg/kg/h">mg/kg/h</option>
  </select>
</div>
<div class="result" id="resultadoDosagem"></div>

---

## Calculadora de Taxa de Infusão (Independente do Peso)

<div class="form-group">
  <label for="doseInfusao">Dose:</label>
  <input type="number" id="doseInfusao" placeholder="Insira a dose" min="0" step="any">
  <select id="unidadeDoseInfusao">
    <option value="U/min">U/min</option>
    <option value="U/h">U/h</option>
  </select>
</div>
<div class="form-group">
  <label for="concentracaoInfusao">Concentração da Solução (U/ml):</label>
  <input type="number" id="concentracaoInfusao" placeholder="Insira a concentração" min="0" step="any">
</div>
<div class="result" id="resultadoTaxaInfusaoIndependente"></div>

---

## Calculadora de Dose (Independente do Peso)

<div class="form-group">
  <label for="taxaDose">Taxa de Infusão (mL/h):</label>
  <input type="number" id="taxaDose" placeholder="Insira a taxa de infusão" min="0" step="any">
</div>
<div class="form-group">
  <label for="concentracaoDose">Concentração da Solução (U/ml):</label>
  <input type="number" id="concentracaoDose" placeholder="Insira a concentração" min="0" step="any">
</div>
<div class="form-group">
  <label for="unidadeDoseDesejada">Unidade de Dose:</label>
  <select id="unidadeDoseDesejada">
    <option value="U/min">U/min</option>
    <option value="U/h">U/h</option>
  </select>
</div>
<div class="result" id="resultadoDoseIndependente"></div>

<script>
// --- Calculadora de Taxa de Infusão (com peso) ---
function calcularTaxaInfusao() {
  const dose = parseFloat(document.getElementById('dosagem').value);
  const unidadeDose = document.getElementById('unidadeDosagem').value;
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  const concentracao = parseFloat(document.getElementById('concentracao').value);
  const unidadeConc = document.getElementById('unidadeConcentracao').value;

  let taxa = 0;
  let resultado = '';

  if (!dose || !peso || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    // Ajuste de concentração para mcg/ml
    let concFinal = concentracao;
    if (unidadeConc === 'mg/ml') concFinal = concentracao * 1000;

    if (unidadeDose === 'mcg/kg/min') {
      taxa = (dose * peso * 60) / concFinal;
    } else if (unidadeDose === 'mg/kg/h') {
      taxa = (dose * peso * 1000) / concFinal;
    }
    resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
  }
  document.getElementById('resultadoTaxaInfusao').innerHTML = resultado;
}

// --- Calculadora de Dosagem (com peso) ---
function calcularDosagem() {
  const taxa = parseFloat(document.getElementById('taxaDosagem').value);
  const peso = parseFloat(document.getElementById('pesoPacienteDosagem').value);
  const concentracao = parseFloat(document.getElementById('concentracaoDosagem').value);
  const unidadeConc = document.getElementById('unidadeConcentracaoDosagem').value;
  const unidadeDesejada = document.getElementById('unidadeDosagemDesejada').value;

  let dosagem = 0;
  let resultado = '';

  if (!taxa || !peso || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    // Ajuste de concentração para mcg/ml
    let concFinal = concentracao;
    if (unidadeConc === 'mg/ml') concFinal = concentracao * 1000;

    if (unidadeDesejada === 'mcg/kg/min') {
      dosagem = (taxa * concFinal) / (peso * 60);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mcg/kg/min</strong>`;
    } else if (unidadeDesejada === 'mg/kg/h') {
      dosagem = (taxa * concFinal) / (peso * 1000);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mg/kg/h</strong>`;
    }
  }
  document.getElementById('resultadoDosagem').innerHTML = resultado;
}

// --- Calculadora de Taxa de Infusão (Independente do Peso, U/min ou U/h) ---
function calcularTaxaInfusaoIndependente() {
  const dose = parseFloat(document.getElementById('doseInfusao').value);
  const unidadeDose = document.getElementById('unidadeDoseInfusao').value;
  const concentracao = parseFloat(document.getElementById('concentracaoInfusao').value);

  let taxa = 0;
  let resultado = '';

  if (!dose || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    if (unidadeDose === 'U/min') {
      taxa = (dose * 60) / concentracao;
      resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    } else if (unidadeDose === 'U/h') {
      taxa = dose / concentracao;
      resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    }
  }
  document.getElementById('resultadoTaxaInfusaoIndependente').innerHTML = resultado;
}

// --- Calculadora de Dose (Independente do Peso, U/min ou U/h) ---
function calcularDoseIndependente() {
  const taxa = parseFloat(document.getElementById('taxaDose').value);
  const concentracao = parseFloat(document.getElementById('concentracaoDose').value);
  const unidadeDose = document.getElementById('unidadeDoseDesejada').value;

  let dose = 0;
  let resultado = '';

  if (!taxa || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    if (unidadeDose === 'U/min') {
      dose = (taxa * concentracao) / 60;
      resultado = `Dose: <strong>${dose.toFixed(2)} U/min</strong>`;
    } else if (unidadeDose === 'U/h') {
      dose = taxa * concentracao;
      resultado = `Dose: <strong>${dose.toFixed(2)} U/h</strong>`;
    }
  }
  document.getElementById('resultadoDoseIndependente').innerHTML = resultado;
}

// --- Tornar os cálculos automáticos ao digitar ou alterar campos ---
document.addEventListener('DOMContentLoaded', function() {
  // Taxa de Infusão (com peso)
  ['dosagem', 'unidadeDosagem', 'pesoPaciente', 'concentracao', 'unidadeConcentracao'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularTaxaInfusao);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularTaxaInfusao);
  });

  // Dosagem (com peso)
  ['taxaDosagem', 'pesoPacienteDosagem', 'concentracaoDosagem', 'unidadeConcentracaoDosagem', 'unidadeDosagemDesejada'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularDosagem);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularDosagem);
  });

  // Taxa de Infusão (independente do peso)
  ['doseInfusao', 'unidadeDoseInfusao', 'concentracaoInfusao'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularTaxaInfusaoIndependente);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularTaxaInfusaoIndependente);
  });

  // Dose (independente do peso)
  ['taxaDose', 'concentracaoDose', 'unidadeDoseDesejada'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularDoseIndependente);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularDoseIndependente);
  });
});
</script>