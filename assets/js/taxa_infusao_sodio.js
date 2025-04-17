function calcularACT(peso, sexo, idade) {
    if (sexo === "masculino") {
        return idade >= 60 ? peso * 0.5 : peso * 0.6;
    } else if (sexo === "feminino") {
        return idade >= 60 ? peso * 0.45 : peso * 0.5;
    }
    throw new Error("Sexo inválido. Use 'masculino' ou 'feminino'.");
}

function calcularSodioNecessario(deltaNa, act) {
    return deltaNa * act;
}

function calcularVolumeTotal(sodioNecessario, concentracaoNa) {
    return sodioNecessario / concentracaoNa;
}

function calcularTaxaInfusao(volumeTotal) {
    return (volumeTotal * 1000) / 24;
}

// Exemplo de uso:
const peso = 70; // kg
const sexo = "masculino";
const idade = 30; // anos
const deltaNa = 10; // mEq/L
const concentracaoNa = 513; // mEq/L (para NaCl 3%)

const act = calcularACT(peso, sexo, idade);
const sodioNecessario = calcularSodioNecessario(deltaNa, act);
const volumeTotal = calcularVolumeTotal(sodioNecessario, concentracaoNa);
const taxaInfusao = calcularTaxaInfusao(volumeTotal);

console.log(`Taxa de Infusão: ${taxaInfusao.toFixed(2)} mL/h`);