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
- **Concentrações:** 64 mcg/ml, 160 mcg/ml, 200 mcg/ml

<div class="form-group">
  <label for="taxaNorepinefrina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaNorepinefrina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('norepinefrina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoNorepinefrina"></div>
</div>

---

## Escetamina

- **Dose mínima:** 0,1 mg/kg/h
- **Dose máxima:** 0,5 mg/kg/h
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
    document.getElementById('resultado' + capitalize(medicamento)).innerHTML = '';
    return;
  }
  let taxa = 0, resultado = '';

  switch (medicamento) {
    case 'midazolam':
      taxa = parseFloat(document.getElementById('taxaMidazolam').value);
      if (!taxa || taxa <= 0) break;
      let dose1 = taxa * 1;
      let dose2 = taxa * 2;
      let dose3 = taxa * 3;
      resultado = `
        <strong>1 mg/ml:</strong> ${dose1.toFixed(2)} mg/h (${(dose1 / peso).toFixed(3)} mg/kg/h)<br>
        <strong>2 mg/ml:</strong> ${dose2.toFixed(2)} mg/h (${(dose2 / peso).toFixed(3)} mg/kg/h)<br>
        <strong>3 mg/ml:</strong> ${dose3.toFixed(2)} mg/h (${(dose3 / peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'fentanila':
      taxa = parseFloat(document.getElementById('taxaFentanila').value);
      if (!taxa || taxa <= 0) break;
      let doseF = taxa * 10;
      resultado = `
        <strong>10 mcg/ml:</strong> ${doseF.toFixed(2)} mcg/h (${(doseF / 60 / peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'norepinefrina':
      taxa = parseFloat(document.getElementById('taxaNorepinefrina').value);
      if (!taxa || taxa <= 0) break;
      let doseN1 = taxa * 64;
      let doseN2 = taxa * 160;
      let doseN3 = taxa * 200;
      resultado = `
        <strong>64 mcg/ml:</strong> ${doseN1.toFixed(2)} mcg/h (${(doseN1 / 60 / peso).toFixed(3)} mcg/kg/min)<br>
        <strong>160 mcg/ml:</strong> ${doseN2.toFixed(2)} mcg/h (${(doseN2 / 60 / peso).toFixed(3)} mcg/kg/min)<br>
        <strong>200 mcg/ml:</strong> ${doseN3.toFixed(2)} mcg/h (${(doseN3 / 60 / peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'escetamina':
      taxa = parseFloat(document.getElementById('taxaEscetamina').value);
      if (!taxa || taxa <= 0) break;
      let doseE1 = taxa * 1;
      let doseE2 = taxa * 10;
      resultado = `
        <strong>1 mg/ml:</strong> ${doseE1.toFixed(2)} mg/h (${(doseE1 / peso).toFixed(3)} mg/kg/h)<br>
        <strong>10 mg/ml:</strong> ${doseE2.toFixed(2)} mg/h (${(doseE2 / peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'propofol':
      taxa = parseFloat(document.getElementById('taxaPropofol').value);
      if (!taxa || taxa <= 0) break;
      let doseP = taxa * 10;
      resultado = `
        <strong>10 mg/ml:</strong> ${doseP.toFixed(2)} mg/h (${(doseP / peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'dobutamina':
      taxa = parseFloat(document.getElementById('taxaDobutamina').value);
      if (!taxa || taxa <= 0) break;
      let doseD1 = taxa * 1000;
      let doseD2 = taxa * 4000;
      resultado = `
        <strong>1000 mcg/ml:</strong> ${doseD1.toFixed(2)} mcg/h (${(doseD1 / 60 / peso).toFixed(3)} mcg/kg/min)<br>
        <strong>4000 mcg/ml:</strong> ${doseD2.toFixed(2)} mcg/h (${(doseD2 / 60 / peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dopamina':
      taxa = parseFloat(document.getElementById('taxaDopamina').value);
      if (!taxa || taxa <= 0) break;
      let doseDp = taxa * 1000;
      resultado = `
        <strong>1 mg/ml:</strong> ${doseDp.toFixed(2)} mcg/h (${(doseDp / 60 / peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dexmedetomidina':
      taxa = parseFloat(document.getElementById('taxaDexmedetomidina').value);
      if (!taxa || taxa <= 0) break;
      let doseDex = taxa * 4;
      resultado = `
        <strong>4 mcg/ml:</strong> ${doseDex.toFixed(2)} mcg/h (${(doseDex / peso).toFixed(3)} mcg/kg/h)
      `;
      break;
    default:
      resultado = 'Medicação não encontrada.';
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Adiciona listeners para calcular automaticamente ao digitar peso ou taxa
document.addEventListener('DOMContentLoaded', function () {
  const medicamentos = [
    'midazolam', 'fentanila', 'norepinefrina', 'escetamina',
    'propofol', 'dobutamina', 'dopamina', 'dexmedetomidina'
  ];
  // Peso
  const pesoInput = document.getElementById('pesoPaciente');
  if (pesoInput) {
    pesoInput.addEventListener('input', function () {
      medicamentos.forEach(med => calcularDosePorTaxa(med));
    });
  }
  // Taxas
  medicamentos.forEach(med => {
    const taxaInput = document.getElementById('taxa' + capitalize(med));
    if (taxaInput) {
      taxaInput.addEventListener('input', function () {
        calcularDosePorTaxa(med);
      });
    }
  });
});
</script>