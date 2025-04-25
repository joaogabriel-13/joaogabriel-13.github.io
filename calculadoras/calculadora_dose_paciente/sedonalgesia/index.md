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
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('midazolam')">Calcular Dose pela Taxa</button></td>
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
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('fentanila')">Calcular Dose pela Taxa</button></td>
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
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('escetamina')">Calcular Dose pela Taxa</button></td>
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
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('propofol')">Calcular Dose pela Taxa</button></td>
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
      <td data-label="Calcular" colspan="2"><button class="btn-calcular" onclick="calcularDosePorTaxa('dexmedetomidina')">Calcular Dose pela Taxa</button></td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Dose Calculada" colspan="2" class="resultado" id="resultadoDexmedetomidina" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

<script>
// Helper function to safely get element value or return NaN
function getNumericValue(id) {
  const element = document.getElementById(id);
  return element ? parseFloat(element.value) : NaN;
}

function calcularDosePorTaxa(medicamento) {
  const peso = getNumericValue('pesoPaciente');
  const taxaInputId = 'taxa' + capitalize(medicamento);
  const taxa = getNumericValue(taxaInputId);
  const resultadoElement = document.getElementById('resultado' + capitalize(medicamento));

  if (!resultadoElement) return; // Exit if result element doesn't exist

  // Clear previous result and check inputs
  resultadoElement.innerHTML = '';
  if (isNaN(peso) || peso <= 0) {
    resultadoElement.innerHTML = '<i>Por favor, insira um peso válido.</i>'; // Updated validation message
    return;
  }
   if (isNaN(taxa)) {
     // Don't display error if taxa is simply empty, just clear result
     // Set a message indicating taxa is needed
     resultadoElement.innerHTML = '<i>Insira a taxa de infusão.</i>';
     return;
   }
  if (taxa < 0) {
     resultadoElement.innerHTML = '<i>Taxa de infusão não pode ser negativa.</i>'; // Updated validation message
     return;
   }
   // No special message for taxa === 0, let the calculation proceed to show 0 dose.
   // if (taxa === 0) { ... }


   let resultadoHtml = '';
  let dosePorHora, dosePorPeso;

  switch (medicamento) {
    case 'midazolam':
      // Calculate for each concentration
      [1, 2, 3].forEach(c => {
        dosePorHora = taxa * c;
        dosePorPeso = dosePorHora / peso;
        resultadoHtml += `<strong>${c} mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)<br>`;
      });
      break;
    case 'fentanila':
      // Concentração fixa: 10 mcg/ml
      dosePorHora = taxa * 10; // mcg/h
      dosePorPeso = dosePorHora / (60 * peso); // mcg/kg/min
      resultadoHtml = `<strong>10 mcg/ml:</strong> ${dosePorHora.toFixed(2)} mcg/h (${dosePorPeso.toFixed(3)} mcg/kg/min)`;
      break;
    case 'escetamina':
       // Calculate for each concentration
      [1, 10].forEach(c => {
        dosePorHora = taxa * c;
        dosePorPeso = dosePorHora / peso;
        resultadoHtml += `<strong>${c} mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)<br>`;
      });
      break;
    case 'propofol':
      // Concentração fixa: 10 mg/ml
      dosePorHora = taxa * 10; // mg/h
      dosePorPeso = dosePorHora / peso; // mg/kg/h
      resultadoHtml = `<strong>10 mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)`;
      break;
    case 'dexmedetomidina':
      // Concentração fixa: 4 mcg/ml
      dosePorHora = taxa * 4; // mcg/h
      dosePorPeso = dosePorHora / peso; // mcg/kg/h
      resultadoHtml = `<strong>4 mcg/ml:</strong> ${dosePorHora.toFixed(2)} mcg/h (${dosePorPeso.toFixed(3)} mcg/kg/h)`;
      break;
    default:
      resultadoHtml = 'Medicamento desconhecido.';
  }
  resultadoElement.innerHTML = resultadoHtml;
}

// Removed calcularConcentracoes as logic is now inline

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', function () {
  const meds = ['midazolam', 'fentanila', 'escetamina', 'propofol', 'dexmedetomidina'];
  const pesoInput = document.getElementById('pesoPaciente');

  // Function to trigger calculation for all meds based on peso change
  function calcularTodasDoses() {
      meds.forEach(m => calcularDosePorTaxa(m));
  }

  if (pesoInput) {
      pesoInput.addEventListener('input', calcularTodasDoses);
  }

  // Add event listeners to each taxa input to recalculate its specific dose
  meds.forEach(m => {
    const taxaInput = document.getElementById('taxa' + capitalize(m));
    if (taxaInput) {
      taxaInput.addEventListener('input', () => calcularDosePorTaxa(m));
    }
    // Also trigger calculation on button click (though input event handles real-time)
    const button = taxaInput?.closest('tbody')?.querySelector('.btn-calcular');
     if (button) {
         // The onclick is already set in HTML, but ensure it calls the updated function
         // No need to add listener here if onclick attribute is present and correct
      }
   });

-   // Initial calculation run removed - calculation will trigger on input/change
-   // calcularTodasDoses(); 
 });
 </script>
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
