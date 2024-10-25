/**
 * Crea el elemento HTML imagen de una carta.
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {
    if ( !carta ) throw new Error('Falta el nombre de la carta')
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}
