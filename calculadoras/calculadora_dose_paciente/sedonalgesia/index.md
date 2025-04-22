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
  if (!peso || peso <= 0) { return; }
  let taxa = parseFloat(document.getElementById('taxa' + capitalize(medicamento)).value);
  if (!taxa || taxa <= 0) { return; }
  let resultado = '';
  switch (medicamento) {
    case 'midazolam':
      resultado += calcularConcentracoes([1,2,3], taxa, peso, 'mg', 'mg/kg/h');
      break;
    case 'fentanila':
      resultado = `<strong>10 mcg/ml:</strong> ${(taxa*10).toFixed(2)} mcg/h (${((taxa*10)/(60*peso)).toFixed(3)} mcg/kg/min)`;
      break;
    case 'escetamina':
      resultado += calcularConcentracoes([1,10], taxa, peso, 'mg', 'mg/kg/h');
      break;
    case 'propofol':
      resultado = `<strong>10 mg/ml:</strong> ${(taxa*10).toFixed(2)} mg/h (${((taxa*10)/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'dexmedetomidina':
      resultado = `<strong>4 mcg/ml:</strong> ${(taxa*4).toFixed(2)} mcg/h (${((taxa*4)/peso).toFixed(3)} mcg/kg/h)`;
      break;
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
}

function calcularConcentracoes(lista, taxa, peso, unidade1, unidade2) {
  return lista.map(c => {
    const dose = taxa * c;
    return `<strong>${c} ${unidade1}/ml:</strong> ${dose.toFixed(2)} ${unidade1}/h (${(dose/peso).toFixed(3)} ${unidade2})`;
  }).join('<br>');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', function () {
  const meds = ['midazolam','fentanila','escetamina','propofol','dexmedetomidina'];
  const pesoInput = document.getElementById('pesoPaciente');
  if (pesoInput) pesoInput.addEventListener('input', () => meds.forEach(m => calcularDosePorTaxa(m)));
  meds.forEach(m => {
    const inp = document.getElementById('taxa' + capitalize(m));
    if (inp) inp.addEventListener('input', () => calcularDosePorTaxa(m));
  });
});
</script>
