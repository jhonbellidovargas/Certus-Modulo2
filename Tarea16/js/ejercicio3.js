const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");
const btnSumar = document.getElementById("btnSumar");

btnSumar.onclick = function () {
  let res = parseFloat(numero1.value) + parseFloat(numero2.value);
  resultado.innerText = res;
}