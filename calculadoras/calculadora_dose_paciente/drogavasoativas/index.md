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
function calcularDosePorTaxa(medicamento) {
  var taxa = parseFloat(document.getElementById('taxa' + capitalize(medicamento)).value);
  var resultadoElem = document.getElementById('resultado' + capitalize(medicamento));
  if (!taxa || taxa <= 0) {
    resultadoElem.innerText = 'Insira uma taxa válida';
    return;
  }
  if (medicamento === 'nitroglicerina') {
    var doseMcgMin = taxa * 200 / 60;
    resultadoElem.innerHTML = '<strong>200 mcg/ml:</strong> ' + taxa.toFixed(2) + ' ml/h = ' + doseMcgMin.toFixed(2) + ' mcg/min';
    return;
  }
  var peso = parseFloat(document.getElementById('pesoPaciente').value);
  if (!peso || peso <= 0) {
    resultadoElem.innerText = 'Insira o peso do paciente';
    return;
  }
  var concent = [];
  switch (medicamento) {
    case 'norepinefrina': concent = [64,160,200]; break;
    case 'dobutamina':    concent = [1000,4000];   break;
    case 'dopamina':      concent = [1000];        break;
    case 'nitroprusseto': concent = [200];         break;
  }
  resultadoElem.innerHTML = concent.map(function(c) {
    var doseH = taxa * c;
    var doseKgMin = doseH/60/peso;
    return '<strong>' + c + ' mcg/ml:</strong> ' + doseH.toFixed(2) + ' mcg/h (' + doseKgMin.toFixed(3) + ' mcg/kg/min)';
  }).join('<br>');
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

document.addEventListener('DOMContentLoaded', function() {
  ['norepinefrina','dobutamina','dopamina','nitroprusseto','nitroglicerina']
    .forEach(function(m) {
      var inp = document.getElementById('taxa' + capitalize(m));
      if (inp) inp.addEventListener('input', function() { calcularDosePorTaxa(m); });
    });
  var pesoInput = document.getElementById('pesoPaciente');
  if (pesoInput) pesoInput.addEventListener('input', function() {
    ['norepinefrina','dobutamina','dopamina','nitroprusseto']
      .forEach(function(m) {
        var inp = document.getElementById('taxa' + capitalize(m));
        if (inp && inp.value) calcularDosePorTaxa(m);
      });
  });
});
</script>
