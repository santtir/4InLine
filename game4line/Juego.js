class Juego {
    constructor(numRows, numColumns){
        console.log(`Juego creado con ${numRows} filas y ${numColumns} columnas`);
        this.tablero = new Tablero(numRows, numColumns);//dimensiones del tablero
        this.j1 = new Ficha("X");
        this.j2 = new Ficha("O");
        this.turn = this.j1;
    }

    play(row, column){
        if(this.tablero.colocarFicha(this.turn, row, column)){
            this.tablero.imprimirTablero();
            this.tablero.verifyWinner();
            this.changeTurn();
        } else {
            console.log('casillero ocupado');
        }
    }

    changeTurn(){
        if(this.turn == this.j1) {
            this.turn = this.j2;
        } else if(this.turn == this.j2){
            this.turn = this.j1;
        } else
            console.log("No hay turno asignado");
    }
}