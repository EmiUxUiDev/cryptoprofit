
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

const anioNacimiento = prompt('Hablemos de años... 📆, en que año naciste?, ej.: 2001');
let hoy = new Date();
let year = hoy.getFullYear();
edad = year - anioNacimiento;
console.log(edad);

if (edad >= 18) {
    alert('Buenisimo, podemos seguir, sos mayor de edad, tenes ' + edad + ' años, vamos a  invertir 💰💰💰');
} else { alert('😕Lo sentimos, pero...tenes q ser mator de 18 años para invertir'); }

const riesgo = parseInt(prompt('Que tipo de inversion queres? Escribí (1) SEGURA - Bajo riesgo/estabilidad, Stablecoins / (2) MODERADA - Criptos de moderada fluctuacion y (3) ALTA - Criptos de mayor volatilidad y muy buenos reditos, pero ojo, buenas perdidas tambien'));

monto = parseInt(prompt('Qué monto monto en PESOS ($) argentinos que queres convertir a Stablecoins'));
console.log(monto);
while (monto == 0 || isNaN(monto)) {
    console.log(monto);
    monto = parseInt(prompt('Carga un valor numerico y mayor a 0'));
}
if (riesgo === 1) {
    let rinde = monto / rango[riesgo - 1];
    alert('Elegiste la seguridad, buena opcion, casi nunca se pierde! Ta tenes en tú wallet ' + 'U$DT' + rinde.toFixed(2) + ' aproximado, esta cripto, sigue el patron del dolar estadounidense');

} else if (riesgo === 2) {
    let rinde = (monto / rango[0] * rango[riesgo - 1])/100;
    dolarizado = monto/rango[0];
    alert('Elegiste una opcion mas interesante, mas riesgos, pero mayores ganancias! Ya tenes en tú wallet ' + 'U$S' + dolarizado.toFixed(2) + ' y un riesgo de +/- U$S '  + rinde.toFixed(2) +' aproximado diario');

} else if(riesgo === 3){
    let rinde = monto/rango[riesgo-1];
    alert('Elegiste la seguridad, buena opcion, casi nunca se pierde! Ta tenes en tú wallet ' + 'U$DT' + rinde.toFixed(2) +' aproximado, esta cripto, sigue el patron del dolar estadounidense');
}else{
    alert('😕Hey, no elegiste bien el tipo de riesgo, volve a iniciar la operación'); 
}



