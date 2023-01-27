// Pedir dos números y decir si non múltiplos o no.

let numero1 = parseInt(prompt("Ingrese su primer numero"));
let numero2 = parseInt(prompt("Ingrese su segundo numero"));

if (numero1 < 0) {
  alert("El numero ingresado no es valido");
  console.log("Este numero no es valido", numero1);

}
if (numero2 < 0) {
  alert("El numero ingresado no es valido");
  console.log("Este numero no es valido", numero2);

} else {
  if (numero1 % numero2 == 0) {
    console.log("Los numeros ingresados son multiplos");

  } else {
    console.log("Los numero ingrasados no son multiplos");
    
  }
}
