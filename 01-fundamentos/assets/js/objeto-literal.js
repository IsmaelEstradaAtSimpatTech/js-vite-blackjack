let personaje = {
    nombre: 'Tony Stark',
    CodeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'

};

console.log( personaje );

console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje['edad']);
console.log('Coords', personaje.coords);
console.log('lat', personaje.coords.lat);
console.log('lng', personaje.coords.lng);
console.log('No. de Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log( 'Vivo', personaje[x] );
console.log(personaje["ultima-pelicula"]);

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

// crear key-value pairs desde un objeto
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// bloqueo de la estructura y contenido directo del objeto
// no bloquea la estructura y contenidos descendientes en 
// subobjetos.
Object.freeze( personaje );

personaje.efectivo = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";

console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades, valores );