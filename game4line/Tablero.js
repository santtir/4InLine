class Tablero {
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.casilleros = initTablero();
    }

    initTablero(){ //es lo mismo que dibujarse
        const casilleros = [];
        for(let i=0; i<this.rows; i++){ //expando cantidad de casilleros X cantFilas
            casilleros[i] = [];
            for(let j=0; j<this.columns; j++){
                casilleros[i][j] = new casilleros(i, j); //creo un casillero con numero de fila y columna
            }
        }
        return casilleros;
    }

    verifyWinner(){
      for(let i=0; i < this.rows; i++){
        for(let j=0; j < this.columns -3; j++){ //resta 3 porque necesita 4 solamente por ende no debe seguir
          if (this.tablero.obtenerCasillero(i, j).obtenerFicha() != null && verifyHorizontal(i, j)){
            console.log('Ganador el color:', this.tablero.obtenerCasillero(i, j).obtenerFicha().color);
            return
          }
        }
      }

      
      for(let i=0; i<this.rows-3; i++){
        for(let j=0; j<this.columns; j++){
          if(this.tablero.obtenerCasillero(i, j).obtenerFicha() != null && this.verifyVertical(i, j)){
            console.log('Ganador el color:', this.tablero.obtenerCasillero(i, j).obtenerFicha().color);
            return;
          }
        }
      }
    }

    verifyHorizontal(row, column) {
      return(
        this.obtenerCasillero(row, column).obtenerFicha().color == this.obtenerCasillero(row, column+1).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color == this.obtenerCasillero(row, column+2).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color == this.obtenerCasillero(row, column+3).obtenerFicha().color
      );
    }

    verifyVertical(row, column){
      return(
        this.obtenerCasillero(row, column).obtenerFicha().color == this.obtenerCasillero(row+1, column).obtenerFicha().color && 
        this.obtenerCasillero(row, column).obtenerFicha().color == this.obtenerCasillero(row+2, column).obtenerFicha().color &&
        this.obtenerCasillero(row, column).obtenerFicha().color == this.obtenerCasillero(row+3, column).obtenerFicha().color 
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
      if(this.casilleros[row][column].obtenerFicha() == null){
        this.casilleros[row][column].colocarFicha(ficha);
        return true;
      } return false;
    }

    obtenerCasillero(row, column){
      return this.casilleros[row][column];
    }
  }