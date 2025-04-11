---
layout: default
title: Calculadora de Dose e Taxa de Infusão
---

# Calculadora de Dose e Taxa de Infusão

## Calculadora de Taxa de Infusão (mcg/kg/min para mL/h)

<div class="calculator">
  <label for="calc1-peso">Peso do Paciente (kg):</label>
  <input type="number" id="calc1-peso" placeholder="Insira o peso em kg">

  <label for="calc1-dosagem">Dosagem (mcg/kg/min):</label>
  <input type="number" id="calc1-dosagem" placeholder="Insira a dosagem">

  <label for="calc1-concentracao">Concentração (mg/mL):</label>
  <input type="number" id="calc1-concentracao" placeholder="Insira a concentração">

  <button id="calc1-button">Calcular Taxa de Infusão (mL/h)</button>

  <p><strong>Resultado:</strong> <span id="calc1-resultado">--</span> mL/h</p>
</div>

<hr> <script>
  // Garante que o script rode depois que a página carregar
  document.addEventListener('DOMContentLoaded', function() {

    // Referências aos elementos HTML da Calculadora 1
    const pesoInput = document.getElementById('calc1-peso');
    const dosagemInput = document.getElementById('calc1-dosagem');
    const concentracaoInput = document.getElementById('calc1-concentracao');
    const calcularButton = document.getElementById('calc1-button');
    const resultadoSpan = document.getElementById('calc1-resultado');

    // Adiciona o 'ouvinte' de evento ao botão "Calcular"
    calcularButton.addEventListener('click', function() {
      // Pega os valores dos inputs e converte para números de ponto flutuante
      const peso = parseFloat(pesoInput.value);
      const dosagem = parseFloat(dosagemInput.value);
      const concentracao = parseFloat(concentracaoInput.value);

      // Validação simples: verifica se são números válidos e positivos (ou zero para dosagem)
      // Concentração e peso não podem ser zero ou negativos.
      if (isNaN(peso) || isNaN(dosagem) || isNaN(concentracao) || peso <= 0 || dosagem < 0 || concentracao <= 0) {
        resultadoSpan.textContent = 'Erro: Verifique os valores inseridos (devem ser números; peso e concentração > 0).';
        resultadoSpan.style.color = 'red'; // Adiciona cor ao erro
        return; // Para a execução se houver erro
      }

      // Cálculo baseado na fórmula (verificando unidades):
      // Taxa (mL/h) = [Dosagem (mcg/kg/min) * Peso (kg) * 60 (min/h)] / [Concentração (mg/mL) * 1000 (mcg/mg)]
      const taxaInfusao = (dosagem * peso * 60) / (concentracao * 1000);

      // Exibe o resultado formatado com 2 casas decimais
      resultadoSpan.textContent = taxaInfusao.toFixed(2);
      resultadoSpan.style.color = 'inherit'; // Volta para cor normal do texto
    });
  });
</script>

<style>
/* Estilos básicos para organizar a calculadora (opcional, mas ajuda) */
.calculator label {
  display: block; /* Coloca cada label em uma linha */
  margin-top: 10px;
  font-weight: bold;
}
.calculator input[type="number"] {
  display: block; /* Coloca cada input em uma linha */
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px; /* Largura um pouco maior */
}
.calculator button {
  margin-top: 15px;
  padding: 10px 18px;
  cursor: pointer;
  background-color: #007bff; /* Azul similar ao da imagem */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
}
.calculator button:hover {
   background-color: #0056b3; /* Azul mais escuro no hover */
}
.calculator p {
   margin-top: 15px;
   font-size: 1.1em;
}
#calc1-resultado {
  font-weight: bold;
}
</style>
