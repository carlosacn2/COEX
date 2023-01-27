// Desarrolle un algoritmo que permita leer 3 números enteros. 
// El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
// Ademas ninguno de los 3 numeros ingresados pueden ser iguales. 
// En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

let numero1 = parseFloat(prompt("Ingrese su primer numero"));
let numero2 = parseFloat(prompt("Ingrese su segundo numero"));
let numero3 = parseFloat(prompt("Ingrese su tercer numero"));

if (numero1 < 0 || numero2 < 0 || numero3 < 0) {
  alert("Este valor no es valido");
} else {
  if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
    alert("No puede repetir ningun numero");
    alert("Intentelo de nuevo");
  } else {
    console.log("El numero mayor es:", Math.max(numero1, numero2, numero3));
    console.log("El numero menor es:", Math.min(numero1, numero2, numero3));
  }
}
