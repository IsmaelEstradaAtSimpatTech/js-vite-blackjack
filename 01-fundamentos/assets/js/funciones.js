function saludar(nombre) {
    console.log( arguments );
    console.log('Hola ' + nombre);
    return 1;
} 


const saludar2 = function() {
    console.log('Hola Mundo');
    return [1,2,3,4];
}

const saludarFlecha = () => {
    console.log('Hola Mundo');    
}
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre );    
}

saludar('Pedro', 40, true, 'Saltillo');saludar('Lauro');saludar('Nadia');
let retornoDeSaludar = saludar();
console.log({ retornoDeSaludar });

saludar2();saludar2();saludar2();saludar2();
retornoDeSaludar = saludar2();
console.log({ retornoDeSaludar });

saludarFlecha();
saludarFlecha2('Joaquin');

function sumar(a, b) {
    return a + b ;
}

console.log(sumar(1, 2));

const sumar2 = (a, b) => {
    return a + b ;
}

console.log(sumar2(1, 2));

// funcion Lambda simplificada
const getAleatorio = () => Math.random();

console.log(getAleatorio());