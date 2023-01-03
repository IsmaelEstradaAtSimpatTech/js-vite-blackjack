/**
 * Gives a card out of the provided deck
 * @param {array<string>} deck 
 * @returns {string}
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
