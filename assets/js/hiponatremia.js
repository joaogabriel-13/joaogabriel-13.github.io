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
