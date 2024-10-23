'use strict';
import Casillero from './Casillero.js';

class Tablero {
    constructor(line){
        this.line = line;
        this.rows = line + 2;
        this.columns = line + 3;
        this.casilleros = this.initTablero();
    }

    initTablero(){ //es lo mismo que dibujarse
        const casilleros = [];
        for(let i=0; i<this.rows; i++){ //expando cantidad de casilleros X cantFilas
            casilleros[i] = [];
            for(let j=0; j<this.columns; j++){
                casilleros[i][j] = new Casillero(); //creo un casillero con numero de fila y columna
            }
        }
        return casilleros;
    }

    /**
     * isFichaDropZone(ficha){}
     */

    /**
     * metodos de dibujos de tablero -->
     */

    verifyWinner(posX, posY) {
      return (
          this.verifyHorizontal(posX, posY) || 
          this.verifyVertical(posX, posY) || 
          this.verifyDiagonalDescendente(posX, posY) || 
          this.verifyDiagonalAscendente(posX, posY)
      );
  }
/*
    verifyHorizontal(posX, posY) {
      for (let i = 0; i < this.rows; i++) {  // Recorre cada fila
          for (let j = 0; j < this.columns - 3; j++) {  // Verifica bloques de 4 columnas
              const ficha = this.obtenerCasillero(i, j).obtenerFicha();
              if (ficha && this.checkHorizontal(i, j)) {
                  console.log(`Ganador: ${ficha.color}`);
                  return true;
              }
          }
      }
      return false;
    }
*/

    verifyHorizontal(posX, posY) {
      if(posX >= (this.line - 1)){
        //hago recorrido para izq
        //checkHorizontal(posX, posY, -1)
      } else {
        if(posX <= (this.columns - this.line)){
          //recorro para derecha
          //checkHorizontal()
        }
      }
    }

    verifyVertical() {
      for (let i = 0; i < this.rows - 3; i++) {  // Verifica bloques de 4 filas
          for (let j = 0; j < this.columns; j++) {  // Recorre cada columna
              const ficha = this.obtenerCasillero(i, j).obtenerFicha();
              if (ficha && this.checkVertical(i, j)) {
                  console.log(`Ganador: ${ficha.color}`);
                  return true;
              }
          }
      }
      return false;
    }

    verifyDiagonalDescendente() {
      for (let i = 0; i < this.rows - 3; i++) {  // Recorre filas
          for (let j = 0; j < this.columns - 3; j++) {  // Recorre columnas
              const ficha = this.obtenerCasillero(i, j).obtenerFicha();
              if (ficha && this.checkDiagonalDescendente(i, j)) {
                  console.log(`Ganador: ${ficha.color}`);
                  return true;
              }
          }
      }
      return false;
    }
  
  verifyDiagonalAscendente() {
      for (let i = 3; i < this.rows; i++) {  // Recorre filas, empezando desde la cuarta
          for (let j = 0; j < this.columns - 3; j++) {  // Recorre columnas
              const ficha = this.obtenerCasillero(i, j).obtenerFicha();
              if (ficha && this.checkDiagonalAscendente(i, j)) {
                  console.log(`Ganador: ${ficha.color}`);
                  return true;
              }
          }
      }
    return false;
  }

  /*
  checkHorizontal(posX, posY) {
      return (
          this.obtenerCasillero(row, column).obtenerFicha().color ===
          this.obtenerCasillero(row, column + 1).obtenerFicha().color &&
          this.obtenerCasillero(row, column).obtenerFicha().color ===
          this.obtenerCasillero(row, column + 2).obtenerFicha().color &&
          this.obtenerCasillero(row, column).obtenerFicha().color ===
          this.obtenerCasillero(row, column + 3).obtenerFicha().color
      );
  }
*/

  checkHorizontal(posX, posY, desplazamiento){
    let cont = 0;
    let  casilleroActual = casilleros[posX][posY]; 
    while(cont < this.line && !casilleroActual.estaVacio()){
      casilleroActual = this.casilleros[posX+desplazamiento][posY];
      cont++;
    }
  }

  checkVertical(row, column) {
      return (
          this.obtenerCasillero(row, column).obtenerFicha().color ===
          this.obtenerCasillero(row + 1, column).obtenerFicha().color &&
          this.obtenerCasillero(row, column).obtenerFicha().color ===
          this.obtenerCasillero(row + 2, column).obtenerFicha().color &&
          this.obtenerCasillero(row, column).obtenerFicha().color ===
          this.obtenerCasillero(row + 3, column).obtenerFicha().color
      );
  }

  checkDiagonalDescendente(row, column) {
    return (
        this.obtenerCasillero(row, column).obtenerFicha().color ===
        this.obtenerCasillero(row + 1, column + 1).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color ===
        this.obtenerCasillero(row + 2, column + 2).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color ===
        this.obtenerCasillero(row + 3, column + 3).obtenerFicha().color
    );
  }

  checkDiagonalAscendente(row, column) {
    return (
        this.obtenerCasillero(row, column).obtenerFicha().color ===
        this.obtenerCasillero(row - 1, column + 1).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color ===
        this.obtenerCasillero(row - 2, column + 2).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color ===
        this.obtenerCasillero(row - 3, column + 3).obtenerFicha().color
    );
  }

    getCasillero(row, column){
        return this.casilleros[row][column];
    }

    //imprimir y poder verlo por consola
    imprimirTablero() {
        console.log(this.casilleros.map(fila => fila.map(casillero => {
          if (casillero.obtenerFicha() === null) {
            return '-';
          } else {
            return casillero.obtenerFicha().color;
          }
        }).join(' | ')).join('\n'));
    }

    colocarFicha(ficha, row, column){
      for(let row = this.rows - 1; row >= 0; row--){
        if(this.casilleroIsEmpty(row, column)) {
          this.casilleros[row][column].colocarFicha(ficha);
          return true;
        } 
      } return false; //columna llena
    }

    casilleroIsEmpty(row, column){
      return this.casilleros[row][column].obtenerFicha() == null;
    }

    //preguntar como se hace para devolver al casillero y ficha como objeto 

    obtenerCasillero(row, column){
      return this.casilleros[row][column].obtenerFicha();
    }
  }
  
export default Tablero;
