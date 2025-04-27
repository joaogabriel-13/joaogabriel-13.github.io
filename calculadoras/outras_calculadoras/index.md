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

<table class="calculadora" aria-describedby="tbl-hiponatremia-desc">
  <caption id="tbl-hiponatremia-desc">Calculadora de Taxa de Infusão de Sódio na Hiponatremia</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="peso-sodio">Peso</label></th>
      <td data-label="Valor"><input type="number" id="peso-sodio" class="input-editavel" placeholder="Insira o peso" min="0" step="0.1" required></td>
      <td data-label="Unidade">kg</td>
    </tr>
    <tr>
      <th scope="row"><label for="sexo-idade-sodio">Categoria sexo/idade</label></th>
      <td data-label="Valor" colspan="2">
        <select id="sexo-idade-sodio" class="input-editavel" style="width: auto;">
          <option value="adulto_m">Homem adulto</option>
          <option value="adulto_f">Mulher adulta</option>
          <option value="idoso_m">Homem idoso</option>
          <option value="idoso_f">Mulher idosa</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row"><label for="delta-na">Δ[Na<sup>+</sup>] em 24 h</label></th>
      <td data-label="Valor"><input type="number" id="delta-na" class="input-editavel" placeholder="Insira o Δ[Na⁺]" min="0" step="0.1" required></td>
      <td data-label="Unidade">mEq/L</td>
    </tr>
    <tr>
      <th scope="row"><label for="solucao-sodio">Solução</label></th>
      <td data-label="Valor" colspan="2">
        <select id="solucao-sodio" class="input-editavel" style="width: auto;">
          <option value="3">NaCl 3 %</option>
          <option value="0.9">NaCl 0,9 %</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Cálculo" colspan="2" class="resultado" id="hipo-result" aria-live="polite"></td>
    </tr>
  </tbody>
</table>
<!-- Botão de cálculo removido pois o JS atualiza em tempo real -->

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

<table class="calculadora" aria-describedby="tbl-deficit-ferro-desc">
  <caption id="tbl-deficit-ferro-desc">Calculadora de Déficit de Ferro e Número de Ampolas</caption>
  <tbody>
    <tr>
      <th scope="row"><label for="peso-ferro">Peso</label></th>
      <td data-label="Valor"><input type="number" id="peso-ferro" class="input-editavel" placeholder="Insira o peso" min="0" step="0.1" required></td>
      <td data-label="Unidade">kg</td>
    </tr>
    <tr>
      <th scope="row"><label for="hb-atual">Hb atual</label></th>
      <td data-label="Valor"><input type="number" id="hb-atual" class="input-editavel" placeholder="Insira a Hb atual" min="0" step="0.1" required></td>
      <td data-label="Unidade">g/dL</td>
    </tr>
    <tr>
      <th scope="row"><label for="hb-alvo">Hb alvo</label></th>
      <td data-label="Valor"><input type="number" id="hb-alvo" class="input-editavel" placeholder="Insira a Hb alvo" min="0" step="0.1" value="15" required></td>
      <td data-label="Unidade">g/dL</td>
    </tr>
    <tr>
      <th scope="row">Resultado</th>
      <td data-label="Cálculo" colspan="2" class="resultado" id="iron-result" aria-live="polite"></td>
    </tr>
  </tbody>
</table>

<script src="{{ 'assets/js/calculadoras/outras_calculadoras.js' | relative_url }}" defer></script>

