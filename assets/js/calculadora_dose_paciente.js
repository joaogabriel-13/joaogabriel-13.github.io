function calcularDosePorTaxa(medicamento) {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  if (!peso || peso <= 0) {
    alert('Por favor, insira o peso do paciente.');
    return;
  }
  let taxa = 0, dose = 0, resultado = '';
  switch(medicamento) {
    case 'midazolam':
      taxa = parseFloat(document.getElementById('taxaMidazolam').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 1; // 1 mg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mg/h (${(dose/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'fentanila':
      taxa = parseFloat(document.getElementById('taxaFentanila').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 10; // 10 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'norepinefrina':
      taxa = parseFloat(document.getElementById('taxaNorepinefrina').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 65; // 65 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'escetamina':
      taxa = parseFloat(document.getElementById('taxaEscetamina').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 1; // 1 mg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mg/h (${(dose/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'propofol':
      taxa = parseFloat(document.getElementById('taxaPropofol').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 10; // 10 mg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mg/h (${(dose/peso).toFixed(3)} mg/kg/h)`;
      break;
    case 'dobutamina':
      taxa = parseFloat(document.getElementById('taxaDobutamina').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 1000; // 1000 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'dopamina':
      taxa = parseFloat(document.getElementById('taxaDopamina').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 1000; // 1 mg/ml = 1000 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/60/peso).toFixed(3)} mcg/kg/min)`;
      break;
    case 'dexmedetomidina':
      taxa = parseFloat(document.getElementById('taxaDexmedetomidina').value);
      if (!taxa || taxa <= 0) break;
      dose = taxa * 4; // 4 mcg/ml
      resultado = `Dose administrada: ${dose.toFixed(2)} mcg/h (${(dose/peso).toFixed(3)} mcg/kg/h)`;
      break;
    default:
      resultado = 'Medicação não encontrada.';
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}