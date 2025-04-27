---
layout: default 
title: Sedação e Analgesia
nav_order: 1
parent: Calculadora de Doses por Paciente
---

# Sedação e Analgesia

Informe o peso do paciente para calcular as doses das medicações:

<div class="form-group">
  <label for="pesoPaciente"><strong>Peso do paciente (kg):</strong></label>
  <input type="number" id="pesoPaciente" placeholder="Insira o peso" min="0" step="any">
</div>

---

## Midazolam

- **Dose mínima:** 0,01 mg/kg/h
- **Dose máxima:** 0,2 mg/kg/h
- **Concentrações:** 1 mg/ml, 2 mg/ml, 3 mg/ml

<table class="calculadora" aria-describedby="tbl-midazolam-desc">
  <caption id="tbl-midazolam-desc">Cálculo de Dose - Midazolam</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaMidazolam">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaMidazolam" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" data-medicamento="midazolam">Calcular Dose pela Taxa</button></td> {/* onclick removido, data-medicamento adicionado */}
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoMidazolam" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Fentanila

- **Dose mínima:** 0,01 mcg/kg/min
- **Dose máxima:** 0,03 mcg/kg/min
- **Concentração:** 10 mcg/ml

<table class="calculadora" aria-describedby="tbl-fentanila-desc">
  <caption id="tbl-fentanila-desc">Cálculo de Dose - Fentanila</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaFentanila">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaFentanila" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" data-medicamento="fentanila">Calcular Dose pela Taxa</button></td> {/* onclick removido, data-medicamento adicionado */}
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoFentanila" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Escetamina

- **Dose mínima:** 0,1 mg/kg/h
- **Dose máxima:** 0,5 mg/kg/h
- **Concentrações:** 1 mg/ml, 10 mg/ml

<table class="calculadora" aria-describedby="tbl-escetamina-desc">
  <caption id="tbl-escetamina-desc">Cálculo de Dose - Escetamina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaEscetamina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaEscetamina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" data-medicamento="escetamina">Calcular Dose pela Taxa</button></td> {/* onclick removido, data-medicamento adicionado */}
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoEscetamina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Propofol

- **Dose mínima:** 0,5 mg/kg/h
- **Dose máxima:** 5 mg/kg/h
- **Concentração:** 10 mg/ml

<table class="calculadora" aria-describedby="tbl-propofol-desc">
  <caption id="tbl-propofol-desc">Cálculo de Dose - Propofol</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaPropofol">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaPropofol" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" data-medicamento="propofol">Calcular Dose pela Taxa</button></td> {/* onclick removido, data-medicamento adicionado */}
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoPropofol" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

---

## Dexmedetomidina

- **Dose mínima:** 0,2 mcg/kg/h
- **Dose máxima:** 0,7 mcg/kg/h
- **Concentração:** 4 mcg/ml

<table class="calculadora" aria-describedby="tbl-dexmedetomidina-desc">
  <caption id="tbl-dexmedetomidina-desc">Cálculo de Dose - Dexmedetomidina</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="taxaDexmedetomidina">Taxa de infusão</label></th>
      <td data-label="Valor"><input type="number" id="taxaDexmedetomidina" class="input-editavel" placeholder="Insira a taxa" min="0" step="any"></td>
      <td data-label="Unidade">ml/h</td>
    </tr>
    <tr>
      <th scope="row">Ação</th>
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" data-medicamento="dexmedetomidina">Calcular Dose pela Taxa</button></td> {/* onclick removido, data-medicamento adicionado */}
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoDexmedetomidina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

<script src="{{ 'assets/js/calculadora_dose_paciente/sedoanalgesia.js' | relative_url }}" defer></script>
