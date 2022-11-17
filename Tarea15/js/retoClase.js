/* RETO
La empresa Anita S.A. fabrica los juguetes Robot y Muñeca,
y realiza sus ventas por delivery.
La empresa de delivery le cobra 5 soles por entrega y 1 sol adicional
cuando el paquete a entregar pesa mas de 10 kilos. Cada Robot pesa 1 Kg y cada Muñeca ½ Kg.
Escribir una aplicación que calcule el importe que debe cobrar la empresa Anita S.A.
por el servicio de delivery ingresando la cantidad de Robot y Muñecas
que se transportarán en un paquete.
*/

let delivery = 5;
let pesoRobot = 1;
let pesoMuñeca = 0.5;
let pesoTotal;
let cantRobot = prompt("Ingrese la cantidad de Robot");
let cantMuñeca = prompt("Ingrese la cantidad de Muñeca");
const res = document.getElementById("resultado");

pesoTotal = (parseInt(cantRobot) * pesoRobot) + (parseInt(cantMuñeca) * pesoMuñeca);
if (pesoTotal > 10) {
    delivery += 1;
} else {
    delivery = delivery;
}

res.innerHTML = `El precio del delivery es ${delivery}`;
