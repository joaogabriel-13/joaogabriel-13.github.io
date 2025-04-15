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

<script src="/assets/js/calculadora_dose_taxa_infusao.js"></script>