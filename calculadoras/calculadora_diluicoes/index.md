---
layout: default
title: Calculadora de Diluições
nav_order: 1
parent: Calculadoras
---

# Calculadora de Diluição de Solução

Calcule a diluição de uma solução usando a fórmula **C1V1 = C2V2**.

<div class="calculadora">
  <div class="form-group">
    <label for="c1">Concentração Inicial (C1)</label>
    <input type="number" id="c1" placeholder="Insira C1">
  </div>
  <div class="form-group">
    <label for="v1">Volume Inicial (V1)</label>
    <input type="number" id="v1" placeholder="Insira V1">
  </div>
  <div class="form-group">
    <label for="c2">Concentração Final (C2)</label>
    <input type="number" id="c2" placeholder="Insira C2">
  </div>
  <div class="form-group">
    <label for="v2">Volume Final (V2)</label>
    <input type="number" id="v2" placeholder="Insira V2">
  </div>
  <button onclick="calcularDiluição()">Calcular</button>
  <div class="result" id="resultadoDiluição"></div>
</div>

---

## Calculadora de Diluição de Solução (Alternativa)

Calcule os volumes necessários de duas soluções para obter uma solução com a concentração final desejada.

<div class="calculadora">
  <div class="form-group">
    <label for="c1Alt">Concentração da Solução 1 (C1)</label>
    <input type="number" id="c1Alt" placeholder="Insira C1">
  </div>
  <div class="form-group">
    <label for="c2Alt">Concentração da Solução 2 (C2)</label>
    <input type="number" id="c2Alt" placeholder="Insira C2">
  </div>
  <div class="form-group">
    <label for="cfAlt">Concentração Final Desejada (Cf)</label>
    <input type="number" id="cfAlt" placeholder="Insira Cf">
  </div>
  <div class="form-group">
    <label for="vfAlt">Volume Final Desejado (Vf)</label>
    <input type="number" id="vfAlt" placeholder="Insira Vf">
  </div>
  <button onclick="calcularDiluiçãoAlternativa()">Calcular</button>
  <div class="result" id="resultadoDiluiçãoAlt"></div>
</div>

<script>
function calcularDiluição() {
    const c1 = parseFloat(document.getElementById('c1').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    if (c1 && v1 && c2) {
        const resultado = (c1 * v1) / c2;
        document.getElementById('resultadoDiluição').innerText = `O volume final (V2) é: ${resultado.toFixed(2)}`;
    } else if (c1 && c2 && v2) {
        const resultado = (c2 * v2) / c1;
        document.getElementById('resultadoDiluição').innerText = `O volume inicial (V1) é: ${resultado.toFixed(2)}`;
    } else {
        document.getElementById('resultadoDiluição').innerText = 'Por favor, preencha pelo menos 3 campos.';
    }
}

function calcularDiluiçãoAlternativa() {
    const c1 = parseFloat(document.getElementById('c1Alt').value);
    const c2 = parseFloat(document.getElementById('c2Alt').value);
    const cf = parseFloat(document.getElementById('cfAlt').value);
    const vf = parseFloat(document.getElementById('vfAlt').value);

    if (c1 && c2 && cf && vf) {
        const v1 = ((cf - c2) * vf) / (c1 - c2);
        const v2 = vf - v1;
        document.getElementById('resultadoDiluiçãoAlt').innerText = `V1: ${v1.toFixed(2)}, V2: ${v2.toFixed(2)}`;
    } else {
        document.getElementById('resultadoDiluiçãoAlt').innerText = 'Por favor, preencha todos os campos.';
    }
}
</script>