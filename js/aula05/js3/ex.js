// let numero
// numero = 10;
// while (numero >= 2) {
//     console.log(`contador: ${numero}`);
//     numero = numero - 2
// }

// console.log(`Fim!`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EX 3

// for (let i = 1; i <= 10; i++) {
//     let resultado = 7 * i;
//     console.log("7 x " + i + " = " + resultado);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EX 4

// let a = 0;
// let b = 1; 
// let contador = 0; 

// console.log(a); 
// contador++;

// while (contador < 10) {
//     console.log(b); 
//     let proximo = a + b; 
//     a = b; 
//     b = proximo; 
//     contador++; 
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EX 5

// for (let num = 2; num <= 100; num++) {
//     let isPrimo = true;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrimo = false;
//             break; // Se encontrar um divisor, não é primo
//         }
//     }

//     if (isPrimo) {
//         console.log(num); // Imprime o número primo
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EX 6


// Gera um número aleatório entre 0 e 10
// const numeroSorteado = Math.floor(Math.random() * 11);
// let palpite;
// let tentativas = 0;

// do {
//     // Solicita ao usuário que insira um número
//     palpite = prompt("Adivinhe um número entre 0 e 10:");
//     palpite = Number(palpite); // Converte a entrada para um número
//     tentativas++;

//     if (palpite === numeroSorteado) {
//         alert("Parabéns, você acertou! O número era " + numeroSorteado + ". Tentativas: " + tentativas);
//     } else {
//         alert("Tente novamente!");
//     }
// } while (palpite !== numeroSorteado);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
