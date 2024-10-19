class Ficha {
    constructor(color){
        this.color = color;
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
}