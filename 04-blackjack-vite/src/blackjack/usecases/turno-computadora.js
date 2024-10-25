import { crearCartaHTML, pedirCarta } from './';
import { valorCarta } from './';

/**
 * executes the computer play
 * @param {Array<String>} deck 
 * @param {HTMLelement} puntosHTML
 * @param {HTMLelement} divCartasComputadora
 * @param {Number} puntosMinimos 
 */
export const turnoComputadora = ( deck = [], puntosHTML, divCartasComputadora, puntosMinimos ) => {

    if ( !puntosMinimos ) throw new Error('Los puntos mínimos son necesarios para el turno de computadora');
    if ( !puntosHTML ) throw new Error('puntosHTML es necesario para el turno de computadora');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
