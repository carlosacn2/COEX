let examen1 = parseFloat(prompt('Ingrese la nota coerrespondiente a su primer examen'));
let examen2 = parseFloat(prompt('Ingrese la nota correspondiente a su segundo examen'));
let examen3 = parseFloat(prompt('Ingrese la nota correspondiente a su tercer examen'));
if (examen1 < 0 || examen1 > 5 || examen2 < 0 || examen2 > 5 || examen3 < 0 || examen3 > 5) {
    alert('Error: el numero ingresado no es valido')
    alert('Intente nuevamente ingresar las notas de examenes');
} else {
    var examenes = ((examen1 + examen2 + examen3) / 3) * 0.55
    console.log('Su nota de examenes correspondiente al 55% es de:', examenes)
}

/* PROMEDIO DE TRABAJOS */
let trabajo1 = parseFloat(prompt('Ingrese la nota correspondiente a su primer trabajo'));
let trabajo2 = parseFloat(prompt('Ingrese la nota correspondiente a su segundo trabajo'));
if(trabajo1 < 0 || trabajo1 > 5 || trabajo2 < 0 || trabajo2 > 5){
    alert('Error: el numero ingresado no es valido');
    alert('Intente nuevamente ingresar las notas de trabajo');
} else {
    var trabajos = ((trabajo1 + trabajo2) / 2) * 0.15;
    console.log('Su nota de trabajos correspondiente al 15% es de:', trabajos);
}

/* PROMEDIO DE EXAMEN FINAL */
let examen_final = parseFloat(prompt('Ingrese la nota correspondiente a su examen final'));
if(examen_final < 0 || examen_final > 5){
    alert('Error: el numero ingresado no es valido')
    alert('Intente nuevamente ingresar la nota de examen final');
} else {
    var examen = examen_final * 0.20;
    console.log('Su nota de examen final correspondiente al 20% es de:', examen);
}

/* PROMEDIO DE AUTOEVALUACION */

let autoevaluacion = parseFloat(prompt('Ingrese su nota de autoevalucion'));
let co_evaluacion = parseFloat(prompt('Ingrese la nota de co-evaluacion'));
if(autoevaluacion < 0 || autoevaluacion > 5 || co_evaluacion < 0 || co_evaluacion > 5){
    alert('Error: el numero ingresado no es valido');
    alert('Intente nuevamente ingresar la nota de autoevaluacion o co-evaluacion');
} else {
    var co_autoevaluacion = ((co_evaluacion +autoevaluacion) / 2) * 0.10;
    console.log('Su nota de autoevaluacion correspondiente al 10% es de:', co_autoevaluacion);
}

/* NOTA DEFINITIVA Y NIVEL */

let definitiva = examenes + trabajos + examen + co_autoevaluacion;

    console.log('Su nota definitva es:',definitiva.toFixed(2));

if(definitiva >= 4.7 && definitiva <= 5.0){
    console.log('Felicidades aprobo el curso:',definitiva.toFixed(2));
    console.log('Su nivel de cuerso es superior')
} else if (definitiva >= 4.0 && definitiva <= 4.6){
    console.log('Felicidades aprobo el curso:', definitiva.toFixed(2));
    console.log('Su nivel del cuerso es alto')
}else if (definitiva >= 3.0 && definitiva <= 3.9){
    console.log('Felicidades aprobo el curso:', definitiva.toFixed(2));
    console.log('Su nivel del cuerso es basico')
}else if (definitiva >= 2.0 && definitiva <= 2.9){
    console.log('Lo lamento no aprobo el curso:', definitiva.toFixed(2));
    console.log('Su nivel del cuerso es bajo')
}else if (definitiva >= 0 && definitiva <= 1.9){
    console.log('Lo lamento no aprobo el curso:', definitiva.toFixed(2));
    console.log('Su nivel del cuerso es muy bajo')
}else{}