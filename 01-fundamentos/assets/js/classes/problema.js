const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir()  {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const peet = {
    nombre: 'Pedro',
    edad: 21

}


fer.imprimir();

function Persona( nombre, edad ) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = () => {
        console.log (`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }

}
const maria  = new Persona( 'María', 18); 
const melissa  = new Persona( 'Melissa', 19); 
maria.imprimir();
melissa.imprimir();