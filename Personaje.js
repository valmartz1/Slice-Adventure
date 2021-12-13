class Personaje{
    constructor(col, fila, imgD, imgI, imgF, imgT){
        this.posX = (col * 70) - 35;
        this.posY = (fila * 70) - 35;
        this.col = col;
        this.fila = fila;

        //imágenes del personaje
        this.imgD = imgD;
        this.imgI = imgI;
        this.imgF = imgF;
        this.imgT = imgT;

        //Crear balas
        this.bala = new Bala();

        this.direction = 2;

        this.vida = 5;

        this.balas = [];
    }
    
    showViews(imgKetchup, imgMostaza){
        
        imageMode(CENTER);
        this.showBala(imgKetchup, imgMostaza);
        switch (this.direction) {
            
            //Derecha (D)
            case 0:
                this.posX = (this.col * 70) - 35;
                this.posY = (this.fila * 70) - 35;
                image(this.imgD, this.posX, this.posY-30, 110, 110);
                break;

            //Izquierda (I)
            case 1:
                this.posX = (this.col * 70) - 35;
                this.posY = (this.fila * 70) - 35;
                image(this.imgI, this.posX, this.posY-30, 110, 110);
                break;
            
            //Frontal (F)
            case 2:
                this.posX = (this.col * 70) - 35;
                this.posY = (this.fila * 70) - 35;
                image(this.imgF, this.posX, this.posY-30, 110, 110);
                break;

            //Trasero (T)
            case 3:
                this.posX = (this.col * 70) - 35;
                this.posY = (this.fila * 70) - 35;
                image(this.imgT, this.posX, this.posY-30, 110, 110);
                break;   
        }
    }

    showVidas(imgVida, screen){
        if(screen === 2 || screen === 4 || screen === 6 || screen === 8 || screen === 10 || screen === 12){
            for (let index = 0; index < this.vida; index++) {
                image(imgVida, 70 + (index * 44), 55, 35, 35);
                
            }
        }

    }
    showBala(imgKetchup, imgMostaza){
        this.alcanceBala();
        for (let index = 0; index < this.balas.length; index++) {
            this.balas[index].show(imgKetchup, imgMostaza);
            
        }
    }

    disparar(tipoBala){

        this.balas.push(new Bala(this.posX, this.posY, this.direction, tipoBala))
        
    }

    alcanceBala(){
        if(this.balas.length > 0){
            for (let index = 0; index < this.balas.length; index++) {
                
                if(this.balas[index].getLimiteBala()){
                    this.balas.splice(index, 1);
                }
                
            }
        }
    }
    
    getCol(){
        return this.col;
    }
    getFila(){
        return this.fila;
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getVida(){
        return this.vida;
    }
    getBala(){
        return this.balas;
    }
    setCol(col){
        this.col = col;
    }
    setFila(fila){
        this.fila = fila;
    }
    setPosX(posx){
        this.posX = posx;
    }
    setPosY(posy){
        this.posY = posy;
    }
    getDirection(){
        return this.direction;
    }
    setDirection(direction){
        this.direction = direction;
    }
    setVida(vida){
        this.vida = vida;
    }

}