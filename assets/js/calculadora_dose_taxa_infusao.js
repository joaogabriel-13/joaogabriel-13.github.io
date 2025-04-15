// Calculadora de Taxa de Infusão (com peso)
function calcularTaxaInfusao() {
  const dosagem = parseFloat(document.getElementById('dosagem').value);
  const unidade = document.getElementById('unidadeDosagem').value;
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  const concentracao = parseFloat(document.getElementById('concentracao').value);

  let taxa = 0;
  let resultado = '';

  if (!dosagem || !peso || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    if (unidade === 'mcg/kg/min') {
      taxa = (dosagem * peso * 60) / concentracao;
    } else if (unidade === 'mg/kg/h') {
      taxa = (dosagem * peso * 1000) / concentracao;
    }
    resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
  }
  document.getElementById('resultadoTaxaInfusao').innerHTML = resultado;
}

// Calculadora de Dosagem (com peso)
function calcularDosagem() {
  const taxa = parseFloat(document.getElementById('taxaDosagem').value);
  const peso = parseFloat(document.getElementById('pesoPacienteDosagem').value);
  const concentracao = parseFloat(document.getElementById('concentracaoDosagem').value);
  const unidade = document.getElementById('unidadeDosagemDesejada').value;

  let dosagem = 0;
  let resultado = '';

  if (!taxa || !peso || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    if (unidade === 'mcg/kg/min') {
      dosagem = (taxa * concentracao) / (peso * 60);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mcg/kg/min</strong>`;
    } else if (unidade === 'mg/kg/h') {
      dosagem = (taxa * concentracao) / (peso * 1000);
      resultado = `Dosagem: <strong>${dosagem.toFixed(3)} mg/kg/h</strong>`;
    }
  }
  document.getElementById('resultadoDosagem').innerHTML = resultado;
}

// Calculadora de Taxa de Infusão (Independente do Peso)
function calcularTaxaInfusaoIndependente() {
  const dose = parseFloat(document.getElementById('doseInfusao').value);
  const unidade = document.getElementById('unidadeDoseInfusao').value;
  const concentracao = parseFloat(document.getElementById('concentracaoInfusao').value);

  let taxa = 0;
  let resultado = '';

  if (!dose || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    if (unidade === 'mcg/min') {
      taxa = (dose * 60) / concentracao;
      resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    } else if (unidade === 'mg/h') {
      taxa = (dose * 1000) / concentracao;
      resultado = `Taxa de infusão: <strong>${taxa.toFixed(2)} mL/h</strong>`;
    }
  }
  document.getElementById('resultadoTaxaInfusaoIndependente').innerHTML = resultado;
}

// Calculadora de Dose (Independente do Peso)
function calcularDoseIndependente() {
  const taxa = parseFloat(document.getElementById('taxaDose').value);
  const concentracao = parseFloat(document.getElementById('concentracaoDose').value);

  let dose = 0;
  let resultado = '';

  if (!taxa || !concentracao) {
    resultado = 'Preencha todos os campos.';
  } else {
    dose = (taxa * concentracao) / 60;
    resultado = `Dose: <strong>${dose.toFixed(2)} mcg/min</strong>`;
  }
  document.getElementById('resultadoDoseIndependente').innerHTML = resultado;
}

// Tornar os cálculos automáticos ao digitar ou alterar campos
document.addEventListener('DOMContentLoaded', function() {
  // Taxa de Infusão (com peso)
  ['dosagem', 'unidadeDosagem', 'pesoPaciente', 'concentracao'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularTaxaInfusao);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularTaxaInfusao);
  });

  // Dosagem (com peso)
  ['taxaDosagem', 'pesoPacienteDosagem', 'concentracaoDosagem', 'unidadeDosagemDesejada'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularDosagem);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularDosagem);
  });

  // Taxa de Infusão (independente do peso)
  ['doseInfusao', 'unidadeDoseInfusao', 'concentracaoInfusao'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularTaxaInfusaoIndependente);
    if (el && el.tagName === 'SELECT') el.addEventListener('change', calcularTaxaInfusaoIndependente);
  });

  // Dose (independente do peso)
  ['taxaDose', 'concentracaoDose'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcularDoseIndependente);
  });
});