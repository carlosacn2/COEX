// Crea un algoritmo que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las siguientes operaciones:

// Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
// Si es menor o igual a 1.4 pero
// mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
// Si no se cumplen ninguna de las condiciones
// anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

// Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor
// inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

let diametro = parseFloat(prompt("Ingrese el diametro de su rueda en metros"));

if (diametro > 1.4) {
  alert("La rueda es para un vehiculo grande");
} else {
  if (diametro <= 1.4 && diametro > 0.8) {
    alert("La rueda es para un vehiculo mediano");
  } else {
    alert("La rueda es para un vehiculo pequeño");
  }
}
let grosor = parseFloat(prompt("Ingrese el grosor de su rueda en metros"));

if (((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8) || (diametro < 0.25))){
  alert("El grosor de esta rueda es inferior al recomendado");
  
}
