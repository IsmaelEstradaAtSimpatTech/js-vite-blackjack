// first version
// function crearPersona( nombre, apellido ) {
//     return {
//         nombre,
//         apellido
//     }
// }

// second version
// function crearPersona( nombre, apellido ) {
//     return { nombre, apellido };
// }

// third version
const crearPersona = ( nombre, apellido ) => ( { nombre, apellido })
const persona = crearPersona( "Ismael", "Leija");

console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos( 10, true, false, "Ismael", "Leija");

const imprimeArgumentos2 = ( edad, ...args ) => { console.log( {edad, args} )};

imprimeArgumentos2( 10, true, false, "Ismael", "Leija2");

const Pedro = {
    "nombre" : "Pedro",
    //"edad" : 15,
    "ciudad": "Londres"
};

const imprimePropiedades = ( { nombre, edad = 10, ciudad }) => { 
    console.log( {nombre }); 
    console.log( {edad  });   
    console.log( {ciudad });
};

imprimePropiedades( Pedro );