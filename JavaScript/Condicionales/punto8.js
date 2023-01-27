// Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar.
// Ademas el numero debe ser positivo.

const numero = parseInt(prompt("Ingrese un numero entero"));

if (numero < 0) {
  alert("El valor ingresado no es valido");

} else {
  if (isNaN(numero)) {
    alert("El valor ingresado no es un numero");

  } else {
    if (numero % 2 == 0) {
      alert("El numero ingresado es par");

    } else {
      alert("El numero ingresado es impar");
      
    }
  }
}
