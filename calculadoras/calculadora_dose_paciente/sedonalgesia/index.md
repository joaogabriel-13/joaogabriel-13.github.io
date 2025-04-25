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

<script>
// Helper function
function getNumericValue(id) {
  const element = document.getElementById(id);
  return element ? parseFloat(element.value) : NaN;
}

// Função principal de cálculo
function calcularDosePorTaxa(medicamento) {
  console.log(`calcularDosePorTaxa triggered for ${medicamento}`); // Log
  const peso = getNumericValue('pesoPaciente');
  const taxaInputId = 'taxa' + capitalize(medicamento);
  const taxa = getNumericValue(taxaInputId);
  const resultadoElement = document.getElementById('resultado' + capitalize(medicamento));

  if (!resultadoElement) return;

  // Limpa resultado anterior se o peso ou taxa forem inválidos (exceto 0)
  if (isNaN(peso) || peso <= 0 || isNaN(taxa) || taxa < 0) {
      resultadoElement.innerHTML = ''; // Limpa se inválido
      return; // Sai se inválido
  }
  // Se for válido (incluindo taxa 0), continua e calcula (mostrando 0 se taxa for 0)
  resultadoElement.innerHTML = ''; // Garante que limpa antes de mostrar resultado novo

  let resultadoHtml = '';
  let dosePorHora, dosePorPeso;

  switch (medicamento) {
    case 'midazolam':
      [1, 2, 3].forEach(c => {
        dosePorHora = taxa * c;
        dosePorPeso = dosePorHora / peso;
        resultadoHtml += `<strong>${c} mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)<br>`;
      });
      break;
    case 'fentanila':
      dosePorHora = taxa * 10;
      dosePorPeso = dosePorHora / (60 * peso);
      resultadoHtml = `<strong>10 mcg/ml:</strong> ${dosePorHora.toFixed(2)} mcg/h (${dosePorPeso.toFixed(3)} mcg/kg/min)`;
      break;
    case 'escetamina':
      [1, 10].forEach(c => {
        dosePorHora = taxa * c;
        dosePorPeso = dosePorHora / peso;
        resultadoHtml += `<strong>${c} mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)<br>`;
      });
      break;
    case 'propofol':
      dosePorHora = taxa * 10;
      dosePorPeso = dosePorHora / peso;
      resultadoHtml = `<strong>10 mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)`;
      break;
    case 'dexmedetomidina':
      dosePorHora = taxa * 4;
      dosePorPeso = dosePorHora / peso;
      resultadoHtml = `<strong>4 mcg/ml:</strong> ${dosePorHora.toFixed(2)} mcg/h (${dosePorPeso.toFixed(3)} mcg/kg/h)`;
      break;
    default:
      resultadoHtml = 'Medicamento desconhecido.';
  }
  resultadoElement.innerHTML = resultadoHtml;
}

// Helper
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Código que PRECISA esperar o DOM carregar
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded for sedonalgesia');
  const meds = ['midazolam', 'fentanila', 'escetamina', 'propofol', 'dexmedetomidina'];
  const pesoInput = document.getElementById('pesoPaciente');

  // Função para recalcular tudo quando o peso muda
  function calcularTodasDoses() {
      // Itera sobre os medicamentos e recalcula a dose se a taxa já tiver um valor
      meds.forEach(m => {
          const taxaInputId = 'taxa' + capitalize(m);
          const taxaInput = document.getElementById(taxaInputId);
          // Só recalcula se já houver um valor na taxa para evitar limpar resultados desnecessariamente
          if (taxaInput && taxaInput.value !== '') {
              calcularDosePorTaxa(m);
          }
      });
  }

  // Adiciona listener para o input de peso
  if (pesoInput) {
      console.log('Adding listener for pesoPaciente');
      pesoInput.addEventListener('input', calcularTodasDoses);
  }

  // Adiciona listeners para os inputs de taxa E para os botões
  meds.forEach(m => {
    const taxaInput = document.getElementById('taxa' + capitalize(m));
    if (taxaInput) {
      console.log(`Adding listener for ${taxaInput.id}`);
      // Recalcula ao digitar a taxa
      taxaInput.addEventListener('input', () => calcularDosePorTaxa(m));
    }

    // Adiciona listeners para os BOTÕES
    const calcButton = document.querySelector(`.btn-calcular[data-medicamento="${m}"]`);
    if (calcButton) {
        console.log(`Adding click listener for button ${m}`);
        // Recalcula ao clicar no botão (útil se o usuário só preencher a taxa e clicar)
        calcButton.addEventListener('click', function() {
            calcularDosePorTaxa(m);
        });
    }
  });
});
</script>
