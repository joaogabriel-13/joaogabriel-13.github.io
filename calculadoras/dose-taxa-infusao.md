---
layout: default
title: Calculadora de Dose e Taxa de Infusão
---

# Calculadora de Dose e Taxa de Infusão

## Calculadora de Taxa de Infusão (mcg/kg/min para mL/h)
<div class="calculator">
  <label for="calc1-peso">Peso do Paciente (kg):</label>
  <input type="number" id="calc1-peso" placeholder="Insira o peso em kg" step="any">
  <label for="calc1-dosagem">Dosagem:</label>
  <div class="input-with-unit"> <input type="number" id="calc1-dosagem" placeholder="Insira a dosagem" step="any">
    <select id="calc1-dosagem-unit">
      <option value="mcg/kg/min" selected>mcg/kg/min</option>
      <option value="mg/kg/h">mg/kg/h</option>
    </select>
  </div>
  <label for="calc1-concentracao">Concentração da Solução:</label>
   <div class="input-with-unit"> <input type="number" id="calc1-concentracao" placeholder="Insira a concentração" step="any">
    <select id="calc1-concentracao-unit">
       <option value="mg/mL" selected>mg/mL</option>
       <option value="mcg/mL">mcg/mL</option>
    </select>
  </div>
  <button id="calc1-button">Calcular Taxa de Infusão (mL/h)</button>
  <p><strong>Resultado:</strong> <span id="calc1-resultado">--</span> mL/h</p>
</div>

<hr>

<h2 style="margin-top: 2em;">Calculadora de Dosagem (mL/h para Dose)</h2>
<div class="calculator" id="calc2-container">
  <label for="calc2-peso">Peso do Paciente (kg):</label>
  <input type="number" id="calc2-peso" placeholder="Insira o peso em kg" step="any">

  <label for="calc2-taxa">Taxa de Infusão (mL/h):</label>
  <input type="number" id="calc2-taxa" placeholder="Insira a taxa em mL/h" step="any">

  <label for="calc2-concentracao">Concentração da Solução:</label> <div class="input-with-unit"> <input type="number" id="calc2-concentracao" placeholder="Insira a concentração" step="any">
    <select id="calc2-concentracao-unit"> <option value="mg/mL" selected>mg/mL</option>
       <option value="mcg/mL">mcg/mL</option>
    </select>
  </div>

  <label for="calc2-resultado-unit">Calcular Dose em:</label>
  <select id="calc2-resultado-unit">
      <option value="mcg/kg/min" selected>mcg/kg/min</option>
      <option value="mg/kg/h">mg/kg/h</option>
  </select>

  <button id="calc2-button">Calcular Dose</button>

  <p><strong>Resultado:</strong> <span id="calc2-resultado">--</span> <span id="calc2-resultado-unit-label">mcg/kg/min</span></p>
</div>
<hr>

<h2 style="margin-top: 2em;">Calculadora de Taxa de Infusão (Independente do Peso)</h2>
 <div class="calculator" id="calc3-container" style="opacity: 0.5; pointer-events: none;">
  <label>Dose (U/min):</label><input type="number" disabled>
  <label>Concentração da Solução (U/mL):</label><input type="number" disabled>
  <button disabled>Calcular Taxa de Infusão (mL/min)</button>
  <p><strong>Resultado:</strong> <span id="calc3-resultado">--</span> mL/min</p>
</div>
<hr>
<h2 style="margin-top: 2em;">Calculadora de Dose (Independente do Peso)</h2>
<div class="calculator" id="calc4-container" style="opacity: 0.5; pointer-events: none;">
  <label>Taxa de Infusão (mL/min):</label><input type="number" disabled>
  <label>Concentração da Solução (U/mL):</label><input type="number" disabled>
  <button disabled>Calcular Dose (U/min)</button>
  <p><strong>Resultado:</strong> <span id="calc4-resultado">--</span> U/min</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // --- CALCULADORA 1 (Código JavaScript Inalterado) ---
    const pesoInput1 = document.getElementById('calc1-peso');
    const dosagemInput1 = document.getElementById('calc1-dosagem');
    const dosagemUnitSelect1 = document.getElementById('calc1-dosagem-unit');
    const concentracaoInput1 = document.getElementById('calc1-concentracao');
    const concentracaoUnitSelect1 = document.getElementById('calc1-concentracao-unit');
    const calcularButton1 = document.getElementById('calc1-button');
    const resultadoSpan1 = document.getElementById('calc1-resultado');

    calcularButton1.addEventListener('click', function() {
      const peso = parseFloat(pesoInput1.value);
      const dosagem = parseFloat(dosagemInput1.value);
      const dosagemUnit = dosagemUnitSelect1.value;
      const concentracao = parseFloat(concentracaoInput1.value);
      const concentracaoUnit = concentracaoUnitSelect1.value;
       if (isNaN(peso) || isNaN(dosagem) || isNaN(concentracao) || peso <= 0 || dosagem < 0 || concentracao <= 0) { resultadoSpan1.textContent = 'Erro: Verifique os valores (números; peso e concentração > 0).'; resultadoSpan1.style.color = 'red'; return; }
       let dosagemBaseMcgKgMin = dosagem; if (dosagemUnit === 'mg/kg/h') { dosagemBaseMcgKgMin = (dosagem * 1000) / 60; }
       let concentracaoBaseMcgMl = concentracao; if (concentracaoUnit === 'mg/mL') { concentracaoBaseMcgMl = concentracao * 1000; }
       if (concentracaoBaseMcgMl <= 0) { resultadoSpan1.textContent = 'Erro: Concentração base não pode ser zero.'; resultadoSpan1.style.color = 'red'; return; }
       const taxaInfusao = (dosagemBaseMcgKgMin * peso * 60) / concentracaoBaseMcgMl;
       resultadoSpan1.textContent = taxaInfusao.toFixed(2); resultadoSpan1.style.color = 'inherit';
    });
    // --- FIM CALCULADORA 1 ---


    // --- CALCULADORA 2: Dosagem (JavaScript Atualizado) ---
    const pesoInput2 = document.getElementById('calc2-peso');
    const taxaInput2 = document.getElementById('calc2-taxa');
    const concentracaoInput2 = document.getElementById('calc2-concentracao');
    const concentracaoUnitSelect2 = document.getElementById('calc2-concentracao-unit'); // NOVO: Pega o select da unidade de CONCENTRAÇÃO
    const resultadoUnitSelect2 = document.getElementById('calc2-resultado-unit');
    const calcularButton2 = document.getElementById('calc2-button');
    const resultadoSpan2 = document.getElementById('calc2-resultado');
    const resultadoUnitLabel2 = document.getElementById('calc2-resultado-unit-label');

    calcularButton2.addEventListener('click', function() {
        const taxa = parseFloat(taxaInput2.value);
        const peso = parseFloat(pesoInput2.value);
        const concentracao = parseFloat(concentracaoInput2.value); // Valor numérico da concentração
        const concentracaoUnit = concentracaoUnitSelect2.value; // Unidade de concentração selecionada (mg/mL ou mcg/mL)
        const outputUnit = resultadoUnitSelect2.value;

        // Validação
        if (isNaN(taxa) || isNaN(peso) || isNaN(concentracao) || taxa < 0 || peso <= 0 || concentracao <= 0) {
            resultadoSpan2.textContent = 'Erro: Verifique os valores.';
            resultadoUnitLabel2.textContent = '';
            resultadoSpan2.style.color = 'red';
            return;
        }

        // Converter concentração para base mcg/mL ANTES de usar na fórmula
        let concentracaoBaseMcgMl = concentracao;
        if (concentracaoUnit === 'mg/mL') {
            concentracaoBaseMcgMl = concentracao * 1000;
        }

         // Valida de novo após conversão (caso o input original fosse 0 e a unidade mcg/ml)
         if (concentracaoBaseMcgMl <= 0) {
           resultadoSpan2.textContent = 'Erro: Concentração não pode ser zero.';
           resultadoUnitLabel2.textContent = '';
           resultadoSpan2.style.color = 'red';
           return;
         }

        // Calcular sempre na base mcg/kg/min primeiro
        // Fórmula: Dosagem (mcg/kg/min) = [Taxa (mL/h) * Concentração (mcg/mL)] / [Peso (kg) * 60 (min/h)]
        // Note que concentracaoBaseMcgMl já está em mcg/mL, então não multiplicamos por 1000 aqui.
        const dosagemBaseMcgKgMin = (taxa * concentracaoBaseMcgMl) / (peso * 60);

        let resultadoFinal = dosagemBaseMcgKgMin;
        let unidadeFinal = 'mcg/kg/min';

        // Converter saída se necessário
        if (outputUnit === 'mg/kg/h') {
            resultadoFinal = (dosagemBaseMcgKgMin * 60) / 1000;
            unidadeFinal = 'mg/kg/h';
        }

        // Exibir resultado e unidade
        resultadoSpan2.textContent = resultadoFinal.toFixed(outputUnit === 'mg/kg/h' ? 4 : 2);
        resultadoUnitLabel2.textContent = unidadeFinal;
        resultadoSpan2.style.color = 'inherit';
    });
    // --- FIM CALCULADORA 2 ---


    // --- CÓDIGO PARA CALCULADORAS 3, 4 VIRÁ AQUI ---

  });
</script>

<style>
  /* Estilos (Com ajuste para largura do select) */
  .calculator { border: 1px solid #eee; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .calculator label { display: block; margin-top: 12px; margin-bottom: 4px; font-weight: bold; font-size: 0.9em; color: #555; }
  /* Regra geral para inputs e selects terem padding, borda, etc */
  .calculator input[type="number"], .calculator select {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 1em;
      margin-bottom: 10px; /* Espaçamento abaixo */
  }
  /* Inputs numéricos ocupam largura total por padrão */
  .calculator input[type="number"] {
      width: 100%;
  }
   /* Estilo para o container que alinha input e select */
  .input-with-unit {
      display: flex;
      align-items: stretch; /* Alinha verticalmente */
      gap: 0; /* Sem espaço entre eles */
      margin-bottom: 10px; /* Mantém espaço abaixo do grupo */
  }
   /* Input dentro do grupo: cresce para ocupar espaço, ajusta bordas */
  .input-with-unit input[type="number"] {
      flex-grow: 1;
      width: auto; /* Largura automática controlada pelo flex */
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none; /* Tira borda direita para colar no select */
      margin-bottom: 0; /* Tira margem de baixo pois o container já tem */
  }
  /* Select dentro do grupo: não encolhe, largura automática, ajusta bordas */
  .input-with-unit select {
      flex-shrink: 0;
      width: auto; /* <<< AJUSTE PRINCIPAL: Largura automática */
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-bottom: 0; /* Tira margem de baixo */
  }
  /* Estilo para o select de unidade de resultado (Calc 2) */
  #calc2-resultado-unit {
      display: inline-block; /* Fica na mesma linha do resultado */
      width: auto; /* Largura automática */
      margin-left: 10px; /* Espaço à esquerda */
      vertical-align: baseline; /* Alinha com o texto */
      font-size: 0.9em; /* Tamanho um pouco menor */
      height: auto; /* Altura automática */
