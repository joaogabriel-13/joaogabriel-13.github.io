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
  <div>
    <label>Peso (kg):
      <input type="number" id="peso-sodio" min="0" step="0.1" required />
    </label>
  </div>
  <div>
    <label>Categoria sexo/idade:
      <select id="sexo-idade-sodio">
        <option value="adulto_m">Homem adulto</option>
        <option value="adulto_f">Mulher adulta</option>
        <option value="idoso_m">Homem idoso</option>
        <option value="idoso_f">Mulher idosa</option>
      </select>
    </label>
  </div>
  <div>
    <label>Δ[Na<sup>+</sup>] em 24 h (mEq/L):
      <input type="number" id="delta-na" min="0" step="0.1" required />
    </label>
  </div>
  <div>
    <label>Solução:
      <select id="solucao-sodio">
        <option value="3">NaCl 3 %</option>
        <option value="0.9">NaCl 0,9 %</option>
      </select>
    </label>
  </div>
  <div>
    <button type="submit">Calcular</button>
  </div>
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
  <div>
    <label>Peso (kg):
      <input type="number" id="peso-ferro" min="0" step="0.1" required />
    </label>
  </div>
  <div>
    <label>Hb atual (g/dL):
      <input type="number" id="hb-atual" min="0" step="0.1" required />
    </label>
  </div>
  <div>
    <label>Hb alvo (g/dL):
      <input type="number" id="hb-alvo" min="0" step="0.1" value="15" required />
    </label>
  </div>
    <button type="submit">Calcular</button>
</form>

<pre id="iron-result"></pre>

<!-- Scripts usando filtro relative_url para funcionar em qualquer baseurl -->
<script>
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
     * Executa o cálculo quando o formulário é enviado.
     */
    function onSubmit(event) {
        event.preventDefault();

        const peso = parseFloat(document.getElementById('peso-sodio').value);
        const categoria = document.getElementById('sexo-idade-sodio').value;
        const deltaNa = parseFloat(document.getElementById('delta-na').value);
        const solucao = document.getElementById('solucao-sodio').value; // "3" ou "0.9"

        const outputEl = document.getElementById('hipo-result');

        // Validação básica
        if (!(peso > 0) || !(deltaNa > 0)) {
            outputEl.innerText = '⚠️ Insira valores válidos.';
            return;
        }

        // Cálculos principais
        const act = peso * (DISTRIBUICAO_AGUA[categoria] || 0.5); // em litros
        const sodioNecessario = deltaNa * act;                       // mEq
        const concentracao = solucao === '3' ? 513 : 154;            // mEq/L

        const volumeMl = (sodioNecessario / concentracao) * 1000;  // mL em 24 h
        const taxaMlHora = volumeMl / 24;                            // mL/h

        // Saída formatada
        outputEl.innerText =
            `ACT: ${format(act, 2)} L\n` +
            `Na⁺ necessário: ${format(sodioNecessario, 1)} mEq\n` +
            `Volume da solução (24 h): ${format(volumeMl, 0)} mL\n` +
            `Taxa de infusão: ${format(taxaMlHora, 1)} mL/h`;
    }

    // Registra o listener após o DOM estar pronto
    document.getElementById('hipo-form')?.addEventListener('submit', onSubmit);
})();

/* assets/js/deficit_ferro.js */
(() => {
    const FERRO_POR_AMPOLA = 100;   // constante interna

    document
        .getElementById('iron-form')
        .addEventListener('submit', event => {
            event.preventDefault();

            const peso = parseFloat(document.getElementById('peso-ferro').value);
            const hbAtual = parseFloat(document.getElementById('hb-atual').value);
            const hbAlvo = parseFloat(document.getElementById('hb-alvo').value);

            if (!(peso > 0) || hbAlvo <= hbAtual) {
                document.getElementById('iron-result').innerText =
                    '⚠️ Verifique os valores inseridos.';
                return;
            }

            const deficit = peso * (hbAlvo - hbAtual) * 2.4 + 500;
            const ampolas = Math.ceil(deficit / FERRO_POR_AMPOLA);

            document.getElementById('iron-result').innerText =
                `Déficit total de ferro: ${deficit.toFixed(0)} mg\n` +
                `Número de ampolas (100 mg): ${ampolas}`;
        });
})();
</script>