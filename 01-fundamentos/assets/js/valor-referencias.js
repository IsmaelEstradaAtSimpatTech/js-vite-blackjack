let a = 10;
let b = a;
a = 30;

console.log( { a, b});

let juan = {nombre: 'Juan' };
let ana = { ...juan};
ana.nombre = 'Ana';

console.log( { juan, ana });

// todos los primitivos se pasan por valor
// Todos los objetos se pasan por referencia.

const cambiaNombre = ( { ...persona } // spreads elements and breaks reference to object
    ) => { 
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre ( peter );

console.log( peter, tony );

// arreglos 
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
let otrasFrutas = [...frutas]; // spreads elements and breaks reference to object
console.timeEnd('spread');

otrasFrutas = frutas.slice(); // separates elements and breaks object reference

otrasFrutas.push('Mango');

console.log( { frutas, otrasFrutas } );