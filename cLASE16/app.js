// Ejemplo 3
const cadenaOriginal = document.getElementById("txtCadena");
const btnCortar = document.getElementById("btnCortar");
const resultado3 = document.getElementById("resultado3");

btnCortar.onclick = function () {
  const cadena = cadenaOriginal.value;
  const resultado = cadena.split(" ");
  resultado3.innerText = "Tamaño de la cadena: " + resultado.length +
                        "\n" + " 1) " + resultado[0]+
                        "\n" + " 2) " + resultado[1]+
                        "\n" + " 3) " + resultado[2]
}

// Ejemplo 4: Array

// Datos
const btnArray = document.getElementById("btnArray");
const result4 = document.getElementById("resultado4");

let mensaje2 ="";
// declarar un array
let cadArray = "Hola como estas";
let numArray = [100, 200, 300, 400, 500];
//* Archivo de datos json
let users = ["jperez", "nmarcos"];
let pass = ["certus@", "123certus"];
let estado = [0, 0];
//******************************** */
btnArray.onclick = function(){
// Estado del usuario jperez
if(estado[0] == 1){
mensaje2 = "El usuario esta activo";
}else{
mensaje2 = "El usuario esta bloqueado";
}
result4.innerText =
"Tamaño cadArray: " + cadArray.length + "\n" +
"Tamaño numArray: " + numArray.length + "\n" +
"Total de usuarios: " + users.length + "\n" +
"Indice 7 de cadArray: " + cadArray[7]+ "\n" +
"Pass de jperez: " + pass[0] + "\n" +
"Estado de jperez: " + mensaje2 + "\n";
}

