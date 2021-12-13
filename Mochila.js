class Mochila{
    constructor(){
        this.tomatesAtrapados = [];
        this.quesosAtrapados = [];
    }

    show(){
        fill(220);
        textSize(25);
        textAlign(CENTER);
        text(" " + this.tomatesAtrapados.length, 1036, 85);
        text(" " + this.quesosAtrapados.length, 1110, 85);
    }

    atraparTomates(tomate){
        this.tomatesAtrapados.push(tomate);
    }

    atraparQuesos(quesos){
        this.quesosAtrapados.push(quesos);
    }
}