---
layout: default
title: Calculadora de Diluições
nav_order: 1
parent: Calculadoras
---

# Calculadora de Diluição de Solução

A fórmula **C1 × V1 = C2 × V2** relaciona concentração e volume antes e depois da diluição.  
Informe **três** valores para descobrir o quarto.

<table class="calculadora" aria-describedby="tbl-diluicao-desc">
  <caption id="tbl-diluicao-desc">Cálculo de diluição usando a relação C1 V1 = C2 V2.</caption>
  <thead>
    <tr>
      <th scope="col">Variável</th>
      <th scope="col">Valor</th>
      <th scope="col">Unidade</th>
      <th scope="col">Resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><label for="c1">Concentração inicial (C1)</label></th>
      <td data-label="Valor"><input type="number" id="c1" class="input-editavel" min="0" step="any" aria-describedby="unit-c1"></td>
      <td data-label="Unidade" id="unit-c1"><span>mg/mL</span></td>
      <td data-label="Resultado" rowspan="4" id="resultadoDiluição" class="resultado" aria-live="polite"></td>
    </tr>
    <tr>
      <th scope="row"><label for="v1">Volume inicial (V1)</label></th>
      <td data-label="Valor"><input type="number" id="v1" class="input-editavel" min="0" step="any" aria-describedby="unit-v1"></td>
      <td data-label="Unidade" id="unit-v1"><span>mL</span></td>
    </tr>
    <tr>
      <th scope="row"><label for="c2">Concentração final (C2)</label></th>
      <td data-label="Valor"><input type="number" id="c2" class="input-editavel" min="0" step="any" aria-describedby="unit-c2"></td>
      <td data-label="Unidade" id="unit-c2"><span>mg/mL</span></td>
    </tr>
    <tr>
      <th scope="row"><label for="v2">Volume final (V2)</label></th>
      <td data-label="Valor"><input type="number" id="v2" class="input-editavel" min="0" step="any" aria-describedby="unit-v2"></td>
      <td data-label="Unidade" id="unit-v2"><span>mL</span></td>
    </tr>
  </tbody>
</table>

<button id="btn-calcular-dil" class="btn-calcular" onclick="calcularDiluição()">Calcular</button>

---

## Calculadora de Diluição – Mistura de Duas Soluções

Determine os volumes que devem ser misturados de duas soluções distintas para obter a concentração final desejada.

<table class="calculadora" aria-describedby="tbl-diluicao-alt-desc">
  <caption id="tbl-diluicao-alt-desc">Mistura de 2 soluções para atingir concentração alvo.</caption>
  <thead>
    <tr>
      <th scope="col">Variável</th>
      <th scope="col">Valor</th>
      <th scope="col">Unidade</th>
      <th scope="col">Resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><label for="c1Alt">Concentração Solução 1 (C1)</label></th>
      <td data-label="Valor"><input type="number" id="c1Alt" class="input-editavel" min="0" step="any" aria-describedby="unit-c1Alt"></td>
      <td data-label="Unidade" id="unit-c1Alt"><span>mg/mL</span></td>
      <td data-label="Resultado" rowspan="4" id="resultadoDiluiçãoAlt" class="resultado" aria-live="polite"></td>
    </tr>
    <tr>
      <th scope="row"><label for="c2Alt">Concentração Solução 2 (C2)</label></th>
      <td data-label="Valor"><input type="number" id="c2Alt" class="input-editavel" min="0" step="any" aria-describedby="unit-c2Alt"></td>
      <td data-label="Unidade" id="unit-c2Alt"><span>mg/mL</span></td>
    </tr>
    <tr>
      <th scope="row"><label for="cfAlt">Concentração final desejada (Cf)</label></th>
      <td data-label="Valor"><input type="number" id="cfAlt" class="input-editavel" min="0" step="any" aria-describedby="unit-cfAlt"></td>
      <td data-label="Unidade" id="unit-cfAlt"><span>mg/mL</span></td>
    </tr>
    <tr>
      <th scope="row"><label for="vfAlt">Volume final desejado (Vf)</label></th>
      <td data-label="Valor"><input type="number" id="vfAlt" class="input-editavel" min="0" step="any" aria-describedby="unit-vfAlt"></td>
      <td data-label="Unidade" id="unit-vfAlt"><span>mL</span></td>
    </tr>
  </tbody>
</table>

<button id="btn-calcular-dil-alt" class="btn-calcular" onclick="calcularDiluiçãoAlternativa()">Calcular</button>

<script>
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
</script>
