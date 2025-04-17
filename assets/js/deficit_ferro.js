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