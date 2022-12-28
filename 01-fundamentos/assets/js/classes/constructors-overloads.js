class Person {

    static newByObject( { name, lastName, country }) {
        return new Person( name, lastName, country );
    }

    static newByStrings ( name, lastName, country ) {
        return new Person( name, lastName, country );
    }

    name = '';
    lastName = '';
    country = '';

    constructor( name, lastName, country) {
       this.name = name;
       this.lastName = lastName;
       this.country = country;
    }

    getInfo() {
        console.log(`Person info: name - ${this.name}, lastName - ${this.lastName}, country - ${this.country} `);
    }
}

const name1 = 'Melissa',
      lastname1 = 'Flores',
      country1 = 'Honduras';

const Fher = {
    name: 'Fernando',
    lastName: 'Herrera',
    country: 'Costa Rica'
};

const persona1 = Person.newByStrings( name1, lastname1, country1 );
const persona2 = Person.newByObject(Fher);

persona1.getInfo();
persona2.getInfo();