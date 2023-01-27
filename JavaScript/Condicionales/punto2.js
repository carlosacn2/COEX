// Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. 
// Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
// debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, 
// si no lo son el algoritmo debe imprimir el valor de la base multiplicado por 2 y sumarle 10.

let base = parseFloat(prompt("Ingrese el valor de la base de su triangulo en cm"));
let altura = parseFloat(prompt("Ingrese el valor de la altura de su triangulo en cm"));

if (base == altura) {
  alert("Los valores no pueden ser iguales");

} else {
  if (base < 0 || altura < 0) {
    alert("El valor ingresado no es valido");

  } else {
    if (base < 5 || altura < 4) {
      console.log("La multiplicacion es:", base * 2 + 10);

    } else {
      area = (base * altura) / 2;
      console.log("El area del triangulo es:", area, "cm");

    }
  }
}
