'use strict';
import Juego from './Juego.js';

const juego = new Juego(6, 7);

// Jugar en la fila 0, columna 0
juego.play(0, 0);

// Jugar en la fila 1, columna 1
juego.play(1, 1);

juego.play(3, 1);

juego.play(1, 2);

juego.play(0, 5);

juego.play(1, 4);