// Ejercicio 1
let nombre, sueldo, hijos, bonificacion, sueldoFinal;
const nom = document.getElementById("nombre");
const suel = document.getElementById("sueldo");
const h = document.getElementById("hijos");
const btnCalSalario = document.getElementById("btnCalSalario");
const pResultado1 = document.getElementById("pResultado1");

btnCalSalario.onclick = function () {
  nombre = nom.value;
  sueldo = Number(suel.value);
  hijos = Number(h.value);
  bonificacion = 0;
  if (hijos > 0) {
    bonificacion = sueldo * 0.07;
  }
  sueldoFinal = sueldo + bonificacion;
  console.log(sueldoFinal);
  pResultado1.innerHTML = `El trabajador ${nombre} tiene un sueldo final de s/ ${sueldoFinal}`;
};

// Ejercicio 2
let numero, resultado;
const num = document.getElementById("numero");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado2 = document.getElementById("pResultado2");

btnCalcular.onclick = function () {
  numero = Number(num.value);
  resultado = 0;
  if (numero > 500) {
    resultado = numero * 0.18;
    pResultado2.innerHTML = `El 18% de ${numero} es ${resultado}`;
  }
};

// Ejercicio 3
let numero2, factorial;
const num2 = document.getElementById("numero2");
const btnCalcularFactorial = document.getElementById("btnCalcularFactorial");
const pResultado3 = document.getElementById("pResultado3");

btnCalcularFactorial.onclick = function () {
  numero2 = Number(num2.value);
  factorial = 1;
  for (let i = 1; i <= numero2; i++) {
    factorial *= i;
  }
  pResultado3.innerHTML = `El factorial de ${numero2} es ${factorial}`;
}