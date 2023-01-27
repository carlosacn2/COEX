// Pedir un número y decir si es un número negativo, si es positivo o cero.

let numero = parseInt(prompt("Ingrese un numero"));

if (numero == 0) {
  console.log("El numero ingresado es cero");

} else {
  if (numero < 0) {
    console.log("El numeor ingresado es negativo");

  } else {
    if (numero > 0) {
      console.log("El numero ingresado es positivo");
      
    }
  }
}
