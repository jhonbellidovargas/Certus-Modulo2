// Ejercicio 1: Digite el importe de una compra, en caso de que el importe sea 150 o más, se le
//descontará el 12%. Mostrar el descuento otorgado y el importe de compra final
// Ejercicio 2: Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el
//  promedio de prácticas; muestre el nombre del alumno y su promedio final solo si el alumno está aprobado.
//  Tenga en cuenta que para el cálculo del promedio la nota del examen final tiene peso doble.

// Ejercicio 1
const res = document.getElementById("resultado");
let importe = prompt("Importe de compra:");
let descuento = 0;
if (importe >= 150) {
  descuento = importe * 0.12;
  importe = importe - descuento;
} else {
  descuento = 0;
}
res.innerHTML = `El descuento es de ${descuento} y el importe final es de ${importe}`;

// Ejercicio 2
const res = document.getElementById("resultado");
let nombre = prompt("Nombre del alumno:");
let parcial = prompt("Nota del examen parcial:");
let final = prompt("Nota del examen final:");
let practicas = prompt("Nota del promedio de prácticas:");

let promedio = (parcial * 0.25 + final * 0.5 + practicas * 0.25);
if (promedio >= 13) {
  res.innerHTML = `El alumno ${nombre} está aprobado con un promedio de ${promedio}`;
}