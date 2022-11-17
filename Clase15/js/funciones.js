let nombre = prompt("Ingrese el nombre del trabajador");
let dias = prompt("Ingrese los dias trabajados del trabajador " + nombre);
const res = document.getElementById("resultado");
let bono;

let sueldo = dias * 40;
(dias > 15) ? bono = sueldo * 0.20 : bono = 0;
let neto = sueldo + bono;


res.innerHTML = `Salario de ${nombre} es ${neto}`;



