class Person {

    name = '';
    code = '';
    phrase = '';

    constructor( name = 'No name', code = ' No code', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    }

}

const spiderman = new Person('Peter Parker', 'Spiderman', 'I am your friendly neoghbor spiderman');;
const ironman = new Person('Tony Stark', 'Ironman', 'I am ironman');
console.log( {spiderman} );
console.log( {ironman} );