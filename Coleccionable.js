class Coleccionable{
    constructor(col, fila, tipoColeccionable){
        //Ubicación en Pixeles
        this.posX = (col * 70) - 35;
        this.posY = (fila * 70) - 35;

        //Ubicación en Matriz
        this.col = col;
        this.fila = fila;

        //Tipo de coleccionable
        this.tipoColeccionable = tipoColeccionable;
    }

    show(imgColeccionable){
        imageMode(CENTER)
        this.posX = (this.col * 70) - 35;
        this.posY = (this.fila * 70) - 35;
        image(imgColeccionable, this.posX, this.posY, 60, 60);
    }

    getCol(){
        return this.col;
    }
    getFila(){
        return this.fila;
    }
    getTipoColeccionable(){
        return this.tipoColeccionable;
    }
}