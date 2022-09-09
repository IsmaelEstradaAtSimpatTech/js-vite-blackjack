function saludar(nombre) {
    console.log( arguments );
    console.log('Hola ' + nombre);
}


const saludar2 = function() {
    console.log('Hola Mundo');
}

const saludarFlecha = () => {
    console.log('Hola Mundo');    
}
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre );    
}

saludar('Pedro', 40, true, 'Saltillo');saludar('Lauro');saludar('Nadia');saludar();
saludar2();saludar2();saludar2();saludar2();

saludarFlecha();
saludarFlecha2('Joaquin');