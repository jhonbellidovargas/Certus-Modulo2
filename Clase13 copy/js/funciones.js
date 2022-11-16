/*
Generales
-> Todo linea de codigo o instruccion (bloque) termina ; (punto y coma)
-> JS tiene funciones integradas -> alert, prompt, confirm
-> JS tiene librerias integradas -> Math (Conjunto de funciones matematicas)
-> JS Usa concepto de programacion Orientada a Objetos (Atributos, Metodos)

Operadores Matematicos
+ -> Suma
- -> resta
* -> Producto
/ -> División
** -> Potencia
% -> Residuo de una division entera

DIV decimal -> 10/3 = 3.333 DIV Entera -> 10/3 = 3 residuo 1 (10%3)

Declarar variables: var / let / const
El signo = "igual" -> asignar un valor a una variable

*/

let a = 10;
let b = 20;
let c = a + b;
alert(`Suma de ${a} + ${b} = ${c}`);

/* Ejemplo de manipulacion del DOM -> Document Object Model */

// Capturar el elemento p del DOM cuyo Id es resultado1
// document -> al objeto document -> Raiz del DOM
// .getElementById -> Es una funcion de document = Método
// captura el elemento del DOM cuyo ID se indica entre parentesis

const resultado1 = document.getElementById("resultado1");
resultado1.innerHTML = `Suma de ${a} + ${b} = ${c}`;