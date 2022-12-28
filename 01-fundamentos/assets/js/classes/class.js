class Person {

    static _counter = 0;
    static get Counter() {
        return Person._counter;
    }
    static set Counter( counter ) {
        Person._counter = counter;
    }

    static message() {
        console.log(this.name); // must print undefined as there is no object instance for this static method.
        console.log("Hello from a static method");
    }

    name = '';
    code = '';
    phrase = '';
    upperFood = '';

    constructor( name = 'No name', code = ' No code', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
        Person.Counter++;
    }

    set setUpperFood( food ) {
        this.upperFood = food.toUpperCase();
    }

    get getUpperFood() {
        return `The preferred food of ${this.code} is ${this.upperFood}`;
    }


    whoami() {
        console.log(`I am ${this.name} and my secret identity is ${this.code} `);
    }

    myPhrase() {
        console.log(`I say: ${this.phrase}`);
    }

}

class Hero extends Person {
    league = 'no league';

    constructor(name, code, phrase, league) {
        super(name, code, phrase);
        this.league = league;
    }

    whoami() {
        super.whoami();
        console.log(`and have joined the ${this.league}`)
    }
}

const spiderman = new Hero('Peter Parker', 'Spiderman', 'I am your friendly neoghbor spiderman', 'Avengers');;
const ironman = new Hero('Tony Stark', 'Ironman', 'I am ironman', 'Avengers2');
console.log( {spiderman} );
console.log( {ironman} );

spiderman.setUpperFood ='Cherry pie by aunt May';

spiderman.whoami(); spiderman.myPhrase(); 
ironman.whoami(); ironman.myPhrase();
console.log(`There are ${Person.Counter} instances of Person`);
Person.message();

//create an static property outside of class definition
Person.staticPropery = "External static property fro this class.";

console.log( Person.staticPropery );