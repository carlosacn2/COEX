// Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
// 	A = 19 y 20.
// 	B = 16, 17 y 18.
// 	C = 13, 14 y 15. 
// 	D = 10, 11 y 12.
// 	E = 1 hasta 9.

// Las notas solo pueden ser numeros entre 1 y 20.

let nota = parseInt(prompt("Ingrese su nota"));

if (!Number.isInteger(nota)) {
  alert("Este valor no es valido.");

}if (nota < 1 || nota > 20) {
  alert("Este valor no es valido");

} else {
  if (nota == 20 || nota == 19) {
    console.log("su nota final es A");

  } else {
    if (nota == 16 || nota == 17 || nota == 18) {
      console.log("su nota final es B");

    } else {
      if (nota == 13 || nota == 14 || nota == 15) {
        console.log("su nota final es C");

      } else {
        if (nota == 10 || nota == 11 || nota == 12) {
          console.log("su nota final es D");

        } else {
          if (nota >= 1 || nota <= 9) {
            console.log("su nota final es E");

          }
        }
      }
    }
  }
}
