function calcularDiluição() {
    const c1 = parseFloat(document.getElementById('c1').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    const resultado = document.getElementById('resultadoDiluição');
    resultado.textContent = 'Calculando…';

    if ((c1 || c1 === 0) && (v1 || v1 === 0) && (c2 || c2 === 0) && !isNaN(v1)) {
        const vFinal = (c1 * v1) / c2;
        resultado.textContent = `Volume final (V2): ${vFinal.toFixed(2)} mL`;
    } else if ((c1 || c1 === 0) && (c2 || c2 === 0) && (v2 || v2 === 0)) {
        const vInicial = (c2 * v2) / c1;
        resultado.textContent = `Volume inicial (V1): ${vInicial.toFixed(2)} mL`;
    } else {
        resultado.textContent = 'Preencha três campos para calcular o quarto.';
    }
}

function calcularDiluiçãoAlternativa() {
    const c1 = parseFloat(document.getElementById('c1Alt').value);
    const c2 = parseFloat(document.getElementById('c2Alt').value);
    const cf = parseFloat(document.getElementById('cfAlt').value);
    const vf = parseFloat(document.getElementById('vfAlt').value);
    const resultadoAlt = document.getElementById('resultadoDiluiçãoAlt');
    resultadoAlt.textContent = 'Calculando…';

    if ([c1, c2, cf, vf].every(v => !isNaN(v))) {
        const v1 = ((cf - c2) * vf) / (c1 - c2);
        const v2 = vf - v1;
        resultadoAlt.textContent = `V1: ${v1.toFixed(2)} mL, V2: ${v2.toFixed(2)} mL`;
    } else {
        resultadoAlt.textContent = 'Preencha todos os campos com números válidos.';
    }
}

