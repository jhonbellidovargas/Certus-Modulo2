// Ejercicio 1
let varones, mujeres, total, porcentajeVarones, porcentajeMujeres;
const cantVarones = document.getElementById("varones");
const cantMujeres = document.getElementById("mujeres");
const btnCalcularPorcentaje = document.getElementById("btnCalcularPorcentaje");
const pResultado1 = document.getElementById("pResultado1");

btnCalcularPorcentaje.onclick = function () {
  varones = parseInt(cantVarones.value);
  mujeres = parseInt(cantMujeres.value);
  total = varones + mujeres;
  porcentajeVarones = (varones / total) * 100;
  porcentajeMujeres = (mujeres / total) * 100;
  pResultado1.innerHTML = `El porcentaje de varones es: ${porcentajeVarones.toFixed(
    2
  )} % y el porcentaje de mujeres es: ${porcentajeMujeres.toFixed(2)} %`;
};

// Ejercicio 2
let monto;
let porcentajeLaMar = 0.35;
let porcentajeAbancay = 0.25;
let porcentaje28Julio = 0.1;
let porcentajeAviacion = 0.15;
let porcentajeTacna = 0.15;
const inputMonto = document.getElementById("montoInversion");
const btnCalcularInversion = document.getElementById("btnCalcularDistribucion");
const pResultado2 = document.getElementById("pResultado2");

btnCalcularInversion.onclick = function () {
  monto = parseInt(inputMonto.value);
  pResultado2.innerHTML = `La Mar: ${monto * porcentajeLaMar} <br> Abancay: ${(
    monto * porcentajeAbancay
  ).toFixed(2)} <br> 28 de Julio: ${(monto * porcentaje28Julio).toFixed(
    2
  )} <br> Aviación: ${(monto * porcentajeAviacion).toFixed(2)} <br> Tacna: ${(
    monto * porcentajeTacna
  ).toFixed(2)}`;
};

// Ejercicio 3
let entradaGeneral, entradaMayor, entradaMenor, recaudacionGeneral, recaudacionMayor, recaudacionMenor, totalRecaudado;
let precioGeneral = 150;
let precioMayor = 50;
let precioMenor = 80;
const inputEntradaGeneral = document.getElementById("entradasGenerales");
const inputEntradaMayor = document.getElementById("entradasMayores");
const inputEntradaMenor = document.getElementById("entradasMenores");
const btnCalcularEntradas = document.getElementById("btnCalcularIngresos");
const pResultado3 = document.getElementById("pResultado3");

btnCalcularEntradas.onclick = function () {
  entradaGeneral = parseInt(inputEntradaGeneral.value);
  entradaMayor = parseInt(inputEntradaMayor.value);
  entradaMenor = parseInt(inputEntradaMenor.value);

  recaudacionGeneral = entradaGeneral * precioGeneral;
  recaudacionMayor = entradaMayor * precioMayor;
  recaudacionMenor = entradaMenor * precioMenor;
  totalRecaudado = recaudacionGeneral + recaudacionMayor + recaudacionMenor;

  pResultado3.innerHTML = `El total de ingresos es: ${totalRecaudado.toFixed(2
  )} <br> Ingresos por entradas generales: ${recaudacionGeneral.toFixed(
    2
  )} <br> Ingresos por entradas mayores: ${recaudacionMayor.toFixed(2)} <br> In
  gresos por entradas menores: ${recaudacionMenor.toFixed(2)}`;
};
