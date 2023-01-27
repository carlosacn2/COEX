// Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.

const numero = parseInt(prompt("Ingrese su numero"));

if (numero < 0) {
  alert("Este numero no es valido");

} else {
  if (numero % 2 == 0) {
    console.log("El numeor ingresado es par");

  } else {
    console.log("El numero ingresado es impar");

  }
}
