---
layout: default
title: Calculadora de Dose e Taxa de Infusão
---

# Calculadora de Dose e Taxa de Infusão

## Calculadora de Taxa de Infusão

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

<hr> <h2 style="margin-top: 2em;">Calculadora de Dosagem</h2>
<div class="calculator" id="calc2-container" style="opacity: 0.5; pointer-events: none;"> <label>Taxa de Infusão (mL/h):</label><input type="number" disabled>
  <label>Peso do Paciente (kg):</label><input type="number" disabled>
  <label>Concentração (mg/mL):</label><input type="number" disabled>
  <button disabled>Calcular Dosagem (mcg/kg/min)</button>
  <p><strong>Resultado:</strong> <span id="calc2-resultado">--</span> mcg/kg/min</p>
</div>
<hr>
<h2 style="margin-top: 2em;">Calculadora de Taxa de Infusão (Independente do Peso)</h2>
 <div class="calculator" id="calc3-container" style="opacity: 0.5; pointer-events: none;"> <label>Dose (U/min):</label><input type="number" disabled>
  <label>Concentração da Solução (U/mL):</label><input type="number" disabled>
  <button disabled>Calcular Taxa de Infusão (mL/min)</button>
  <p><strong>Resultado:</strong> <span id="calc3-resultado">--</span> mL/min</p>
</div>
<hr>
<h2 style="margin-top: 2em;">Calculadora de Dose (Independente do Peso)</h2>
<div class="calculator" id="calc4-container" style="opacity: 0.5; pointer-events: none;"> <label>Taxa de Infusão (mL/min):</label><input type="number" disabled>
  <label>Concentração da Solução (U/mL):</label><input type="number" disabled>
  <button disabled>Calcular Dose (U/min)</button>
  <p><strong>Resultado:</strong> <span id="calc4-resultado">--</span> U/min</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {

    // --- CALCULADORA 1: Taxa de Infusão ---
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

      // Validação (permite que dosagem seja zero)
      if (isNaN(peso) || isNaN(dosagem) || isNaN(concentracao) || peso <= 0 || dosagem < 0 || concentracao <= 0) {
        resultadoSpan1.textContent = 'Erro: Verifique os valores (números; peso e concentração > 0).';
        resultadoSpan1.style.color = 'red';
        return;
      }

      // --- Conversão de Unidades para Base ---
      // Base Dosagem: mcg/kg/min
      let dosagemBaseMcgKgMin = dosagem;
      if (dosagemUnit === 'mg/kg/h') {
        dosagemBaseMcgKgMin = (dosagem * 1000) / 60;
      }

      // Base Concentração: mcg/mL
      let concentracaoBaseMcgMl = concentracao;
      if (concentracaoUnit === 'mg/mL') {
        concentracaoBaseMcgMl = concentracao * 1000;
      }
      // --- Fim Conversão ---

      if (concentracaoBaseMcgMl <= 0) {
         resultadoSpan1.textContent = 'Erro: Concentração base não pode ser zero.';
         resultadoSpan1.style.color = 'red';
         return;
      }

      // Fórmula com unidades base: Taxa (mL/h) = (Dosagem (mcg/kg/min) * Peso (kg) * 60 min/h) / Concentração (mcg/mL)
      const taxaInfusao = (dosagemBaseMcgKgMin * peso * 60) / concentracaoBaseMcgMl;

      resultadoSpan1.textContent = taxaInfusao.toFixed(2); // Exibe com 2 casas decimais
      resultadoSpan1.style.color = 'inherit'; // Volta cor para o padrão
    });

    // --- FIM CALCULADORA 1 ---

    // --- CÓDIGO PARA CALCULADORAS 2, 3, 4 VIRÁ AQUI ---

  });
</script>

<style>
/* Estilos (incluindo para input+select na mesma linha) */
.calculator { border: 1px solid #eee; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: #fff; }
.calculator label { display: block; margin-top: 10px; margin-bottom: 3px; font-weight: bold; }
.calculator input[type="number"], .calculator select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-size: 1em; }
.input-with-unit { display: flex; align-items: center; gap: 5px; margin-bottom: 10px;}
.input-with-unit input[type="number"] { flex-grow: 1; width: auto; } /* Input expande */
.input-with-unit select { flex-shrink: 0; } /* Select não encolhe */
.calculator button { display: block; width: 100%; margin-top: 15px; padding: 10px 18px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 4px; font-size: 1em; }
.calculator button:hover { background-color: #0056b3; }
.calculator p { margin-top: 15px; font-size: 1.1em; }
#calc1-resultado, #calc2-resultado, #calc3-resultado, #calc4-resultado { font-weight: bold; } /* Estilo para todos os resultados */
hr { margin: 30px 0; border: 0; border-top: 1px solid #eee; }
</style>
