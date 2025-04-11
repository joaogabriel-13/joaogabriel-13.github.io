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
  <div class="input-with-unit">
    <input type="number" id="calc1-dosagem" placeholder="Insira a dosagem" step="any">
    <select id="calc1-dosagem-unit">
      <option value="mcg/kg/min" selected>mcg/kg/min</option>
      <option value="mg/kg/h">mg/kg/h</option>
    </select>
  </div>
  <label for="calc1-concentracao">Concentração da Solução:</label>
   <div class="input-with-unit">
    <input type="number" id="calc1-concentracao" placeholder="Insira a concentração" step="any">
    <select id="calc1-concentracao-unit">
       <option value="mg/mL" selected>mg/mL</option>
       <option value="mcg/mL">mcg/mL</option>
    </select>
  </div>
  <button id="calc1-button">Calcular Taxa de Infusão (mL/h)</button>
  <p><strong>Resultado:</strong> <span id="calc1-resultado">--</span> mL/h</p>
</div>

<hr>

<h2 style="margin-top: 2em;">Calculadora de Dosagem (mL/h para Dose)</h2> <div class="calculator" id="calc2-container">
  <label for="calc2-peso">Peso do Paciente (kg):</label> <input type="number" id="calc2-peso" placeholder="Insira o peso em kg" step="any">

  <label for="calc2-taxa">Taxa de Infusão (mL/h):</label> <input type="number" id="calc2-taxa" placeholder="Insira a taxa em mL/h" step="any">

  <label for="calc2-concentracao">Concentração (mg/mL):</label>
  <input type="number" id="calc2-concentracao" placeholder="Insira a concentração em mg/mL" step="any">

  <label for="calc2-resultado-unit">Calcular Dose em:</label> <select id="calc2-resultado-unit">
      <option value="mcg/kg/min" selected>mcg/kg/min</option>
      <option value="mg/kg/h">mg/kg/h</option>
  </select>

  <button id="calc2-button">Calcular Dose</button> <p><strong>Resultado:</strong> <span id="calc2-resultado">--</span> <span id="calc2-resultado-unit-label">mcg/kg/min</span></p> </div>
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

    // --- CALCULADORA 1 (Código existente mantido) ---
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

      if (isNaN(peso) || isNaN(dosagem) || isNaN(concentracao) || peso <= 0 || dosagem < 0 || concentracao <= 0) {
        resultadoSpan1.textContent = 'Erro: Verifique os valores (números; peso e concentração > 0).';
        resultadoSpan1.style.color = 'red'; return;
      }
      let dosagemBaseMcgKgMin = dosagem;
      if (dosagemUnit === 'mg/kg/h') { dosagemBaseMcgKgMin = (dosagem * 1000) / 60; }
      let concentracaoBaseMcgMl = concentracao;
      if (concentracaoUnit === 'mg/mL') { concentracaoBaseMcgMl = concentracao * 1000; }
       if (concentracaoBaseMcgMl <= 0) {
         resultadoSpan1.textContent = 'Erro: Concentração base não pode ser zero.'; resultadoSpan1.style.color = 'red'; return;
       }
      const taxaInfusao = (dosagemBaseMcgKgMin * peso * 60) / concentracaoBaseMcgMl;
      resultadoSpan1.textContent = taxaInfusao.toFixed(2);
      resultadoSpan1.style.color = 'inherit';
    });
    // --- FIM CALCULADORA 1 ---


    // --- CALCULADORA 2: Dosagem (Com Ajustes) ---
    const pesoInput2 = document.getElementById('calc2-peso'); // Ordem trocada no HTML
    const taxaInput2 = document.getElementById('calc2-taxa');
    const concentracaoInput2 = document.getElementById('calc2-concentracao');
    const resultadoUnitSelect2 = document.getElementById('calc2-resultado-unit'); // Seletor da unidade de SAÍDA
    const calcularButton2 = document.getElementById('calc2-button');
    const resultadoSpan2 = document.getElementById('calc2-resultado');
    const resultadoUnitLabel2 = document.getElementById('calc2-resultado-unit-label'); // Span para mostrar a unidade de saída

    calcularButton2.addEventListener('click', function() {
        const taxa = parseFloat(taxaInput2.value);
        const peso = parseFloat(pesoInput2.value);
        const concentracaoMgMl = parseFloat(concentracaoInput2.value);
        const outputUnit = resultadoUnitSelect2.value; // Lê a unidade de saída desejada

        // Validação
        if (isNaN(taxa) || isNaN(peso) || isNaN(concentracaoMgMl) || taxa < 0 || peso <= 0 || concentracaoMgMl <= 0) {
            resultadoSpan2.textContent = 'Erro: Verifique os valores.';
            resultadoUnitLabel2.textContent = ''; // Limpa label da unidade em caso de erro
            resultadoSpan2.style.color = 'red';
            return;
        }

        // Calcular sempre na base mcg/kg/min primeiro
        // Fórmula: Dosagem (mcg/kg/min) = [Taxa (mL/h) * Concentração (mg/mL) * 1000 (mcg/mg)] / [Peso (kg) * 60 (min/h)]
        const dosagemBaseMcgKgMin = (taxa * concentracaoMgMl * 1000) / (peso * 60);

        let resultadoFinal = dosagemBaseMcgKgMin;
        let unidadeFinal = 'mcg/kg/min';

        // Converter se a unidade de saída selecionada for mg/kg/h
        if (outputUnit === 'mg/kg/h') {
            // Converter mcg/kg/min para mg/kg/h: (valor * 60 min/h) / 1000 mcg/mg
            resultadoFinal = (dosagemBaseMcgKgMin * 60) / 1000;
            unidadeFinal = 'mg/kg/h';
        }

        // Exibir resultado e unidade (usar mais casas decimais para mg/kg/h talvez)
        // Usar toFixed(4) para mg/kg/h pode ser mais útil devido à escala
        resultadoSpan2.textContent = resultadoFinal.toFixed(outputUnit === 'mg/kg/h' ? 4 : 2);
        resultadoUnitLabel2.textContent = unidadeFinal; // Atualiza o label da unidade
        resultadoSpan2.style.color = 'inherit'; // Volta cor para o padrão
    });
    // --- FIM CALCULADORA 2 ---


    // --- CÓDIGO PARA CALCULADORAS 3, 4 VIRÁ AQUI ---

  });
</script>

<style>
  /* Estilos (Incluindo ajustes para select de unidade de resultado) */
  .calculator { border: 1px solid #eee; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .calculator label { display: block; margin-top: 12px; margin-bottom: 4px; font-weight: bold; font-size: 0.9em; color: #555; }
  .calculator input[type="number"], .calculator select { padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-size: 1em; margin-bottom: 10px; width: 100%; } /*Inputs/Selects ocupam largura total por padrão */
  .input-with-unit { display: flex; align-items: stretch; gap: 0; margin-bottom: 10px;}
  .input-with-unit input[type="number"] { flex-grow: 1; width: auto; border-top-right-radius: 0; border-bottom-right-radius: 0; border-right: none; }
  .input-with-unit select { flex-shrink: 0; border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .calculator button { display: block; width: 100%; margin-top: 20px; padding: 12px 18px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 4px; font-size: 1.1em; font-weight: bold;}
  .calculator button:hover { background-color: #0056b3; }
  .calculator p { margin-top: 18px; font-size: 1.1em; }
  #calc1-resultado, #calc2-resultado, #calc3-resultado, #calc4-resultado { font-weight: bold; color: #007bff; }
  #calc2-resultado-unit { display: inline-block; width: auto; margin-left: 10px; vertical-align: baseline; font-size:0.9em; height: auto; padding: 5px;} /* Ajuste para select de unidade de saída */
  #calc2-resultado-unit-label { margin-left: 3px; font-size: 1em; font-weight: normal; color: #333;} /* Ajuste para label da unidade */
  hr { margin: 40px 0; border: 0; border-top: 1px solid #ddd; }
</style>
