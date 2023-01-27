var a = 0
var b = 0

let opciones = parseFloat(prompt('Ingrese ell numero de la opccion que desea ejecutar: (1).suma de 3 numeros - (2).resta de dos numeros',));

if (opciones == 1) {
    var suma1 = parseFloat(prompt('Ingrese su primer numero'))
    var suma2 = parseFloat(prompt('Ingrese su segundo numero'))
    var suma3 = parseFloat(prompt('Ingrese su tercer numero'))

function suma(suma1, suma2, suma3) {
    return suma1 + suma2 + suma3
}
    a = suma(suma1, suma2, suma3)
    console.log('La suma de sus numeros es:', a)
} else if (opciones == 2) {
    var resta1 = parseFloat(prompt('Ingrese su primer numero'))
    var resta2 = parseFloat(prompt('Ingrese su segundo numero'))

    function resta(resta1, resta2) {
    return resta1 - resta2
}
    b = resta(resta1, resta2)
    console.log('La resta de sus numeros es:', b)
} else {
    alert('Ingrese un numero valido')
}
