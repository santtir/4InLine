'use strict';
import Tablero from './Tablero.js';
import Ficha from './Ficha.js';

class Juego {
    constructor(numRows, numColumns){
        console.log(`Juego creado con ${numRows} filas y ${numColumns} columnas`);
        this.tablero = new Tablero(numRows, numColumns);//dimensiones del tablero
        this.j1 = new Ficha("X");
        this.j2 = new Ficha("O");
        this.turn = this.j1;
        this.initGame();
        /**
         * isMouseDown=false
         * isMouseUp=false
         * onMouseMove
         */
    }

    initGame(){
        this.tablero.imprimirTablero();
    }

    changeTurn(){
        if(this.turn == this.j1) {
            this.turn = this.j2;
        } else if(this.turn == this.j2){
            this.turn = this.j1;
        } else
            console.log("No hay turno asignado");
    }

    getEquipoJ1(){        
        return this.j1.getEquipo();
    }

    getEquipoJ2(){
        return this.j2.getEquipo();
    }
}
export default Juego;
