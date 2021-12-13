class Bala {
    constructor(posX, posY, direction, tipoArma){
        this.posX = posX;
        this.posY = posY;
        this.posXInicial = posX;
        this.posYInivial = posY;
        this.direction = direction;
        this.tipoArma = tipoArma;
        this.limiteBala = false;
        this.limite;
        this.velocidadKetchup = 6;
        this.velocidadMostaza = 3;
        this.rangoKetchup = 500;
        this.rangoMostaza = 300;
    }

    show(imgKetchup, imgMostaza){
      
        switch (this.direction) {
            case 0:
                if(this.tipoArma === 0){

                    this.posX += this.velocidadKetchup;
                    push();
                    imageMode(CENTER);
                    angleMode(DEGREES);
                    rotate(0);
                    image(imgKetchup, this.posX, this.posY, 50, 50);
                    pop();
                    this.limite = this.posXInicial + this.rangoKetchup;
                    if(this.posX >= this.limite){
                        this.limiteBala = true;
                    }
                }

                if(this.tipoArma === 1){

                    this.posX += this.velocidadMostaza;
                    push();
                    angleMode(DEGREES);
                    rotate(0);
                    image(imgMostaza, this.posX, this.posY, 50, 50);
                    pop();
                    this.limite = this.posXInicial + this.rangoMostaza;
                    if(this.posX >= this.limite){
                        this.limiteBala = true;
                    }
                }
                
                break;

            case 1:
                if(this.tipoArma === 0){

                    this.posX -= this.velocidadKetchup;
                    push();
                    angleMode(DEGREES);
                    rotate(180);
                    image(imgKetchup, -this.posX, -this.posY, 50, 50);
                    pop();
                    this.limite = this.posXInicial - this.rangoKetchup;
                    if(this.posX <= this.limite){
                        this.limiteBala = true;
                    }
                }

                if(this.tipoArma === 1){

                    this.posX -= this.velocidadMostaza;
                    push();
                    angleMode(DEGREES);
                    rotate(180);
                    image(imgMostaza, -this.posX, -this.posY, 50, 50);
                    pop();
                    this.limite = this.posXInicial - this.rangoMostaza;
                    if(this.posX <= this.limite){
                        this.limiteBala = true;
                    }
                }
                
                break;
            
            case 2:
                if(this.tipoArma === 0){
    
                    this.posY += this.velocidadKetchup;
                    push();
                    angleMode(DEGREES);
                    rotate(90);
                    image(imgKetchup, this.posY, -this.posX, 50, 50);
                    pop();
                    this.limite = this.posYInicial + this.rangoKetchup;
                    if(this.posY >= this.limite){
                        this.limiteBala = true;
                    }
                }
                
                if(this.tipoArma === 1){
    
                    this.posY += this.velocidadMostaza;
                    push();
                    angleMode(DEGREES);
                    rotate(90);
                    image(imgMostaza, this.posY, -this.posX, 50, 50);
                    pop();
                    this.limite = this.posYInicial + this.rangoMostaza;
                    if(this.posY >= this.limite){
                        this.limiteBala = true;
                    }
                }
                break;

            case 3:
                    
                 if(this.tipoArma === 0){
    
                    this.posY -= this.velocidadKetchup;
                    push();
                    angleMode(DEGREES);
                    rotate(270);
                    image(imgKetchup, -this.posY, this.posX, 50, 50);
                    pop();
                     this.limite = this.posYInicial - this.rangoKetchup;
                     if(this.posY <= this.limite){
                            this.limiteBala = true;
                     }
                 }
                 if(this.tipoArma === 1){
    
                    this.posY -= this.velocidadMostaza;
                    push();
                    angleMode(DEGREES);
                    rotate(270);
                    image(imgMostaza, -this.posY, this.posX, 50, 50);
                    pop();
                     this.limite = this.posYInicial - this.rangoMostaza;
                     if(this.posY <= this.limite){
                            this.limiteBala = true;
                     }
                 }
                    
                break;
        
        }
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getLimiteBala(){
        return this.limiteBala
    }

}