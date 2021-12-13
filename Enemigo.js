class Enemigo{
    constructor(col, fila, imgL, imgR, velocidad, vida){
        //posiciones en pixeles
        this.posX = (col * 70);
        this.posY = (fila * 70);

        //posiciones en matriz
        this.col = col;
        this.fila = fila

        //Vida del enemigo
        this.vida = vida;

        //Imagen enemigo
        this.imgL = imgL;
        this.imgR = imgR;

        this. velocidad = velocidad;

        this.img = imgL;

    }

    show(){
        this.posX = (this.col * 70 - 35);
        this.posY = (this.fila * 70 - 35);

         
        imageMode(CENTER);
        image(this.img, this.posX, this.posY - 40, 120, 120);
        


    }

    move(refMapa){
        let direction = parseInt(random(4));

        //Velocidad del enemigo
        if(frameCount % this.velocidad === 0){
            switch (direction) {

                //Izquierda
                case 0:
                    if(this.col - 1 >= 0 && refMapa.getUbication(this.fila, this.col - 1) === 0){
                            this.posX = (this.col * 70 - 35);
                            this.posY = (this.fila * 70 - 35);
                            this.col -=1;
                    }
                    this.img = this.imgL;
                    break;

                //Derecha
                case 1:
                    if(this.col + 1 < 19 && refMapa.getUbication(this.fila, this.col + 1) === 0){
                            this.posX = (this.col * 70 - 35);
                            this.posY = (this.fila * 70 - 35);
                            this.col +=1;
                    }
                    this.img = this.imgR;
                    break;

                //Arriba
                case 2:
                    if(this.fila - 1 >= 0 && refMapa.getUbication(this.fila - 1, this.col) === 0){
                            this.posX = (this.col * 70 - 35);
                            this.posY = (this.fila * 70 - 35);
                            this.fila -=1;
                    }
                    this.img = this.imgL;
                    break;
                case 3:
                        if(this.fila - 1 < 12 && refMapa.getUbication(this.fila + 1, this.col) === 0){
                            this.posX = (this.col * 70 - 35);
                            this.posY = (this.fila * 70 - 35);
                            this.fila +=1;
                    }
                    this.img = this.imgR;
                    break;
            }
        }
    }
    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    getCol(){
        return this.col;
    }

    getFila(){
        return this.fila;
    }
    getVida(){
        return this.vida;
    }

    setVida(vida){
        this.vida = vida;
    }


}