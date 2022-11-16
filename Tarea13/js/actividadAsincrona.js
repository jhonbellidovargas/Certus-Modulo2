// Ejercicio 1:
let n1;
let n2;
let n3;
const txtN1 = document.getElementById("txtN1");
const txtN2 = document.getElementById("txtN2");
const txtN3 = document.getElementById("txtN3");
const btnCalcularPromedio = document.getElementById("btnCalcularPromedio");
const pResultado = document.getElementById("pResultado");

btnCalcularPromedio.onclick = function () {
  n1 = Number(txtN1.value);
  n2 = Number(txtN2.value);
  n3 = Number(txtN3.value);
  pResultado.innerHTML = (n1 + n2 + n3) / 3;
};

// Ejercicio 2:
let sueldo1;
let sueldo2;
let sueldo3;
const txtSueldo1 = document.getElementById("txtSueldo1");
const txtSueldo2 = document.getElementById("txtSueldo2");
const txtSueldo3 = document.getElementById("txtSueldo3");
const btnCalcularAumento = document.getElementById("btnCalcularAumento");
const pResultado2 = document.getElementById("pResultado2");

btnCalcularAumento.onclick = function () {
  sueldo1 = Number(txtSueldo1.value);
  sueldo2 = Number(txtSueldo2.value);
  sueldo3 = Number(txtSueldo3.value);
  let aumento1 = sueldo1 * 0.1 + sueldo1;
  let aumento2 = sueldo2 * 0.12 + sueldo2;
  let aumento3 = sueldo3 * 0.15 + sueldo3;
  pResultado2.innerHTML = `
    El sueldo 1 es: ${aumento1.toFixed(2)}
    <br> El sueldo 2 es: ${aumento2.toFixed(2)}
    <br> El sueldo 3 es: ${aumento3.toFixed(2)}`;
};

// Ejercicio 3:
let examen1;
let examen2;
let examen3;
const txtNota1 = document.getElementById("txtNota1");
const txtNota2 = document.getElementById("txtNota2");
const txtNota3 = document.getElementById("txtNota3");
const btnCalcularNotaFinal = document.getElementById("btnCalcularNotaFinal");
const pResultado3 = document.getElementById("pResultado3");

btnCalcularNotaFinal.onclick = function () {
  examen1 = Number(txtNota1.value);
  examen2 = Number(txtNota2.value);
  examen3 = Number(txtNota3.value);
  let notaFinal = examen1 * 0.3 + examen2 * 0.3 + examen3 * 0.4;
  pResultado3.innerHTML = `La nota final es: ${notaFinal.toFixed(2)}`;
};
