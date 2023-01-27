let salario = 950000;
let comision = 0;
var valorautos = 0;
var suma1 = 0;
var total = 0;

let autosvendidos = parseInt(prompt('Ingrese el numero de autos que vendio en el mes'));
if(autosvendidos < 0){
    alert('Error: el valor ingresado no es valido')

} else {
    for(let i = 0; i < autosvendidos; i++){
        valorautos = parseInt(prompt('Ingrese el valor del auto'));
        valorautos = valorautos;
    }
}
function sumaautos(valorautos){
    return valorautos * 0.5;
}
suma1 = sumaautos(valorautos);
comision = 170000 * autosvendidos;
function salariototal(suma1,salario,comision){
    return suma1 + salario + comision
}
total = salariototal(suma1,salario,comision)
console.log('Su salario en este mes es de:',total, 'pesos');







