---
layout: default
title: Outras calculadoras
nav_order: 4
parent: Calculadoras
---

# Outras Calculadoras

## Taxa de Infusão de Sódio na Hiponatremia

<details>
  <summary><strong>Instruções de uso</strong></summary>
  <ol>
    <li>Informe o <strong>peso</strong> do paciente.</li>
    <li>Selecione a <strong>categoria sexo/idade</strong>.</li>
    <li>Defina o <strong>Δ[Na<sup>+</sup>]</strong> desejado em 24 h (mEq/L) dentro de limites seguros.</li>
    <li>Escolha a <strong>solução de infusão</strong>.</li>
    <li>Clique em <em>Calcular</em> para obter ACT, Na⁺ necessário, volume da solução e taxa de infusão.</li>
  </ol>
</details>

<form id="hipo-form" class="calc-box">
  <label>Peso (kg):
    <input type="number" id="peso-sodio" min="0" step="0.1" required />
  </label>
  <label>Categoria sexo/idade:
    <select id="sexo-idade-sodio">
      <option value="adulto_m">Homem adulto</option>
      <option value="adulto_f">Mulher adulta</option>
      <option value="idoso_m">Homem idoso</option>
      <option value="idoso_f">Mulher idosa</option>
    </select>
  </label>
  <label>Δ[Na<sup>+</sup>] em 24 h (mEq/L):
    <input type="number" id="delta-na" min="0" step="0.1" required />
  </label>
  <label>Solução:
    <select id="solucao-sodio">
      <option value="3">NaCl 3 %</option>
      <option value="0.9">NaCl 0,9 %</option>
    </select>
  </label>
  <button type="submit">Calcular</button>
</form>

<pre id="hipo-result"></pre>

---

## Déficit de Ferro e Número de Ampolas

<details>
  <summary><strong>Instruções de uso</strong></summary>
  <ol>
    <li>Informe o <strong>peso</strong> (kg).</li>
    <li>Digite a <strong>Hb atual</strong> e a <strong>Hb alvo</strong>.</li>
    <li>Clique em <em>Calcular</em> para ver o déficit total de ferro e o número de ampolas (100 mg cada).</li>
  </ol>
</details>

<form id="iron-form" class="calc-box">
  <label>Peso (kg):
    <input type="number" id="peso-ferro" min="0" step="0.1" required />
  </label>
  <label>Hb atual (g/dL):
    <input type="number" id="hb-atual" min="0" step="0.1" required />
  </label>
  <label>Hb alvo (g/dL):
    <input type="number" id="hb-alvo" min="0" step="0.1" value="15" required />
  </label>
  <button type="submit">Calcular</button>
</form>

<pre id="iron-result"></pre>

<!-- Scripts usando filtro relative_url para funcionar em qualquer baseurl -->
<script src="{{ '/assets/js/hiponatremia.js' | relative_url }}"></script>
<script src="{{ '/assets/js/deficit_ferro.js' | relative_url }}"></script>