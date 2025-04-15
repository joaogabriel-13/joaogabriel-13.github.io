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
  <label for="taxaMidazolam">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaMidazolam" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('midazolam')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoMidazolam"></div>
</div>

---

## Fentanila

- **Dose mínima:** 0,01 mcg/kg/min
- **Dose máxima:** 0,03 mcg/kg/min
- **Concentração:** 10 mcg/ml

<div class="form-group">
  <label for="taxaFentanila">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaFentanila" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('fentanila')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoFentanila"></div>
</div>

---

## Norepinefrina

- **Dose mínima:** 0,01 mcg/kg/min
- **Dose máxima:** 3 mcg/kg/min
- **Concentrações:** 65 mcg/ml, 160 mcg/ml, 200 mcg/ml

<div class="form-group">
  <label for="taxaNorepinefrina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaNorepinefrina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('norepinefrina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoNorepinefrina"></div>
</div>

---

## Escetamina

- **Dose mínima:** mg/kg/h
- **Dose máxima:** mg/kg/h
- **Concentrações:** 1 mg/ml, 10 mg/ml

<div class="form-group">
  <label for="taxaEscetamina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaEscetamina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('escetamina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoEscetamina"></div>
</div>

---

## Propofol

- **Dose mínima:** 0,5 mg/kg/h
- **Dose máxima:** 5 mg/kg/h
- **Concentração:** 10 mg/ml

<div class="form-group">
  <label for="taxaPropofol">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaPropofol" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('propofol')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoPropofol"></div>
</div>

---

## Dobutamina

- **Dose mínima:** 0,05 mcg/kg/min
- **Dose máxima:** 20 mcg/kg/min
- **Concentrações:** 1000 mcg/ml, 4000 mcg/ml

<div class="form-group">
  <label for="taxaDobutamina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaDobutamina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('dobutamina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoDobutamina"></div>
</div>

---

## Dopamina

- **Dose mínima:** 1 mcg/kg/min
- **Dose máxima:** 20 mcg/kg/min
- **Concentração:** 1 mg/ml

<div class="form-group">
  <label for="taxaDopamina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaDopamina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('dopamina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoDopamina"></div>
</div>

---

## Dexmedetomidina

- **Dose mínima:** 0,2 mcg/kg/h
- **Dose máxima:** 0,7 mcg/kg/h
- **Concentração:** 4 mcg/ml

<div class="form-group">
  <label for="taxaDexmedetomidina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaDexmedetomidina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('dexmedetomidina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoDexmedetomidina"></div>
</div>

<script>
function calcularDosePorTaxa(medicamento) {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  if (!peso || peso <= 0) {
    alert('Por favor, insira o peso do paciente.');
    return;
  }
  let taxa = 0, dose = 0, resultado = '';
  switch(medicamento) {
    case 'midazolam':
      taxa = parseFloat(document.getElementById('taxaMidazolam').value);
      dose = taxa * 1; // 1 mg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mg/h (${(dose/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'fentanila':
      taxa = parseFloat(document.getElementById('taxaFentanila').value);
      dose = taxa * 10; // 10 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'norepinefrina':
      taxa = parseFloat(document.getElementById('taxaNorepinefrina').value);
      dose = taxa * 65; // 65 mcg/ml (ajuste conforme necessário)
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'escetamina':
      taxa = parseFloat(document.getElementById('taxaEscetamina').value);
      dose = taxa * 1; // 1 mg/ml (ajuste conforme necessário)
      resultado = `Dose administrada: ${dose.toFixed(2)} mg/h (${(dose/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'propofol':
      taxa = parseFloat(document.getElementById('taxaPropofol').value);
      dose = taxa * 10; // 10 mg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mg/h (${(dose/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'dobutamina':
      taxa = parseFloat(document.getElementById('taxaDobutamina').value);
      dose = taxa * 1000; // 1000 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'dopamina':
      taxa = parseFloat(document.getElementById('taxaDopamina').value);
      dose = taxa * 1000; // 1 mg/ml = 1000 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'dexmedetomidina':
      taxa = parseFloat(document.getElementById('taxaDexmedetomidina').value);
      dose = taxa * 4; // 4 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/peso).toFixed(3)} mcg/kg/h)`;
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