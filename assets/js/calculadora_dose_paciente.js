function calcularDosePorTaxa(medicamento) {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  if (!peso || peso <= 0) {
    document.getElementById('resultado' + capitalize(medicamento)).innerHTML = '';
    return;
  }
  let taxa = 0, resultado = '';

  switch(medicamento) {
    case 'midazolam':
      taxa = parseFloat(document.getElementById('taxaMidazolam').value);
      if (!taxa || taxa <= 0) break;
      let dose1 = taxa * 1;
      let dose2 = taxa * 2;
      let dose3 = taxa * 3;
      resultado = `
        <strong>1 mg/ml:</strong> ${dose1.toFixed(2)} mg/h (${(dose1/peso).toFixed(3)} mg/kg/h)<br>
        <strong>2 mg/ml:</strong> ${dose2.toFixed(2)} mg/h (${(dose2/peso).toFixed(3)} mg/kg/h)<br>
        <strong>3 mg/ml:</strong> ${dose3.toFixed(2)} mg/h (${(dose3/peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'fentanila':
      taxa = parseFloat(document.getElementById('taxaFentanila').value);
      if (!taxa || taxa <= 0) break;
      let doseF = taxa * 10;
      resultado = `
        <strong>10 mcg/ml:</strong> ${doseF.toFixed(2)} mcg/h (${(doseF/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'norepinefrina':
      taxa = parseFloat(document.getElementById('taxaNorepinefrina').value);
      if (!taxa || taxa <= 0) break;
      let doseN1 = taxa * 65;
      let doseN2 = taxa * 160;
      let doseN3 = taxa * 200;
      resultado = `
        <strong>65 mcg/ml:</strong> ${doseN1.toFixed(2)} mcg/h (${(doseN1/60/peso).toFixed(3)} mcg/kg/min)<br>
        <strong>160 mcg/ml:</strong> ${doseN2.toFixed(2)} mcg/h (${(doseN2/60/peso).toFixed(3)} mcg/kg/min)<br>
        <strong>200 mcg/ml:</strong> ${doseN3.toFixed(2)} mcg/h (${(doseN3/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'escetamina':
      taxa = parseFloat(document.getElementById('taxaEscetamina').value);
      if (!taxa || taxa <= 0) break;
      let doseE1 = taxa * 1;
      let doseE2 = taxa * 10;
      resultado = `
        <strong>1 mg/ml:</strong> ${doseE1.toFixed(2)} mg/h (${(doseE1/peso).toFixed(3)} mg/kg/h)<br>
        <strong>10 mg/ml:</strong> ${doseE2.toFixed(2)} mg/h (${(doseE2/peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'propofol':
      taxa = parseFloat(document.getElementById('taxaPropofol').value);
      if (!taxa || taxa <= 0) break;
      let doseP = taxa * 10;
      resultado = `
        <strong>10 mg/ml:</strong> ${doseP.toFixed(2)} mg/h (${(doseP/peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'dobutamina':
      taxa = parseFloat(document.getElementById('taxaDobutamina').value);
      if (!taxa || taxa <= 0) break;
      let doseD1 = taxa * 1000;
      let doseD2 = taxa * 4000;
      resultado = `
        <strong>1000 mcg/ml:</strong> ${doseD1.toFixed(2)} mcg/h (${(doseD1/60/peso).toFixed(3)} mcg/kg/min)<br>
        <strong>4000 mcg/ml:</strong> ${doseD2.toFixed(2)} mcg/h (${(doseD2/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dopamina':
      taxa = parseFloat(document.getElementById('taxaDopamina').value);
      if (!taxa || taxa <= 0) break;
      let doseDp = taxa * 1000;
      resultado = `
        <strong>1 mg/ml:</strong> ${doseDp.toFixed(2)} mcg/h (${(doseDp/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dexmedetomidina':
      taxa = parseFloat(document.getElementById('taxaDexmedetomidina').value);
      if (!taxa || taxa <= 0) break;
      let doseDex = taxa * 4;
      resultado = `
        <strong>4 mcg/ml:</strong> ${doseDex.toFixed(2)} mcg/h (${(doseDex/peso).toFixed(3)} mcg/kg/h)
      `;
      break;
    default:
      resultado = 'Medicação não encontrada.';
  }
  document.getElementById('resultado' + capitalize(medicamento)).innerHTML = resultado;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Adiciona listeners para calcular automaticamente ao digitar peso ou taxa
document.addEventListener('DOMContentLoaded', function() {
  const medicamentos = [
    'midazolam', 'fentanila', 'norepinefrina', 'escetamina',
    'propofol', 'dobutamina', 'dopamina', 'dexmedetomidina'
  ];
  // Peso
  const pesoInput = document.getElementById('pesoPaciente');
  if (pesoInput) {
    pesoInput.addEventListener('input', function() {
      medicamentos.forEach(med => calcularDosePorTaxa(med));
    });
  }
  // Taxas
  medicamentos.forEach(med => {
    const taxaInput = document.getElementById('taxa' + capitalize(med));
    if (taxaInput) {
      taxaInput.addEventListener('input', function() {
        calcularDosePorTaxa(med);
      });
    }
  });
});