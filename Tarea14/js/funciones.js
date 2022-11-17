const resultado = document.getElementById("resultado");
let numero1 = 10;
let numero2 = 64;
let numero3 = 27;
let numero4 = 5;

let resultado1 = numero1 + numero2;
let resultado2 = numero3 - numero4;

let resultadoFinal = resultado1 * resultado2;
resultado.innerHTML = `El resultado es: ${resultadoFinal}`;