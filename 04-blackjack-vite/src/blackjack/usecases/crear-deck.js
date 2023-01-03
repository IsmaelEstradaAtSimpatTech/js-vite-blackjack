import _ from 'underscore';

/**
 * Creates a new shuffled deck
 * @param {array<string>} tiposDeCarta 
 * @param {array<string>} tiposEspeciales 
 * @returns {array}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let newDeck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            newDeck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            newDeck.push( esp + tipo);
        }
    }
    // console.log( deck );
    newDeck = _.shuffle( newDeck );
    console.log( newDeck );
    return newDeck;
}
