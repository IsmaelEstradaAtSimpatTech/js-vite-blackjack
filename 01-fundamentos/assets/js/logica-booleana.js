const regresaTrue = ()  => {
    console.log('regresa true');
    return true;
}

const regresaFalse = ()  => {
    console.log('regresa false');
    return false;
}

console.warn('Not a la negación');
console.log( true ) // true
console.log( !true ) // false
console.log( !false ) // true
console.log( !!false ) // false

console.log( !regresaFalse() ) // true

console.log( 'And' ); // true solo si todos los argumentos son verdaderos
console.log( !false && true ) // true
console.log( !true && true ) // false

console.log( '---- ejecución económica ---' ) // true
console.log( regresaFalse() && regresaTrue() ) // false ; solo ejecuta hasta encontrar el primer falso
console.log( regresaTrue() && regresaFalse() ) // false ; solo ejecuta hasta encontrar el primer falso

console.log( '===== OR =====' ); // true si por lo menos uno de  los argumentos es verdadero
console.log( !false || true ) // true
console.log( !true || true ) // true

console.log( '---- ejecución económica ---' ) // true
console.log( regresaFalse() || regresaTrue() ) // true
console.log( regresaTrue() || regresaFalse() ) // true




