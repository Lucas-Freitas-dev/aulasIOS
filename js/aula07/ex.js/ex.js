function calcularIMC() {
    // Solicitando informações do usuário
    let peso = parseFloat(prompt("Insira seu peso em kg:"));
    let altura = parseFloat(prompt("Insira sua altura em metros:"));

    // Calculando o IMC
    let imc = peso / (altura * altura);

    // Classificando o IMC
    if (imc < 16.9) {
        return `IMC: ${imc.toFixed(2)} - Muito abaixo do peso`;
    } else if (imc >= 17 && imc < 18.4) {
        return `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
    } else if (imc >= 18.5 && imc < 24.5) {
        return `IMC: ${imc.toFixed(2)} - Peso normal`;
    } else if (imc >= 25 && imc < 29.9) {
        return `IMC: ${imc.toFixed(2)} - Acima do peso`;
    } else if (imc >= 30 && imc < 34.9) {
        return `IMC: ${imc.toFixed(2)} - Obesidade grau 1`;
    } else if (imc >= 35 && imc < 39.9) {
        return `IMC: ${imc.toFixed(2)} - Obesidade grau 2 (severa)`;
    } else {
        return `IMC: ${imc.toFixed(2)} - Obesidade grau 3 (mórbida)`;
    }
}
