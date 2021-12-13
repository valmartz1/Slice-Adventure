class Arma {
    constructor(tipoArma, imgTipoArma1, imgTipoArma2){
        this.imgTipoArma1 = imgTipoArma1;
        this.imgTipoArma2 = imgTipoArma2;

        this.tipoArma = tipoArma;
    }

    
    armaSeleccionada(){
        switch (this.tipoArma) {
            case 0:
                imageMode(CENTER);
                image(this.imgTipoArma1, 150, 610, 300, 150);
                break;

             case 1:
                imageMode(CENTER);
                image(this.imgTipoArma2, 150, 610, 300, 150);
                break;
        
        }
    }

    getTipoArma(){
        return this.tipoArma;
    }

    setTipoArma(tipoArma){
        this.tipoArma = tipoArma;
    }
}