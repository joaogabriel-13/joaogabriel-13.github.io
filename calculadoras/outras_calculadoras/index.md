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
<!-- Botão de cálculo removido pois o JS atualiza em tempo real -->

<!-- Scripts usando filtro relative_url para funcionar em qualquer baseurl -->
<script>
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

// assets/js/hiponatremia.js  — versão isolada em IIFE
(() => {
    const DISTRIBUICAO_AGUA = {
        adulto_m: 0.6,
        adulto_f: 0.5,
        idoso_m: 0.5,
        idoso_f: 0.45,
    };

    function format(num, dec = 1) {
        return Number(num).toFixed(dec);
    }

    /**
     * Executa o cálculo quando os inputs mudam.
     */
    function calcularHiponatremia() {
        console.log('calcularHiponatremia triggered'); // Log function entry
        const peso = getNumericValue('peso-sodio');
        const categoria = getValue('sexo-idade-sodio');
        const deltaNa = getNumericValue('delta-na');
        const solucao = getValue('solucao-sodio'); // "3" ou "0.9"

        const outputEl = document.getElementById('hipo-result');
        if (!outputEl) return;

        // Validação básica
        if (isNaN(peso) || peso <= 0 || isNaN(deltaNa) || deltaNa <= 0) {
            // Reverted: Just return if inputs are invalid/empty
            // Keep existing result content if validation fails
            return;
        }
        // Clear previous result only AFTER validation passes
        outputEl.innerHTML = '';

        // Cálculos principais
        const act = peso * (DISTRIBUICAO_AGUA[categoria] || 0.5); // em litros
        const sodioNecessario = deltaNa * act;                       // mEq
        const concentracao = solucao === '3' ? 513 : 154;            // mEq/L

        const volumeMl = (sodioNecessario / concentracao) * 1000;  // mL em 24 h
        const taxaMlHora = volumeMl / 24;                            // mL/h

        // Saída formatada
        outputEl.innerHTML =
            `ACT: <strong>${format(act, 2)} L</strong><br>` +
            `Na⁺ necessário: <strong>${format(sodioNecessario, 1)} mEq</strong><br>` +
            `Volume da solução (24 h): <strong>${format(volumeMl, 0)} mL</strong><br>` +
            `Taxa de infusão: <strong>${format(taxaMlHora, 1)} mL/h</strong>`;
    }

    // Registra os listeners após o DOM estar pronto
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded for hiponatremia'); // Log DOM ready
        ['peso-sodio', 'sexo-idade-sodio', 'delta-na', 'solucao-sodio'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                console.log(`Adding listener for ${id}`); // Log listener attachment
                const eventType = (el.tagName === 'SELECT') ? 'change' : 'input';
                el.addEventListener(eventType, calcularHiponatremia);
            }
        });
        // Calculation triggers on input/change via listeners above
    });
})();

/* assets/js/deficit_ferro.js */
(() => {
    const FERRO_POR_AMPOLA = 100;   // constante interna

    /**
     * Executa o cálculo quando os inputs mudam.
     */
    function calcularDeficitFerro() {
        console.log('calcularDeficitFerro triggered'); // Log function entry
        const peso = getNumericValue('peso-ferro');
        const hbAtual = getNumericValue('hb-atual');
        const hbAlvo = getNumericValue('hb-alvo');

        const outputEl = document.getElementById('iron-result');
        if (!outputEl) return;

        if (isNaN(peso) || peso <= 0 || isNaN(hbAtual) || isNaN(hbAlvo) || hbAlvo <= hbAtual) {
             // Reverted: Just return if inputs are invalid/empty
             // Keep existing result content if validation fails
            return;
        }
        // Clear previous result only AFTER validation passes
        outputEl.innerHTML = '';

        const deficit = peso * (hbAlvo - hbAtual) * 2.4 + 500;
        const ampolas = Math.ceil(deficit / FERRO_POR_AMPOLA);

        outputEl.innerHTML =
            `Déficit total de ferro: <strong>${deficit.toFixed(0)} mg</strong><br>` +
            `Número de ampolas (100 mg): <strong>${ampolas}</strong>`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded for deficit_ferro'); // Log DOM ready
        ['peso-ferro', 'hb-atual', 'hb-alvo'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                console.log(`Adding listener for ${id}`); // Log listener attachment
                el.addEventListener('input', calcularDeficitFerro);
            }
        });
        // Calculation triggers on input/change via listeners above
    });
})();
</script>
