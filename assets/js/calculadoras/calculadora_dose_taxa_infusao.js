// Helper function to safely get element value or return NaN
function getNumericValue(id) {
  const element = document.getElementById(id);
  if (!element) return NaN;
  const value = parseFloat(element.value);
  // Treat empty string as NaN, but allow 0
  return element.value === '' ? NaN : value;
}

// Helper function to safely get element value
function getValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : null;
}

// Helper function to set innerHTML safely
function setResult(id, htmlContent) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = htmlContent;
    }
}

// --- Calculadora de Taxa de Infusão (com peso) ---
function calcularTaxaInfusao() {
  console.log('calcularTaxaInfusao triggered'); // Log function entry
  const dose = getNumericValue('dosagem');
  const unidadeDose = getValue('unidadeDosagem');
  const peso = getNumericValue('pesoPaciente');
  const concentracao = getNumericValue('concentracao');
  const unidadeConc = getValue('unidadeConcentracao');

  let taxa = NaN;
  let resultado = '';

  if (isNaN(dose) || isNaN(peso) || isNaN(concentracao) || peso <= 0 || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoTaxaInfusao', '');
    // Ajuste de concentração para mcg/ml (base unit for calculation)
    let concEmMcgMl = (unidadeConc === 'mg/ml') ? concentracao * 1000 : concentracao;

    if (unidadeDose === 'mcg/kg/min') {
      // dose (mcg/kg/min) * peso (kg) * 60 (min/h) / conc (mcg/ml) = taxa (ml/h)
      taxa = (dose * peso * 60) / concEmMcgMl;
    } else if (unidadeDose === 'mg/kg/h') {
      // dose (mg/kg/h) * peso (kg) * 1000 (mcg/mg) / conc (mcg/ml) = taxa (ml/h)
      taxa = (dose * peso * 1000) / concEmMcgMl;
    }

    if (!isNaN(taxa)) {
        resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    } else {
        resultado = 'Erro no cálculo ou unidade inválida.';
    }
  }
  setResult('resultadoTaxaInfusao', resultado);
}

// --- Calculadora de Dosagem (com peso) ---
function calcularDosagem() {
  console.log('calcularDosagem triggered'); // Log function entry
  const taxa = getNumericValue('taxaDosagem');
  const peso = getNumericValue('pesoPacienteDosagem');
  const concentracao = getNumericValue('concentracaoDosagem');
  const unidadeConc = getValue('unidadeConcentracaoDosagem');
  const unidadeDesejada = getValue('unidadeDosagemDesejada');

  let dosagem = NaN;
  let resultado = '';

  if (isNaN(taxa) || isNaN(peso) || isNaN(concentracao) || peso <= 0 || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoDosagem', '');
    // Ajuste de concentração para mcg/ml
    let concEmMcgMl = (unidadeConc === 'mg/ml') ? concentracao * 1000 : concentracao;

    if (unidadeDesejada === 'mcg/kg/min') {
      // taxa (ml/h) * conc (mcg/ml) / peso (kg) / 60 (min/h) = dose (mcg/kg/min)
      dosagem = (taxa * concEmMcgMl) / (peso * 60);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mcg/kg/min</strong>`;
    } else if (unidadeDesejada === 'mg/kg/h') {
      // taxa (ml/h) * conc (mcg/ml) / peso (kg) / 1000 (mcg/mg) = dose (mg/kg/h)
      dosagem = (taxa * concEmMcgMl) / (peso * 1000);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mg/kg/h</strong>`;
    } else {
         resultado = 'Unidade de dose desejada inválida.';
    }
  }
  setResult('resultadoDosagem', resultado);
}

// --- Calculadora de Taxa de Infusão (Independente do Peso, U/min ou U/h) ---
function calcularTaxaInfusaoIndependente() {
  console.log('calcularTaxaInfusaoIndependente triggered'); // Log function entry
  const dose = getNumericValue('doseInfusao');
  const unidadeDose = getValue('unidadeDoseInfusao');
  const concentracao = getNumericValue('concentracaoInfusao'); // Assume U/mL

  let taxa = NaN;
  let resultado = '';

  if (isNaN(dose) || isNaN(concentracao) || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoTaxaInfusaoIndependente', '');
    if (unidadeDose === 'U/min') {
      // dose (U/min) * 60 (min/h) / conc (U/ml) = taxa (ml/h)
      taxa = (dose * 60) / concentracao;
    } else if (unidadeDose === 'U/h') {
      // dose (U/h) / conc (U/ml) = taxa (ml/h)
      taxa = dose / concentracao;
    }

     if (!isNaN(taxa)) {
        resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    } else {
        resultado = 'Erro no cálculo ou unidade inválida.';
    }
  }
  setResult('resultadoTaxaInfusaoIndependente', resultado);
}

// --- Calculadora de Dose (Independente do Peso, U/min ou U/h) ---
function calcularDoseIndependente() {
  console.log('calcularDoseIndependente triggered'); // Log function entry
  const taxa = getNumericValue('taxaDose');
  const concentracao = getNumericValue('concentracaoDose'); // Assume U/mL
  const unidadeDoseDesejada = getValue('unidadeDoseDesejada');

  let dose = NaN;
  let resultado = '';

  if (isNaN(taxa) || isNaN(concentracao) || concentracao <= 0) {
    // Reverted: Just return if inputs are invalid/empty
    // Keep existing result content if validation fails
    return;
  } else {
    // Clear result only AFTER validation passes
    setResult('resultadoDoseIndependente', '');
    if (unidadeDoseDesejada === 'U/min') {
      // taxa (ml/h) * conc (U/ml) / 60 (min/h) = dose (U/min)
      dose = (taxa * concentracao) / 60;
      resultado = `Dose: <strong>${dose.toFixed(2)} U/min</strong>`;
    } else if (unidadeDoseDesejada === 'U/h') {
      // taxa (ml/h) * conc (U/ml) = dose (U/h)
      dose = taxa * concentracao;
      resultado = `Dose: <strong>${dose.toFixed(2)} U/h</strong>`;
    } else {
        resultado = 'Unidade de dose desejada inválida.';
    }
  }
  setResult('resultadoDoseIndependente', resultado);
}

// --- Setup Event Listeners ---
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded for dose_taxa_infusao'); // Log DOM ready
  const calculators = [
    { func: calcularTaxaInfusao, ids: ['dosagem', 'unidadeDosagem', 'pesoPaciente', 'concentracao', 'unidadeConcentracao'] },
    { func: calcularDosagem, ids: ['taxaDosagem', 'pesoPacienteDosagem', 'concentracaoDosagem', 'unidadeConcentracaoDosagem', 'unidadeDosagemDesejada'] },
    { func: calcularTaxaInfusaoIndependente, ids: ['doseInfusao', 'unidadeDoseInfusao', 'concentracaoInfusao'] },
    { func: calcularDoseIndependente, ids: ['taxaDose', 'concentracaoDose', 'unidadeDoseDesejada'] }
  ];

  calculators.forEach(calc => {
    calc.ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        console.log(`Adding listener for ${id}`); // Log listener attachment
        const eventType = (el.tagName === 'SELECT') ? 'change' : 'input';
       el.addEventListener(eventType, calc.func);
       }
     });
     // Calculation triggers on input/change via listeners above
   });
 });
