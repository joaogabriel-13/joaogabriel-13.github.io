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
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoEpinefrina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

<script src="{{ 'assets/js/calculadoras/calculadora_dose_paciente/drogas_vasoativas.js' | relative_url }}" defer></script>