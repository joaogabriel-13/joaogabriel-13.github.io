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

<div class="form-group">
  <label for="taxaNorepinefrina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaNorepinefrina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('norepinefrina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoNorepinefrina"></div>
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

## Nitroprusseto

- **Dose mínima:** 0,5 mcg/kg/min  
- **Dose máxima:** 10 mcg/kg/min  
- **Concentração:** 200 mcg/ml  

<div class="form-group">
  <label for="taxaNitroprusseto">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaNitroprusseto" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('nitroprusseto')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoNitroprusseto"></div>
</div>

---

## Nitroglicerina

- **Dose mínima:** 5 mcg/min  
- **Dose máxima:** 200 mcg/min  
- **Concentração:** 200 mcg/ml  

<div class="form-group">
  <label for="taxaNitroglicerina">Taxa de infusão (ml/h):</label>
  <input type="number" id="taxaNitroglicerina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('nitroglicerina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoNitroglicerina"></div>
</div>

<script>
window.calcularDosePorTaxa = function(medicamento) {
  const taxaElem = document.getElementById('taxa' + capitalize(medicamento));
  const taxa = parseFloat(taxaElem && taxaElem.value);
  if (isNaN(taxa) || taxa <= 0) {
    document.getElementById('resultado' + capitalize(medicamento)).innerText = 'Insira uma taxa válida';
    return;
  }
  let peso;
  if (medicamento !== 'nitroglicerina') {
    const pesoElem = document.getElementById('pesoPaciente');
    peso = parseFloat(pesoElem && pesoElem.value);
    if (isNaN(peso) || peso <= 0) {
      ['norepinefrina','dobutamina','dopamina','nitroprusseto'].forEach(m => {
        document.getElementById('resultado' + capitalize(m)).innerText = 'Insira o peso do paciente';
      });
      return;
    }
  }
  let resultado = '';
  switch (medicamento) {
    case 'norepinefrina':
      [64, 160, 200].forEach(conc => {
        const dose = taxa * conc;
        resultado += `<strong>${conc} mcg/ml:</strong> ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)<br>`;
      });
      break;
    case 'dobutamina':
      [1000, 4000].forEach(conc => {
        const dose = taxa * conc;
        resultado += `<strong>${conc} mcg/ml:</strong> ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)<br>`;
      });
      break;
    case 'dopamina':
      const doseDp = taxa * 1000;
      resultado = `<strong>1 mg/ml:</strong> ${doseDp.toFixed(2)} mcg/h (${(doseDp/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'nitroprusseto':
      const doseNP = taxa * 200;
      resultado = `<strong>200 mcg/ml:</strong> ${doseNP.toFixed(2)} mcg/h (${(doseNP/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'nitroglicerina':
      // taxa is ml/h, concentration 200 mcg/ml => dose mcg/min = taxa * 200 / 60
      const doseMcgMin = taxa * 200 / 60;
      resultado = `<strong>200 mcg/ml:</strong> ${taxa.toFixed(2)} ml/h = ${doseMcgMin.toFixed(2)} mcg/min`;
      break;
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
};

window.capitalize = function(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

document.addEventListener('DOMContentLoaded', () => {
  ['norepinefrina','dobutamina','dopamina','nitroprusseto','nitroglicerina']
    .forEach(m => {
      const input = document.getElementById('taxa' + capitalize(m));
      input && input.addEventListener('input', () => calcularDosePorTaxa(m));
    });
  const pesoInput = document.getElementById('pesoPaciente');
  pesoInput && pesoInput.addEventListener('input', () => {
    ['norepinefrina','dobutamina','dopamina','nitroprusseto'].forEach(m => {
      const taxaElem = document.getElementById('taxa' + capitalize(m));
      if (taxaElem && taxaElem.value) {
        calcularDosePorTaxa(m);
      }
    });
  });
});
</script>
