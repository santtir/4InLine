'use strict';
class Casillero{
    constructor(numRow, numColumn){
        this.numRow = numRow;
        this.numColumn = numColumn;
        this.ficha = null;
    }

    colocarFicha(ficha){
        this.ficha = ficha;
    }

    obtenerFicha() {
        return this.ficha;
      }

    getFicha(){
        return this.ficha;
    }

    getNumRow(){
        return this.numRow;
    }

    getNumColumn(){
        return this.numColumn;
    }

    estaVacio(){
        return this.ficha == null;
    }
/*
    getIsAvailable(){
        return this.isAvailable
    }

    setIsAvailable(){
        this.isAvailable = !this.isAvailable;
    }
*/
}

export default Casillero;
