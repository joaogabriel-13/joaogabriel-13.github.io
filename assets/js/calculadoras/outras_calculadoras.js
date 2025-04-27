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