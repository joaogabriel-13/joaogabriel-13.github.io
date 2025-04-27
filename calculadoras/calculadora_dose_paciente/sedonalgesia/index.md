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
  // Retorna NaN se o elemento não existir ou o valor não for um número válido
  // Trata string vazia como NaN, mas permite 0.
  if (!element) return NaN;
  const value = parseFloat(element.value);
  return element.value === '' ? NaN : value;
}

// Função principal de cálculo
function calcularDosePorTaxa(medicamento) {
  // Adiciona log para início da execução da função
  console.log(`DEBUG: Executando calcularDosePorTaxa para ${medicamento}`);

  const peso = getNumericValue('pesoPaciente');
  const taxaInputId = 'taxa' + capitalize(medicamento);
  const taxa = getNumericValue(taxaInputId);
  const resultadoElement = document.getElementById('resultado' + capitalize(medicamento));

  // Verifica se o elemento de resultado existe
  if (!resultadoElement) {
    console.error(`DEBUG: Elemento de resultado 'resultado${capitalize(medicamento)}' não encontrado.`);
    return;
  }

  // Validação de entradas: Verifica se peso e taxa são números válidos e não negativos/zero (exceto taxa 0)
  if (isNaN(peso) || peso <= 0) {
    console.log(`DEBUG: Peso inválido (${peso}), limpando resultado para ${medicamento}.`);
    resultadoElement.innerHTML = ''; // Limpa se peso inválido
    return;
  }
   if (isNaN(taxa) || taxa < 0) {
    console.log(`DEBUG: Taxa inválida (${taxa}), limpando resultado para ${medicamento}.`);
    resultadoElement.innerHTML = ''; // Limpa se taxa inválida
    return;
   }

  // Se entradas válidas (incluindo taxa === 0), calcula e mostra
  console.log(`DEBUG: Calculando dose para ${medicamento} com peso ${peso} e taxa ${taxa}`);
  resultadoElement.innerHTML = ''; // Limpa antes de mostrar novo resultado

  let resultadoHtml = '';
  let dosePorHora, dosePorPeso;

  // Realiza o cálculo baseado no medicamento
  switch (medicamento) {
    case 'midazolam':
      [1, 2, 3].forEach(c => {
        dosePorHora = taxa * c;
        dosePorPeso = dosePorHora / peso;
        resultadoHtml += `<strong>${c} mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)<br>`;
      });
      break;
    case 'fentanila':
      dosePorHora = taxa * 10; // Concentração: 10 mcg/ml
      dosePorPeso = dosePorHora / (60 * peso); // Conversão para mcg/kg/min
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
      dosePorHora = taxa * 10; // Concentração: 10 mg/ml
      dosePorPeso = dosePorHora / peso;
      resultadoHtml = `<strong>10 mg/ml:</strong> ${dosePorHora.toFixed(2)} mg/h (${dosePorPeso.toFixed(3)} mg/kg/h)`;
      break;
    case 'dexmedetomidina':
      dosePorHora = taxa * 4; // Concentração: 4 mcg/ml
      dosePorPeso = dosePorHora / peso;
      resultadoHtml = `<strong>4 mcg/ml:</strong> ${dosePorHora.toFixed(2)} mcg/h (${dosePorPeso.toFixed(3)} mcg/kg/h)`;
      break;
    default:
      console.error(`DEBUG: Medicamento desconhecido: ${medicamento}`);
      resultadoHtml = 'Medicamento desconhecido.';
  }
  // Define o HTML do resultado
  resultadoElement.innerHTML = resultadoHtml;
  console.log(`DEBUG: Resultado para ${medicamento} definido.`);
}

// Helper para capitalizar a primeira letra
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Código que executa após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
  // Log para confirmar que o listener DOMContentLoaded foi adicionado e executado
  console.log('DEBUG: DOMContentLoaded acionado para sedonalgesia.');

  const meds = ['midazolam', 'fentanila', 'escetamina', 'propofol', 'dexmedetomidina'];
  const pesoInput = document.getElementById('pesoPaciente');

  // Função para recalcular todas as doses quando o peso muda
  function calcularTodasDosesPeso() {
    console.log('DEBUG: Peso alterado, recalculando doses...');
    meds.forEach(m => {
      const taxaInputId = 'taxa' + capitalize(m);
      const taxaInput = document.getElementById(taxaInputId);
      // Recalcula apenas se a taxa já tiver um valor preenchido
      if (taxaInput && taxaInput.value !== '') {
          calcularDosePorTaxa(m);
      } else {
          // Opcional: Limpar resultado se a taxa estiver vazia quando o peso muda
          const resultadoElement = document.getElementById('resultado' + capitalize(m));
          if(resultadoElement) resultadoElement.innerHTML = '';
      }
    });
  }

  // Adiciona listener para o input de peso
  if (pesoInput) {
    console.log('DEBUG: Adicionando listener para pesoPaciente.');
    pesoInput.addEventListener('input', calcularTodasDosesPeso);
  } else {
    console.error('DEBUG: Elemento pesoPaciente não encontrado.');
  }

  // Adiciona listeners para os inputs de taxa e botões
  meds.forEach(m => {
    const taxaInputId = 'taxa' + capitalize(m);
    const taxaInput = document.getElementById(taxaInputId);
    const buttonSelector = `.btn-calcular[data-medicamento="${m}"]`;
    const calcButton = document.querySelector(buttonSelector);

    // Listener para input de taxa
    if (taxaInput) {
      console.log(`DEBUG: Adicionando listener 'input' para ${taxaInputId}`);
      taxaInput.addEventListener('input', () => calcularDosePorTaxa(m));
    } else {
      console.warn(`DEBUG: Elemento ${taxaInputId} não encontrado.`);
    }

    // Listener para botão de cálculo
    if (calcButton) {
      console.log(`DEBUG: Adicionando listener 'click' para botão ${m}`);
      calcButton.addEventListener('click', function() {
          // Chama a função de cálculo diretamente ao clicar no botão
          calcularDosePorTaxa(m);
      });
    } else {
       console.warn(`DEBUG: Botão com seletor '${buttonSelector}' não encontrado.`);
    }
  });

  console.log('DEBUG: Setup de listeners concluído.');
});
</script>
