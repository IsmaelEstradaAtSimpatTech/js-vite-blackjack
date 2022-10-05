let a = 5;

if ( a > 10 ) {
    console.log('A > 10');
} else {
    console.log('A <= 10');
}

// el programa se ejecuta hasta encontrar un error
// if ( b > 10 ) {
//     console.log('A > 10');
// } else {
//     console.log('A <= 10');
// }

const hoy = new Date();
let dia  = hoy.getDay();
console.log( { dia } );



if( dia = 1 ) { // evalua el valor asignado 
    console.log(' dia = 1: Hoy es domingo! (error)');
} else {
    console.log(' dia = 1: Hoy no es domingo (error)');
}

if( dia == "0" ) { // igualdad de valor sin considerar el tipo
    console.log('  dia == "0": Hoy es domingo!');
} else {
    console.log('  dia == "0": Hoy no es domingo');
}

if( dia === 0 ) { // igualdad de valor y tipo de datos
    console.log(' dia === 0: Hoy es domingo!');
} else if( dia === 1 ) {
        console.log(' dia === 1: Hoy es lunes!');
    } else {
        console.log('  Hoy no es domingo, ni lunes');
    }

console.log('fin de programa');