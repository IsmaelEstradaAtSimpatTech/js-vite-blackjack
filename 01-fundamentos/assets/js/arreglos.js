const arr = new Array(10);

let videoJuegos = ['Mario 3','Megamo','Chrono Trigger'];

console.log({ videoJuegos });

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123, 
    'Ismael',
    1+2,
    function(){},
    () => {},
    { a:1 },
    ['X','Megaman','Zero','Dr. Light',
        ['Dr. Willy','Woodman']
] 
];

console.log( arregloCosas[0] );
console.log( arregloCosas[2] );
console.log( arregloCosas[7][3] );
console.log( arregloCosas[7][4] );
console.log( arregloCosas[7][4][1] );
