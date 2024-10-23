class Ficha {
    constructor(equipo){
        this.equipo = equipo;
        this.selected = false;
    }

    setSelecter(){
        this.selected = !this.selected;
    }

    draw(){
        //se dibuja
    }

    clear(){
        //se borra
    }

    esIgualA(ficha){
        return this.equipo == ficha.getEquipo();
    }
}

export default Ficha;
