
class Singleton{

    static instance;
    name = '';

    constructor( name = '' ) {
        if( !!Singleton.instance ) {
            Singleton.instance.name = name;
            return Singleton.instance;
        } else {
            Singleton.instance = this;
            this.name = name;
        }
    }
}

const instance1 = new Singleton('Ironman');
const instance2 = new Singleton('Spiderman');
const instance3 = new Singleton('BlackPanther');

console.log(`the name for instance1 is ${instance1.name}`)
console.log(`the name for instance2 is ${instance2.name}`)
console.log(`the name for instance3 is ${instance3.name}`)
