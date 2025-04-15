function calcularDosePorTaxa(medicamento) {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  if (!peso || peso <= 0) {
    alert('Por favor, insira o peso do paciente.');
    return;
  }
  let taxa = 0, resultado = '';

  switch(medicamento) {
    case 'midazolam':
      taxa = parseFloat(document.getElementById('taxaMidazolam').value);
      if (!taxa || taxa <= 0) break;
      // 1 mg/ml, 2 mg/ml, 3 mg/ml
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
      // 10 mcg/ml
      let doseF = taxa * 10;
      resultado = `
        <strong>10 mcg/ml:</strong> ${doseF.toFixed(2)} mcg/h (${(doseF/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'norepinefrina':
      taxa = parseFloat(document.getElementById('taxaNorepinefrina').value);
      if (!taxa || taxa <= 0) break;
      // 65, 160, 200 mcg/ml
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
      // 1 mg/ml, 10 mg/ml
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
      // 10 mg/ml
      let doseP = taxa * 10;
      resultado = `
        <strong>10 mg/ml:</strong> ${doseP.toFixed(2)} mg/h (${(doseP/peso).toFixed(3)} mg/kg/h)
      `;
      break;
    case 'dobutamina':
      taxa = parseFloat(document.getElementById('taxaDobutamina').value);
      if (!taxa || taxa <= 0) break;
      // 1000 mcg/ml, 4000 mcg/ml
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
      // 1 mg/ml = 1000 mcg/ml
      let doseDp = taxa * 1000;
      resultado = `
        <strong>1 mg/ml:</strong> ${doseDp.toFixed(2)} mcg/h (${(doseDp/60/peso).toFixed(3)} mcg/kg/min)
      `;
      break;
    case 'dexmedetomidina':
      taxa = parseFloat(document.getElementById('taxaDexmedetomidina').value);
      if (!taxa || taxa <= 0) break;
      // 4 mcg/ml
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