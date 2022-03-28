
let edad = 0;
let monto = 0;
const rango = [194, 8, 30];
let dolarizado = 0;

let nombre = prompt('Hola, como estas?!👋👋 Comenzamos?, escribí tú nombre en el la casilla; abajo!');

while (nombre == '' || !isNaN(nombre)) {
    nombre = prompt('No podés dejar el campo vacio, fijate de completar tú nombre!');
    console.log(nombre);
}
alert('Hey, buenisimo ' + nombre + ', ahora sigamos!');
console.log(nombre);

let anioNacimiento = prompt('Hablemos de años... 📆, en que año naciste?, ej.: 2001');
let hoy = new Date();
let year = hoy.getFullYear();
edad = year - anioNacimiento;
console.log(edad);
dolarizado = monto / rango[0];


while (edad < 18 || edad > 95 || isNaN(edad)){
    alert('😕Lo sentimos, pero...tenes q ser mayor a 18 y menor a 95 años');
    anioNacimiento = prompt('Volve a escribir tú año de nacimiento, podes haberte equivocado... 📆?, ej.: 2001');
    edad = year - anioNacimiento;
}

 alert('🎉Buenisimo, podemos seguir, estas en el rango de edad, tenes ' + edad + ' años... vamos a  invertir 💰💰💰');

const riesgo = parseInt(prompt('Que tipo de inversion queres? Escribí (1) SEGURA - Bajo riesgo/estabilidad, Stablecoins / (2) MODERADA - Criptos de moderada fluctuacion y (3) ALTA - Criptos de mayor volatilidad y muy buenos reditos, pero ojo, buenas perdidas tambien'));

monto = parseInt(prompt('Qué monto monto en PESOS ($) argentinos que queres convertir a criptos?'));
console.log(monto);

while (monto == 0 || isNaN(monto)) {
    console.log(monto);
    monto = parseInt(prompt('Carga un valor numerico y mayor a 0'));
}

dolarizado = monto / rango[0];
let rinde = 0;
let rindeProg = dolarizado;
let rindeProgNeg = dolarizado;
if (riesgo === 1) {
    rindeProg = monto / rango[riesgo - 1];
    rinde = monto / rango[riesgo - 1];
    alert('🔒Estas eligiendo la seguridad, buena opcion, casi nunca se pierde! Ya tenes en tú wallet ' + 'U$DT' + rinde.toFixed(2) + ' aproximado, esta cripto, sigue el patron del dolar estadounidense.!');

} else if (riesgo === 2) {
    rinde = (monto / rango[0] * rango[riesgo - 1]) / 100;
    alert('⚠💰Estas eligiendo una opción interesante, más riesgos, pero mayores ganancias! Ya tenes en tú wallet ' + 'U$S ' + dolarizado.toFixed(2) + ' y un redito de +/- U$S ' + rinde.toFixed(2) + ' aproximado diario');
    
    for(i=0; i<7; i++){
        rindeProg += + rinde; 
        rindeProgNeg += - rinde; 
        console.log('Reditos día '+ (i+1) + ' son +/- ' + 'U$DT ' + rindeProg.toFixed(2) + ' / '+ ' U$DT' + rindeProgNeg.toFixed(2));
    }

} else if (riesgo === 3) {
    rinde = (monto / rango[0] * rango[riesgo - 1]) / 100;
    alert('⚠🚀💰Veo que te gusta la adrenalina y sabes del tema!! Ya tenes en tú wallet ' + 'U$S' + dolarizado.toFixed(2) + ' y un redito de +/- U$S ' + rinde.toFixed(2) + ' aproximado diario');

    for(i=0; i<7; i++){
        rindeProg += + rinde; 
        rindeProgNeg += - rinde; 
        console.log('Reditos día '+ (i+1) + ' son +/- ' + 'U$DT ' + rindeProg.toFixed(2) + ' / '+ ' U$DT' + rindeProgNeg.toFixed(2));
    }

} else {
    alert('😕Hey, no elegiste bien el tipo de riesgo, volve a iniciar la operación');
}



