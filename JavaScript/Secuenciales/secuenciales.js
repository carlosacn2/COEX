// Evaluar las siguientes expresiones para A = 2, B = 5 y C=1:
// a. 3 x A - 4 x B / A2
// b. (((B + C) / 2 * A + 10) * 3 * B) - 6

let A = 2;
let B = 5;
let C = 1;

puntoa = 3 * A - ((4 * B) / A) * A;
puntob = (((B + C) / 2) * A + 10) * 3 * B - 6;

console.log(puntoa);
console.log(puntob);

// Un individuo desea invertir su capital en un banco y desea saber cuanto dinero ganara
// despues de un mes si el banco paga a razon de 1,2% mensual.

let inversion = parseInt(prompt("ingrese el monto que desea invertir"));

ganancia = inversion * 0.012;

console.log("su ganancia mensual sera de:", ganancia);

// Calcule el area del triangulo y muestre su resultado.

let base = parseFloat(prompt("ingrese el valor de la base del traingulo"));
let altura = parseFloat(prompt("ingrese el valor de la altura del triangulo"));

area = (base * altura) / 2;

console.log("el area del triangulo es de:", area);

// Una agencia de venta de autos paga a su personal de ventas un salario de $980.000, 
// mas una comision de $170.000 por auto vendido, mas un 5% del valor de venta. 
// Diseñar un algoritmo para calcular el salario de un vendedor en un determinado mes, 
// conociendo el no de automoviles vendidos y el total del monto de ventas.

const autos = parseFloat(prompt("Ingrese el numero de autos vendidos"));

salario = 980000;
comisionporauto = 170000 * autos;
comisionporauto = salario + comisionporauto;
comisiondeventa = comisionporauto * 0.05;

console.log("Su salario es de:", comisiondeventa + comisionporauto, "pesos");

// Hallar el promedio de calificaciones, teniendo en cuenta que el estudiante tiene 4 notas decimales; 
// dos notas valen el 40% y las otras dos valen el 60%.

const nota1 = parseFloat(prompt('Ingrese su primera nota'));
const nota2 = parseFloat(prompt('Ingrese su segunda nota'));
const nota3 = parseFloat(prompt('Ingrese su tercera nota'));
const nota4 = parseFloat(prompt('Ingrese su cuarta nota'));

cuarenta = (nota1 + nota2) * 0.4;
sesenta = (nota3 + nota4) * 0.6;
promedio = cuarenta + sesenta;

console.log('Su promedio es:',promedio);

// Calcular el numero de pulsaciones que una persona debe tener por cada 10 segundos de ejercicio, 
// si la formula es: num. pulsaciones = (220 - edad)/10

const edad = parseInt(prompt('Ingrese su edad'));

numeropulsaciones = (220 - edad) / 10;

console.log('Su numero de pulsaciones debe ser:',numeropulsaciones);

// Un vendedor recibe un sueldo base, mas un 10% extra por comision de sus ventas, 
// el vendedor desea saber cuanto dinero obtendra por concepto de comisiones por las tres (3) ventas que 
// realiza en el mes y el total que recibira en el mes tomando en cuenta su sueldo base y comisiones.

const sueldo = parseInt(prompt('Ingrese su sueldo'));
const venta = 1000;

comision = (venta * 3) * 0.1;

console.log('Su seldo es de:',comision + sueldo);




