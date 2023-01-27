// Un Zoólogo pretende determinar el porcentaje de animales que hay en las siguientes tres
// categorías de edades: de O a 1 año, de más de 1 año y menos de 3 y de 3 o más años.
// El zoológico todavía no está seguro del animal que va a estudiar. Si se decide por
// elefantes solo tomara una muestra de 20 de ellos; si se decide por las jirafas, tomara 15
// muestras, y si son chimpancés tomara 40.

let animal;
let cantidad;
let edad;
let categoria1 = 0;
let categoria2 = 0;
let categoria3 = 0;

animal = parseInt(prompt("Ingrese el numero correspondiente al animal: elefante[1] - jirafa[2] - chimpaces[3]"));

if (animal < 1 || animal > 3) {
  alert("El valor ingresado no es valido");
} else {
  if (animal == 1) {
    animal = "Elefante";
    cantidad = 20;
  } else {
    if (animal == 2) {
      animal = "Jirafa";
      cantidad = 15;
    } else {
      if (animal == 3) {
        animal = "Chimpace";
        cantidad = 40;
      }
    }
  }
  for (let x = 0; x <= cantidad; x++) {
    edad = parseFloat(prompt("Ingrese la edad", x));
    if (edad >= 0 && edad <= 1) {
      categoria1 += 1;
    } else {
      if (edad < 3) {
        categoria2 += 1;
      } else {
        categoria3 += 1;
      }
      console.log("Porcentaje de edades de", animal);
      console.log((categoria1 / cantidad) * 100, "%");
      console.log((categoria2 / cantidad) * 100, "%");
      console.log((categoria3 / cantidad) * 100, "%");
    }
  }
}
