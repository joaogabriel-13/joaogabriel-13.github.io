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
  <label for="taxaNitroglicerina">Taxa de infusão (mcg/min):</label>
  <input type="number" id="taxaNitroglicerina" placeholder="Insira a taxa" min="0" step="any">
  <button onclick="calcularDosePorTaxa('nitroglicerina')">Calcular Dose pela Taxa</button>
  <div class="result" id="resultadoNitroglicerina"></div>
</div>

<script>
function calcularDosePorTaxa(medicamento) {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  let taxa = parseFloat(document.getElementById('taxa' + capitalize(medicamento)).value);
  if ((!peso || peso <= 0) && medicamento !== 'nitroglicerina') return;
  if (!taxa || taxa <= 0) return;

  let resultado = '';
  switch (medicamento) {
    case 'norepinefrina':
      const doseN1 = taxa * 64;
      const doseN2 = taxa * 160;
      const doseN3 = taxa * 200;
      resultado = `
        <strong>64 mcg/ml:</strong> ${doseN1.toFixed(2)} mcg/h (${(doseN1/60/peso).toFixed(3)} mcg/kg/min)<br>
        <strong>160 mcg/ml:</strong> ${doseN2.toFixed(2)} mcg/h (${(doseN2/60/peso).toFixed(3)} mcg/kg/min)<br>
        <strong>200 mcg/ml:</strong> ${doseN3.toFixed(2)} mcg/h (${(doseN3/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dobutamina':
      const doseD1 = taxa * 1000;
      const doseD2 = taxa * 4000;
      resultado = `
        <strong>1000 mcg/ml:</strong> ${doseD1.toFixed(2)} mcg/h (${(doseD1/60/peso).toFixed(3)} mcg/kg/min)<br>
        <strong>4000 mcg/ml:</strong> ${doseD2.toFixed(2)} mcg/h (${(doseD2/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dopamina':
      const doseDp = taxa * 1000;
      resultado = `
        <strong>1 mg/ml:</strong> ${doseDp.toFixed(2)} mcg/h (${(doseDp/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'nitroprusseto':
      const doseNP = taxa * 200;
      resultado = `
        <strong>200 mcg/ml:</strong> ${doseNP.toFixed(2)} mcg/h (${(doseNP/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'nitroglicerina':
      // Dose fixa em mcg/min, não depende de peso
      // taxa = mcg/min, concentração = mcg/ml => ml/min = taxa/concentração, ml/h = ml/min * 60
      const mlPorMin = taxa / 200;
      const mlPorHora = mlPorMin * 60;
      resultado = `Taxa necessária: ${mlPorHora.toFixed(2)} ml/h para ${taxa} mcg/min`;
      break;
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', function() {
  const meds = ['norepinefrina','dobutamina','dopamina','nitroprusseto','nitroglicerina'];
  meds.forEach(m => {
    const input = document.getElementById('taxa' + capitalize(m));
    if (input) {
      input.addEventListener('input', () => calcularDosePorTaxa(m));
    }
  });
  const pesoInput = document.getElementById('pesoPaciente');
  if (pesoInput) {
    pesoInput.addEventListener('input', () => {
      ['norepinefrina','dobutamina','dopamina','nitroprusseto'].forEach(m => calcularDosePorTaxa(m));
    });
  }
});
</script>
