function calcularDeficitFerro(peso, hbAlvo, hbAtual) {
    return peso * (hbAlvo - hbAtual) * 2.4 + 500;
}

function calcularNumeroAmpolas(deficitFerro, ferroPorAmpola = 100) {
    return Math.ceil(deficitFerro / ferroPorAmpola);
}

// Exemplo de uso:
const peso = 70; // kg
const hbAlvo = 14; // g/dL
const hbAtual = 10; // g/dL

const deficitFerro = calcularDeficitFerro(peso, hbAlvo, hbAtual);
const numeroAmpolas = calcularNumeroAmpolas(deficitFerro);

console.log(`Déficit Total de Ferro: ${deficitFerro.toFixed(2)} mg`);
console.log(`Número de Ampolas Necessárias: ${numeroAmpolas}`);