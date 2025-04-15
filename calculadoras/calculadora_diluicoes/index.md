<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Diluição de Solução</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fbeee0;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            color: #5a3d2b;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #5a3d2b;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4a3223;
        }
        .result {
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Calculadora de Diluição de Solução</h1>
        <p>Calcule a diluição de uma solução usando a fórmula C1V1 = C2V2.</p>
        <div class="form-group">
            <label for="c1">Concentração Inicial (C1)</label>
            <input type="number" id="c1" placeholder="Insira C1">
        </div>
        <div class="form-group">
            <label for="v1">Volume Inicial (V1)</label>
            <input type="number" id="v1" placeholder="Insira V1">
        </div>
        <div class="form-group">
            <label for="c2">Concentração Final (C2)</label>
            <input type="number" id="c2" placeholder="Insira C2">
        </div>
        <div class="form-group">
            <label for="v2">Volume Final (V2)</label>
            <input type="number" id="v2" placeholder="Insira V2">
        </div>
        <button onclick="calcularDiluição()">Calcular</button>
        <div class="result" id="resultadoDiluição"></div>
    </div>

    <div class="container">
        <h2>Calculadora de Diluição de Solução (Alternativa)</h2>
        <p>Calcule os volumes necessários de duas soluções para obter uma solução com a concentração final desejada.</p>
        <div class="form-group">
            <label for="c1Alt">Concentração da Solução 1 (C1)</label>
            <input type="number" id="c1Alt" placeholder="Insira C1">
        </div>
        <div class="form-group">
            <label for="c2Alt">Concentração da Solução 2 (C2)</label>
            <input type="number" id="c2Alt" placeholder="Insira C2">
        </div>
        <div class="form-group">
            <label for="cfAlt">Concentração Final Desejada (Cf)</label>
            <input type="number" id="cfAlt" placeholder="Insira Cf">
        </div>
        <div class="form-group">
            <label for="vfAlt">Volume Final Desejado (Vf)</label>
            <input type="number" id="vfAlt" placeholder="Insira Vf">
        </div>
        <button onclick="calcularDiluiçãoAlternativa()">Calcular</button>
        <div class="result" id="resultadoDiluiçãoAlt"></div>
    </div>

    <script>
        function calcularDiluição() {
            const c1 = parseFloat(document.getElementById('c1').value);
            const v1 = parseFloat(document.getElementById('v1').value);
            const c2 = parseFloat(document.getElementById('c2').value);
            const v2 = parseFloat(document.getElementById('v2').value);

            if (c1 && v1 && c2) {
                const resultado = (c1 * v1) / c2;
                document.getElementById('resultadoDiluição').innerText = `O volume final (V2) é: ${resultado.toFixed(2)}`;
            } else if (c1 && c2 && v2) {
                const resultado = (c2 * v2) / c1;
                document.getElementById('resultadoDiluição').innerText = `O volume inicial (V1) é: ${resultado.toFixed(2)}`;
            } else {
                document.getElementById('resultadoDiluição').innerText = 'Por favor, preencha pelo menos 3 campos.';
            }
        }

        function calcularDiluiçãoAlternativa() {
            const c1 = parseFloat(document.getElementById('c1Alt').value);
            const c2 = parseFloat(document.getElementById('c2Alt').value);
            const cf = parseFloat(document.getElementById('cfAlt').value);
            const vf = parseFloat(document.getElementById('vfAlt').value);

            if (c1 && c2 && cf && vf) {
                const v1 = ((cf - c2) * vf) / (c1 - c2);
                const v2 = vf - v1;
                document.getElementById('resultadoDiluiçãoAlt').innerText = `V1: ${v1.toFixed(2)}, V2: ${v2.toFixed(2)}`;
            } else {
                document.getElementById('resultadoDiluiçãoAlt').innerText = 'Por favor, preencha todos os campos.';
            }
        }
    </script>
</body>
</html>