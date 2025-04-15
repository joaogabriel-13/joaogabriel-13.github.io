---
layout: default
title: Calculadora de Doses por Paciente
nav_order: 2
parent: Calculadoras
---

# Calculadora de Doses por Paciente

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

<div class="form-group">
  <button onclick="calcularDose('midazolam')">Calcular Dose</button>
  <div class="result" id="resultadoMidazolam"></div>
</div>

---

## Fentanila

- **Dose mínima:** 0,01 mcg/kg/min
- **Dose máxima:** 0,03 mcg/kg/min
- **Concentração:** 10 mcg/ml

<div class="form-group">
  <button onclick="calcularDose('fentanila')">Calcular Dose</button>
  <div class="result" id="resultadoFentanila"></div>
</div>

---

## Norepinefrina

- **Dose mínima:** 0,01 mcg/kg/min
- **Dose máxima:** 3 mcg/kg/min
- **Concentrações:** 65 mcg/ml, 160 mcg/ml, 200 mcg/ml

<div class="form-group">
  <button onclick="calcularDose('norepinefrina')">Calcular Dose</button>
  <div class="result" id="resultadoNorepinefrina"></div>
</div>

---

## Escetamina

- **Dose mínima:** mg/kg/h
- **Dose máxima:** mg/kg/h
- **Concentrações:** 1 mg/ml, 10 mg/ml

<div class="form-group">
  <button onclick="calcularDose('escetamina')">Calcular Dose</button>
  <div class="result" id="resultadoEscetamina"></div>
</div>

---

## Propofol

- **Dose mínima:** 0,5 mg/kg/h
- **Dose máxima:** 5 mg/kg/h
- **Concentração:** 10 mg/ml

<div class="form-group">
  <button onclick="calcularDose('propofol')">Calcular Dose</button>
  <div class="result" id="resultadoPropofol"></div>
</div>

---

## Dobutamina

- **Dose mínima:** 0,05 mcg/kg/min
- **Dose máxima:** 20 mcg/kg/min
- **Concentrações:** 1000 mcg/ml, 4000 mcg/ml

<div class="form-group">
  <button onclick="calcularDose('dobutamina')">Calcular Dose</button>
  <div class="result" id="resultadoDobutamina"></div>
</div>

---

## Dopamina

- **Dose mínima:** 1 mcg/kg/min
- **Dose máxima:** 20 mcg/kg/min
- **Concentração:** 1 mg/ml

<div class="form-group">
  <button onclick="calcularDose('dopamina')">Calcular Dose</button>
  <div class="result" id="resultadoDopamina"></div>
</div>

---

## Dexmedetomidina

- **Dose mínima:** 0,2 mcg/kg/h
- **Dose máxima:** 0,7 mcg/kg/h
- **Concentração:** 4 mcg/ml

<div class="form-group">
  <button onclick="calcularDose('dexmedetomidina')">Calcular Dose</button>
  <div class="result" id="resultadoDexmedetomidina"></div>
</div>

<script>
function calcularDose(medicamento) {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  if (!peso || peso <= 0) {
    alert('Por favor, insira o peso do paciente.');
    return;
  }
  let resultado = '';
  switch(medicamento) {
    case 'midazolam':
      resultado = `Dose mínima: ${(0.01 * peso).toFixed(2)} mg/h<br> Dose máxima: ${(0.2 * peso).toFixed(2)} mg/h`;
      break;
    case 'fentanila':
      resultado = `Dose mínima: ${(0.01 * peso).toFixed(2)} mcg/min<br> Dose máxima: ${(0.03 * peso).toFixed(2)} mcg/min`;
      break;
    case 'norepinefrina':
      resultado = `Dose mínima: ${(0.01 * peso).toFixed(2)} mcg/min<br> Dose máxima: ${(3 * peso).toFixed(2)} mcg/min`;
      break;
    case 'escetamina':
      resultado = `Informe as doses mínima e máxima para cálculo.`;
      break;
    case 'propofol':
      resultado = `Dose mínima: ${(0.5 * peso).toFixed(2)} mg/h<br> Dose máxima: ${(5 * peso).toFixed(2)} mg/h`;
      break;
    case 'dobutamina':
      resultado = `Dose mínima: ${(0.05 * peso).toFixed(2)} mcg/min<br> Dose máxima: ${(20 * peso).toFixed(2)} mcg/min`;
      break;
    case 'dopamina':
      resultado = `Dose mínima: ${(1 * peso).toFixed(2)} mcg/min<br> Dose máxima: ${(20 * peso).toFixed(2)} mcg/min`;
      break;
    case 'dexmedetomidina':
      resultado = `Dose mínima: ${(0.2 * peso).toFixed(2)} mcg/h<br> Dose máxima: ${(0.7 * peso).toFixed(2)} mcg/h`;
      break;
    default:
      resultado = 'Medicação não encontrada.';
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>