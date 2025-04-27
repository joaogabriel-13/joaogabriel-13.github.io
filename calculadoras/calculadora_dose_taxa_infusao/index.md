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

<script src="{{ 'assets/js/calculadoras/calculadora_dose_taxa_infusao.js' | relative_url }}" defer></script>