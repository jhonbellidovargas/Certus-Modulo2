// Ejercicio 1
let n1;
let n2;
const txtN1 = document.getElementById("txtN1");
const txtN2 = document.getElementById("txtN2");
const btnProducto = document.getElementById("btnProducto");
const pResultado = document.getElementById("pResultado");

btnProducto.onclick = function () {
  n1 = Number(txtN1.value);
  n2 = Number(txtN2.value);
  pResultado.innerHTML = n1 * n2;
};

// Ejercicio 2
let n3;
const txtN3 = document.getElementById("txtN3");
const btnPorcentaje = document.getElementById("btnPorcentaje");
const pResultado2 = document.getElementById("pResultado2");

btnPorcentaje.onclick = function () {
  n3 = Number(txtN3.value);
  pResultado2.innerHTML = n3 * 0.2;
};

// Ejercicio 3
let n4;
const txtN4 = document.getElementById("txtN4");
const btnConvertir = document.getElementById("btnConvertir");
const pResultado3 = document.getElementById("pResultado3");

btnConvertir.onclick = function () {
  n4 = Number(txtN4.value);
  pResultado3.innerHTML = `El valor en centimetros es: ${
    n4 * 100
  } y en milimetros es: ${n4 * 1000}`;
};

// Ejercicio 4
let n5;
let n6;
const txtN5 = document.getElementById("txtN5");
const txtN6 = document.getElementById("txtN6");
const btnArea = document.getElementById("btnArea");
const pResultado4 = document.getElementById("pResultado4");

btnArea.onclick = function () {
  n5 = Number(txtN5.value);
  n6 = Number(txtN6.value);
  pResultado4.innerHTML = (n5 * n6) / 2;
};

// Ejercicio 5
let n7;
const txtN7 = document.getElementById("txtN7");
const btnConvertirSol = document.getElementById("btnConvertirSol");
const pResultado5 = document.getElementById("pResultado5");

btnConvertirSol.onclick = function () {
  n7 = Number(txtN7.value);
  pResultado5.innerHTML = n7 * 3.38;
};

// Ejercicio 6
let n8;
const txtN8 = document.getElementById("txtN8");
const btnConvertirMilimetros = document.getElementById(
  "btnConvertirMilimetros"
);
const pResultado6 = document.getElementById("pResultado6");

btnConvertirMilimetros.onclick = function () {
  n8 = Number(txtN8.value);
  pResultado6.innerHTML = n8 * 25.4;
};

// Ejercicio 7
let n9;
const txtN9 = document.getElementById("txtN9");
const btnSumarCifras = document.getElementById("btnSumarCifras");
const pResultado7 = document.getElementById("pResultado7");

btnSumarCifras.onclick = function () {
  n9 = parseInt(Number(txtN9.value));
  pResultado7.innerHTML =
    ((n9 % 10) + (Math.floor(n9 / 10) % 10) + (Math.floor(n9 / 100) % 10)) ** 2;
};

// Ejercicio 8
let n10;
const txtN10 = document.getElementById("txtN10");
const btnCalcularGanancia = document.getElementById("btnCalcularGanancia");
const pResultado8 = document.getElementById("pResultado8");

btnCalcularGanancia.onclick = function () {
  n10 = Number(txtN10.value);
  pResultado8.innerHTML = `Socio A: ${n10 * 0.3} <br> Socio B: ${
    n10 * 0.2
  } <br> Socio C: ${n10 * 0.5}`;
};

// Ejercicio 9
let n11;
const txtN11 = document.getElementById("txtN11");
const btnCalcularIGV = document.getElementById("btnCalcularIGV");
const pResultado9 = document.getElementById("pResultado9");

btnCalcularIGV.onclick = function () {
  n11 = Number(txtN11.value);
  let igv = n11 * 0.19;
  let precioFinal = n11 + igv;
  pResultado9.innerHTML = `IGV: ${igv.toFixed(
    2
  )} <br> Precio final: ${precioFinal.toFixed(2)}`;
};

// Ejercicio 10
let n12;
let n13;
let n14;
const txtN12 = document.getElementById("txtN12");
const txtN13 = document.getElementById("txtN13");
const txtN14 = document.getElementById("txtN14");
const btnRecaudacion = document.getElementById("btnRecaudacion");
const pResultado10 = document.getElementById("pResultado10");

btnRecaudacion.onclick = function () {
  n12 = Number(txtN12.value);
  n13 = Number(txtN13.value);
  n14 = Number(txtN14.value);
  let recaudacionGeneral = n12 * 150;
  let recaudacionMayores = n13 * 50;
  let recaudacionMenores = n14 * 80;
  let recaudacionTotal =
    recaudacionGeneral + recaudacionMayores + recaudacionMenores;
  pResultado10.innerHTML = `Recaudacion general: ${recaudacionGeneral} <br> Recaudacion mayores: ${recaudacionMayores} <br> Recaudacion menores: ${recaudacionMenores} <br> Recaudacion total: ${recaudacionTotal}`;
};
