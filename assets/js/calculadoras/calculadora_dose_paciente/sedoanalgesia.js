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
document.addEventListener('DOMContentLoaded', () => {
  const pesoInput = document.getElementById('pesoPaciente');

  // Mapeamento dos medicamentos, suas concentrações e unidades de dose
  const medicamentos = {
    midazolam: { concentracoes: [1, 2, 3], unidadeDose: 'mg/kg/h', inputId: 'taxaMidazolam', resultadoId: 'resultadoMidazolam' }, // Exemplo, ajuste as concentrações se necessário
    fentanila: { concentracao: 10, unidadeDose: 'mcg/kg/min', inputId: 'taxaFentanila', resultadoId: 'resultadoFentanila' },
    escetamina: { concentracoes: [1, 10], unidadeDose: 'mg/kg/h', inputId: 'taxaEscetamina', resultadoId: 'resultadoEscetamina' }, // Exemplo, ajuste as concentrações
    propofol: { concentracao: 10, unidadeDose: 'mg/kg/h', inputId: 'taxaPropofol', resultadoId: 'resultadoPropofol' },
    dexmedetomidina: { concentracao: 4, unidadeDose: 'mcg/kg/h', inputId: 'taxaDexmedetomidina', resultadoId: 'resultadoDexmedetomidina' },
    morfina: { concentracao: 1, unidadeDose: 'mg/kg/h', inputId: 'taxaMorfina', resultadoId: 'resultadoMorfina' } // Adicione esta linha
  };

  // Função genérica para calcular a dose
  function calcularDose(taxaMlH, pesoKg, concentracao, unidadeDose) {
    if (!taxaMlH || !pesoKg || !concentracao || taxaMlH <= 0 || pesoKg <= 0) {
      return '---';
    }

    let dose = (taxaMlH * concentracao) / pesoKg;
    let unidadeFinal = unidadeDose;

    // Ajuste para Fentanila (mcg/kg/min)
    if (unidadeDose === 'mcg/kg/min') {
      dose = dose / 60; // Converte de mcg/kg/h para mcg/kg/min
      unidadeFinal = 'mcg/kg/min';
    } else {
      unidadeFinal = unidadeDose; // Mantém mg/kg/h ou mcg/kg/h
    }


    return `${dose.toFixed(2)} ${unidadeFinal}`;
  }

  // Função para atualizar um resultado específico
  function atualizarResultado(medicamentoInfo) {
    const taxaInput = document.getElementById(medicamentoInfo.inputId);
    const resultadoEl = document.getElementById(medicamentoInfo.resultadoId);
    const peso = parseFloat(pesoInput.value);
    const taxa = parseFloat(taxaInput.value);

    // Lógica para lidar com múltiplas ou única concentração
    let concentracao;
    if (medicamentoInfo.concentracoes && medicamentoInfo.concentracoes.length > 0) {
      // TODO: Implementar lógica para SELECIONAR a concentração desejada se houver múltiplas
      // Por enquanto, usa a primeira concentração como padrão
      concentracao = medicamentoInfo.concentracoes[0];
      console.warn(`Medicamento ${medicamentoInfo.inputId} tem múltiplas concentrações. Usando ${concentracao} como padrão. Implementar seleção.`);
      // Você precisará adicionar um <select> no HTML para o usuário escolher a concentração
      // e ler o valor selecionado aqui.
    } else {
      concentracao = medicamentoInfo.concentracao;
    }


    if (taxaInput && resultadoEl && pesoInput) {
      resultadoEl.textContent = calcularDose(taxa, peso, concentracao, medicamentoInfo.unidadeDose);
    }
  }

  // Adiciona listeners para todos os medicamentos e para o peso
  function setupListeners() {
    if (pesoInput) {
      pesoInput.addEventListener('input', () => {
        Object.values(medicamentos).forEach(atualizarResultado);
      });
    } else {
      console.error("Elemento 'pesoPaciente' não encontrado.");
      return;
    }


    Object.values(medicamentos).forEach(medInfo => {
      const inputEl = document.getElementById(medInfo.inputId);
      if (inputEl) {
        inputEl.addEventListener('input', () => atualizarResultado(medInfo));
      } else {
        console.error(`Elemento '${medInfo.inputId}' não encontrado para ${medInfo.inputId}.`);
      }
    });
  }

  setupListeners();

});