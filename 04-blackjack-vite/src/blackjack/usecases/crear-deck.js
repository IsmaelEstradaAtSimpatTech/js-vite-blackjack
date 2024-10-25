import _ from 'underscore';

/**
 * Creates a new shuffled deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {Array<String>} Returns a new shuffled deck
 */
export const crearDeck = () => {
    const tiposDeCarta      = ['C','D','H','S'];
    const tiposEspeciales = ['A','J','Q','K'];

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
