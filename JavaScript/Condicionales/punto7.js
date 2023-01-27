// Pedir tres números enteros con un valor del 1 al 10,
// sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5
// caso contrario mostrar false, utilizar el operador ternario.

alert("Ingrese tres numeros menores a 10 y mayores a 0");

let numero1 = parseInt(prompt("Ingrese su primer numero"));
let numero2 = parseInt(prompt("Ingrese su segundo numero"));
let numero3 = parseInt(prompt("Ingrese su tercer numero"));

if (numero1 > 10 || numero2 > 10 || numero3 > 10) {
  alert("Tiene que ingresar un numero menor a 10");

} else {
  if (numero1 < 0 || numero2 < 0 || numero3 < 0) {
    alert("Tiene que ingresar un numero mayor a 0");

  } else {
    promedio = (numero1 + numero2 + numero3) / 3;
    if (promedio > 5) {
      console.log("true");

    } else {
      if (promedio < 5) {
        console.log("false");
        
      }
    }
  }
}
