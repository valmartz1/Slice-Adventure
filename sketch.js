let mapa;
let screen;
//Variable de personaje
let personaje;

//Variavle de Enemigos
let enemigosNivel1 = [];
let enemigosNivel2 = [];
let enemigosNivel3 = [];
let enemigosNivel4 = [];
let enemigosNivel5 = [];
let enemigosNivel6 = [];

//Variable arma seleccionada
let arma;

//Variable vida
let vida;

//Variable bala
let balas = [];

//Variable bala (IMAGENES)
let imgKetchup;
let imgMostaza;

//Variables de Backgrounds (IMAGENES)
let imgBackground1;
let imgBackground2;
let imgBackground3;
let imgBackground4;

//Variables de niveles (IMAGENES)
let imgNivel1;
let imgNivel2;
let imgNivel3;
let imgNivel4;
let imgNivel5;
let imgNivel6;

//Variables de Backgrounds RETOS (IMAGENES)
let imgReto1;
let imgReto2;
let imgReto3;
let imgReto4;
let imgReto5;
let imgReto6;

//Variables de vistas de personaje (IMAGENES)
let imgPersonajeDerecha;
let imgPersonajeIzquierda;
let imgPersonajeFrontal;
let imgPersonajeTrasero;

//VariaBles de enemigo (IMAGENES)
let imgPrimerEnemigoL;
let imgPrimerEnemigoR;

let imgSegundoEnemigoL;
let imgSegundoEnemigoR;

let imgTercerEnemigoL;
let imgTercerEnemigoR;

let imgCuartoEnemigoL;
let imgCuartoEnemigoR;

//Variables de arma seleccionada (IMAGENES)
let imgArmaSeleccionada1;
let imgArmaSeleccionada2;

//Variable de vida (IMAGEN)
let imgVida;

//Cooldaown para disparar
let coolDownKetchup = 0;
let coolDownMostaza = 0;

//Variables de coleccionables
let tomatesNivel1 = [];
let quesosNivel1 = [];

let tomatesNivel2 = [];
let quesosNivel2 = [];

let tomatesNivel3 = [];
let quesosNivel3 = [];

let tomatesNivel4 = [];
let quesosNivel4 = [];

let tomatesNivel5 = [];
let quesosNivel5 = [];

let tomatesNivel6 = [];
let quesosNivel6 = [];

//Variables de coleccionable (IMAGENES)
let imgTomate;
let imgQueso;

//Mochila
let mochila;


//Cargar imagenes
function loadImages(){
  //Background
  imgBackground1 = loadImage('img/Background1.jpg');
  imgBackground2 = loadImage('img/Background2.jpg');
  imgBackground3 = loadImage('img/Background3.jpg');
  imgBackground4 = loadImage('img/Background4.jpg');

  //Niveles
  imgNivel1 = loadImage('img/Nivel1.jpg');
  imgNivel2 = loadImage('img/Nivel2.jpg');
  imgNivel3 = loadImage('img/Nivel3.jpg');
  imgNivel4 = loadImage('img/Nivel4.jpg');
  imgNivel5 = loadImage('img/Nivel5.jpg');
  imgNivel6 = loadImage('img/Nivel6.jpg');

  //Vistas personaje
  imgPersonajeDerecha = loadImage('img/PersonajeDerecha.png');
  imgPersonajeIzquierda = loadImage('img/PersonajeIzquierda.png');
  imgPersonajeFrontal = loadImage('img/PersonajeFrontal.png');
  imgPersonajeTrasero = loadImage('img/PersonajeTrasero.png');
  
  //Enemigos
  imgPrimerEnemigoL = loadImage('img/PrimerEnemigoL.png');
  imgPrimerEnemigoR = loadImage('img/PrimerEnemigoR.png');

  imgSegundoEnemigoL = loadImage('img/SegundoEnemigoL.png');
  imgSegundoEnemigoR = loadImage('img/SegundoEnemigoR.png');

  imgTercerEnemigoL = loadImage('img/TercerEnemigoL.png');
  imgTercerEnemigoR = loadImage('img/TercerEnemigoR.png');

  imgCuartoEnemigoL = loadImage('img/CuartoEnemigoL.png');
  imgCuartoEnemigoR = loadImage('img/CuartoEnemigoR.png');

  //Arma seleccionada
  imgArmaSeleccionada1 = loadImage('img/ArmaSeleccionada1.png');
  imgArmaSeleccionada2 = loadImage('img/ArmaSeleccionada2.png')

  //Vida
  imgVida = loadImage('img/Vida.png');

  //Ketchup
  imgKetchup = loadImage('img/Ketchup.png');
  imgMostaza = loadImage('img/Mostaza.png');

  //RETOS
  imgReto1 = loadImage('img/Reto1.jpg');
  imgReto2 = loadImage('img/Reto2.jpg');
  imgReto3 = loadImage('img/Reto3.jpg');
  imgReto4 = loadImage('img/Reto4.jpg');
  imgReto5 = loadImage('img/Reto5.jpg');
  imgReto6 = loadImage('img/Reto6.jpg');

  //Coleccionables
  imgTomate = loadImage('img/Tomate.png');
  imgQueso = loadImage('img/Queso.png');
  
}

function setup() {
  createCanvas(1200, 700);

  //Pantalla inicial
  screen = 0;

  //Cargar imágenes
  loadImages();

  //Mapa
  mapa = new Mapa();
  mapa.crearGround();

  //Personaje
  personaje = new Personaje(1, 6, imgPersonajeDerecha, imgPersonajeIzquierda, imgPersonajeFrontal, imgPersonajeTrasero);
  vida = 60;

  //Mochila
  mochila = new Mochila();

  //Primer Nivel
  enemigosNivel1.push(new Enemigo(17, 3, imgPrimerEnemigoL, imgPrimerEnemigoR, 70, 2));
  enemigosNivel1.push(new Enemigo(17, 9, imgPrimerEnemigoL, imgPrimerEnemigoR, 70, 2));

  //Segundo Nivel
  enemigosNivel2.push(new Enemigo(17, 3, imgPrimerEnemigoL, imgPrimerEnemigoR, 70, 2));
  enemigosNivel2.push(new Enemigo(17, 9, imgPrimerEnemigoL, imgPrimerEnemigoR, 70, 2));
  enemigosNivel2.push(new Enemigo(17, 6, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));

  //Tercer Nivel
  enemigosNivel3.push(new Enemigo(17, 3, imgPrimerEnemigoL, imgPrimerEnemigoR, 70, 2));
  enemigosNivel3.push(new Enemigo(17, 10, imgPrimerEnemigoL, imgPrimerEnemigoR, 70, 2));
  enemigosNivel3.push(new Enemigo(14, 4, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));
  enemigosNivel3.push(new Enemigo(14, 8, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));

  //Cuarto nivel
  enemigosNivel4.push(new Enemigo(17, 4, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));
  enemigosNivel4.push(new Enemigo(17, 8, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));
  enemigosNivel4.push(new Enemigo(12, 1, imgTercerEnemigoL, imgTercerEnemigoR, 20, 4));

  //Quinto nivel
  enemigosNivel5.push(new Enemigo(17, 2, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));
  enemigosNivel5.push(new Enemigo(17, 9, imgSegundoEnemigoL, imgSegundoEnemigoR, 30, 3));
  enemigosNivel5.push(new Enemigo(10, 2, imgTercerEnemigoL, imgTercerEnemigoR, 20, 4));
  enemigosNivel5.push(new Enemigo(14, 8, imgTercerEnemigoL, imgTercerEnemigoR, 20, 4));

  //Sexto nivel
  enemigosNivel6.push(new Enemigo(17, 2, imgTercerEnemigoL, imgTercerEnemigoR, 20, 4));
  enemigosNivel6.push(new Enemigo(17, 10, imgTercerEnemigoL, imgTercerEnemigoR, 20, 4));
  enemigosNivel6.push(new Enemigo(15, 3, imgCuartoEnemigoL, imgCuartoEnemigoR, 20, 5));
  enemigosNivel6.push(new Enemigo(11, 10, imgCuartoEnemigoL, imgCuartoEnemigoR, 20, 5));


  //Arma seleccionada
  arma = new Arma(0, imgArmaSeleccionada1, imgArmaSeleccionada2);

  //Elementos coleccionables
  //Primer nivel
  tomatesNivel1.push(new Coleccionable(7, 10, 0));
  tomatesNivel1.push(new Coleccionable(12, 4, 0));
  quesosNivel1.push(new Coleccionable(4, 4, 1));
  quesosNivel1.push(new Coleccionable(15, 9, 1));

  //Segundo nivel
  tomatesNivel2.push(new Coleccionable(4, 5, 0));
  tomatesNivel2.push(new Coleccionable(13, 8, 0));
  quesosNivel2.push(new Coleccionable(13, 4, 1));
  quesosNivel2.push(new Coleccionable(3, 9, 1));

  //Tercer nivel
  tomatesNivel3.push(new Coleccionable(4, 3, 0));
  tomatesNivel3.push(new Coleccionable(10, 6, 0));
  quesosNivel3.push(new Coleccionable(13, 4, 1));
  quesosNivel3.push(new Coleccionable(8, 3, 1));

  //Cuarto nivel
  tomatesNivel4.push(new Coleccionable(8, 1, 0));
  tomatesNivel4.push(new Coleccionable(13, 8, 0));
  quesosNivel4.push(new Coleccionable(17, 4, 1));
  quesosNivel4.push(new Coleccionable(4, 8, 1));

  //Quinto nivel
  tomatesNivel5.push(new Coleccionable(8, 6, 0));
  tomatesNivel5.push(new Coleccionable(17, 9, 0));
  quesosNivel5.push(new Coleccionable(13, 4, 1));
  quesosNivel5.push(new Coleccionable(3, 4, 1));

  //Sexto nivel
  tomatesNivel6.push(new Coleccionable(4, 5, 0));
  tomatesNivel6.push(new Coleccionable(13, 3, 0));
  quesosNivel6.push(new Coleccionable(13, 6, 1));
  quesosNivel6.push(new Coleccionable(3, 7, 1));


}

function draw() {
  background(150);
  mapa.show();
  if(coolDownKetchup < 30){
    coolDownKetchup ++;
  }
  if(coolDownMostaza < 15){
    coolDownMostaza ++;
  }
  switch(screen){

    //Pantalla de inicio
    case 0:
      image(imgBackground1, 0, 0, 1200, 700);
      break;

    //Pantalla de instrucciones
    case 1:
      image(imgBackground2, 0, 0, 1200, 700);
      
      break;
      

    ///////////////////////////////////////////////////////PRIMER NIVEL
    case 2:

      //Mapa
      imageMode(CORNER);
      mapa.obstacleUbication(0);
      image(imgNivel1, 0, 0, 1200, 700);
      //Enemigos
      for (let index = 0; index < enemigosNivel1.length; index++) {
        enemigosNivel1[index].show();
        enemigosNivel1[index].move(mapa);

      }
      validarDaño(enemigosNivel1, personaje);
      
      for (let index = 0; index < tomatesNivel1.length; index++) {
        tomatesNivel1[index].show(imgTomate);
      }
      for (let index = 0; index < quesosNivel1.length; index++) {
        quesosNivel1[index].show(imgQueso);
      }
      //Personaje
      personaje.showViews(imgKetchup, imgMostaza);
      validarImpacto(enemigosNivel1, personaje.getBala());

      atraparColeccionables(tomatesNivel1, personaje);
      atraparColeccionables(quesosNivel1, personaje);
      if(enemigosNivel1.length <= 0){
        screen = 3;
      }

      arma.armaSeleccionada();
      imageMode(CORNER);
      
      break;

    case 3:
      image(imgReto1, 0, 0, 1200, 700);

      break;

    ///////////////////////////////////////////////////////SEGUNDO NIVEL
    case 4:
      //Mapa
      imageMode(CORNER);
      mapa.obstacleUbication(1);
      image(imgNivel2, 0, 0, 1200, 700);
      //Enemigos
      for (let index = 0; index < enemigosNivel2.length; index++) {
        enemigosNivel2[index].show();
        enemigosNivel2[index].move(mapa);

      }
      validarDaño(enemigosNivel2, personaje);
      for (let index = 0; index < tomatesNivel2.length; index++) {
        tomatesNivel2[index].show(imgTomate);
      }
      for (let index = 0; index < quesosNivel2.length; index++) {
        quesosNivel2[index].show(imgQueso);
      }
      atraparColeccionables(tomatesNivel2, personaje);
      atraparColeccionables(quesosNivel2, personaje);
      //Personaje
      personaje.showViews(imgKetchup, imgMostaza);
      validarImpacto(enemigosNivel2, personaje.getBala());

      if(enemigosNivel2.length <= 0){
        screen = 5;
      }

      arma.armaSeleccionada();
      imageMode(CORNER);
      break;

    case 5:
      image(imgReto2, 0, 0, 1200, 700);
      break;
    ///////////////////////////////////////////////////////TERCER NIVEL
    case 6:
      //Mapa
      imageMode(CORNER);
      mapa.obstacleUbication(2);
      image(imgNivel3, 0, 0, 1200, 700);
      //Enemigos
      for (let index = 0; index < enemigosNivel3.length; index++) {
        enemigosNivel3[index].show();
        enemigosNivel3[index].move(mapa);

      }
      validarDaño(enemigosNivel3, personaje);
      for (let index = 0; index < tomatesNivel3.length; index++) {
        tomatesNivel3[index].show(imgTomate);
      }
      for (let index = 0; index < quesosNivel3.length; index++) {
        quesosNivel3[index].show(imgQueso);
      }
      atraparColeccionables(tomatesNivel3, personaje);
      atraparColeccionables(quesosNivel3, personaje);

      //Personaje
      personaje.showViews(imgKetchup, imgMostaza);
      validarImpacto(enemigosNivel3, personaje.getBala());

      if(enemigosNivel3.length <= 0){
        screen = 7;
      }

      arma.armaSeleccionada();
      imageMode(CORNER);
      break;

    case 7:
      image(imgReto3, 0, 0, 1200, 700);
      break;
    ///////////////////////////////////////////////////////CUARTO NIVEL
    case 8:
      //Mapa
      imageMode(CORNER);
      mapa.obstacleUbication(3);
      image(imgNivel4, 0, 0, 1200, 700);
      //Enemigos
      for (let index = 0; index < enemigosNivel4.length; index++) {
        enemigosNivel4[index].show();
        enemigosNivel4[index].move(mapa);

      }
      validarDaño(enemigosNivel4, personaje);
      for (let index = 0; index < tomatesNivel4.length; index++) {
        tomatesNivel4[index].show(imgTomate);
      }
      for (let index = 0; index < quesosNivel4.length; index++) {
        quesosNivel4[index].show(imgQueso);
      }
      atraparColeccionables(tomatesNivel4, personaje);
      atraparColeccionables(quesosNivel4, personaje);
      //Personaje
      personaje.showViews(imgKetchup, imgMostaza);
      validarImpacto(enemigosNivel4, personaje.getBala());

      if(enemigosNivel4.length <= 0){
        screen = 9;
      }

      arma.armaSeleccionada();
      imageMode(CORNER);
      break;

    case 9:
      image(imgReto4, 0, 0, 1200, 700);
      break;
    ///////////////////////////////////////////////////////QUINTO NIVEL
    case 10:
      //Mapa
      imageMode(CORNER);
      mapa.obstacleUbication(4);
      image(imgNivel5, 0, 0, 1200, 700);
      //Enemigos
      for (let index = 0; index < enemigosNivel5.length; index++) {
        enemigosNivel5[index].show();
        enemigosNivel5[index].move(mapa);

      }
      validarDaño(enemigosNivel5, personaje);
      for (let index = 0; index < tomatesNivel5.length; index++) {
        tomatesNivel5[index].show(imgTomate);
      }
      for (let index = 0; index < quesosNivel5.length; index++) {
        quesosNivel5[index].show(imgQueso);
      }
      atraparColeccionables(tomatesNivel5, personaje);
      atraparColeccionables(quesosNivel5, personaje);
      //Personaje
      personaje.showViews(imgKetchup, imgMostaza);
      validarImpacto(enemigosNivel5, personaje.getBala());

      if(enemigosNivel5.length <= 0){
        screen = 11;
      }

      arma.armaSeleccionada();
      imageMode(CORNER);
      break;

    case 11:
      image(imgReto5, 0, 0, 1200, 700);
      break;
    ///////////////////////////////////////////////////////SEXTO NIVEL
    case 12:
      //Mapa
      imageMode(CORNER);
      mapa.obstacleUbication(5);
      image(imgNivel6, 0, 0, 1200, 700);
      //Enemigos
      for (let index = 0; index < enemigosNivel6.length; index++) {
        enemigosNivel6[index].show();
        enemigosNivel6[index].move(mapa);

      }
      validarDaño(enemigosNivel6, personaje);
      for (let index = 0; index < tomatesNivel6.length; index++) {
        tomatesNivel6[index].show(imgTomate);
      }
      for (let index = 0; index < quesosNivel6.length; index++) {
        quesosNivel6[index].show(imgQueso);
      }
      atraparColeccionables(tomatesNivel6, personaje);
      atraparColeccionables(quesosNivel6, personaje);
      //Personaje
      personaje.showViews(imgKetchup, imgMostaza);
      validarImpacto(enemigosNivel6, personaje.getBala());

      if(enemigosNivel6.length <= 0){
        screen = 13;
      }

      arma.armaSeleccionada();
      imageMode(CORNER);
      break;

      case 13:
        image(imgReto6, 0, 0, 1200, 700);
        break;

      case 14:
        image(imgBackground3, 0, 0, 1200, 700);
        
        break;
      case 15:
        image(imgBackground4, 0, 0, 1200, 700);
        break;

  }
  personaje.showVidas(imgVida, screen);
  showMochila();
  
}

//Daño que ocaciona el enemigo en el personaje
function validarDaño(enemigos, personaje){

  if(vida > 0){
    vida -= 1;
  }
  for (let index = 0; index < enemigos.length; index++) {
    
    let enemigoPosX = enemigos[index].getPosX();
    let enemigoPosY = enemigos[index].getPosY();

    if((dist(personaje.getPosX(), personaje.getPosY(), enemigoPosX, enemigoPosY) < 70) && vida === 0){
      personaje.setVida(personaje.getVida() - 1);
      vida = 60;

      if(personaje.getVida() === 0){
        screen = 14;
      }
    }
    
  }
}

//Daño ocacionado por las balas
function validarImpacto(enemigos, balas){
  for (let index = 0; index < enemigos.length; index++) {
    const enemigo = enemigos[index];
    let enemigoX = enemigo.getPosX();
    let enemigoY = enemigo.getPosY();
    for (let i = 0; i < balas.length; i++) {
      const bala = balas[i];
      let balaX = bala.getPosX();
      let balaY = bala.getPosY();

      if((dist(balaX, balaY, enemigoX, enemigoY) < 70)){
        enemigo.setVida(enemigo.getVida() - 1);
        balas.splice(i, 1);

        if(enemigo.getVida() === 0 || enemigo.getVida() < 0){
          enemigos.splice(index, 1);
        }
      }
    }
  }
}

function atraparColeccionables(coleccionable, personaje){
  for (let index = 0; index < coleccionable.length; index++) {
    
    let coleccionableCol = coleccionable[index].getCol();
    let coleccionableFila = coleccionable[index].getFila();
    
    let personajeCol = personaje.getCol();
    let personajeFila = personaje.getFila();

    if(coleccionableCol === personajeCol && coleccionableFila === personajeFila){
      let eliminarColeccionable = coleccionable.splice(index, 1);
      if(eliminarColeccionable[0].getTipoColeccionable() === 0){
        mochila.atraparTomates(eliminarColeccionable.pop());
      }else{
        mochila.atraparQuesos(eliminarColeccionable.pop());
      }
    }
  }
}

function showMochila(){
  if(screen === 2 || screen === 4 || screen === 6 || screen === 8 || screen === 10 || screen === 12){
    mochila.show();
  }
}

function keyPressed(){
  switch (key) {
    case 'a':
    case 'A':
      if(personaje.getCol() - 1 >= 0){
        if (mapa.getUbication(personaje.getFila(), personaje.getCol() - 1) === 0) {
          personaje.setCol(personaje.getCol() - 1);
          personaje.setDirection(1);
        }
      }
      
      break;
    case 'd':
    case 'D':
      if(personaje.getCol() + 1 < 19){
        if (mapa.getUbication(personaje.getFila(), personaje.getCol() + 1) === 0) {
          personaje.setCol(personaje.getCol() + 1);
          personaje.setDirection(0);
        }
      }
      break;

    case 'w':
    case 'W':
      if(personaje.getFila() - 1 >= 0){
        if (mapa.getUbication(personaje.getFila() - 1, personaje.getCol()) === 0) {
          personaje.setFila(personaje.getFila() - 1);
          personaje.setDirection(3);
        }
      }
      
      break;
    case 's':
    case 'S':
      if(personaje.getFila() + 1 < 12){
        if (mapa.getUbication(personaje.getFila() + 1, personaje.getCol()) === 0) {
          personaje.setFila(personaje.getFila() + 1);
          personaje.setDirection(2);
        }
      }
      break;


      //Arma seleccionada
      case 'R':
      case 'r':
        if(arma.getTipoArma() === 0){
          arma.setTipoArma(1);
        }else if(arma.getTipoArma() === 1){
          arma.setTipoArma(0);
        }
        break;

      //Disparar
      case 'v':
      case 'V':
        if(arma.getTipoArma() === 0 && coolDownKetchup === 30){
          personaje.disparar(arma.getTipoArma());
          coolDownKetchup = 0;
        }else if(arma.getTipoArma() === 1 && coolDownMostaza === 15){
          personaje.disparar(arma.getTipoArma());
          coolDownMostaza = 0;
        }
        
        


        break;
  }
}

function mousePressed(){
  switch (screen) {
    case 0:
      //Botón para iniciar el juego
      if(mouseX > 311 && mouseX < 311 + 234 &&
        mouseY > 512 && mouseY < 512 + 63){
          screen = 2;
        }
    
      //botón para abrir las instrucciones
      if(mouseX > 655 && mouseX < 655 + 234 &&
        mouseY > 512 && mouseY < 512 + 63){
          screen = 1;
        }
        
      break;
    
    case 1:
    //Botón volver al Inicio
      if(mouseX > 475 && mouseX < 475 + 235 &&
        mouseY > 539 && mouseY < 539 + 53){
          screen = 0;
      }
      break;
    
    case 3:
    //Opción correcta de RETO1

      if(mouseX > 700 && mouseX < 700 + 350 &&
        mouseY > 234 && mouseY < 234 + 194){

          
          screen = 4;
          personaje.setCol(1);
          personaje.setFila(6);
          

      }
      break;

    //Opción correcta de RETO2
    case 5:
      if(mouseX > 610 && mouseX < 610 + 233 &&
       mouseY > 441 && mouseY < 441 + 55){
        screen = 6;
        personaje.setCol(1);
        personaje.setFila(6);
    }
      break;

    //Opción correcta de RETO3
    case 7:
      if(mouseX > 223 && mouseX < 223 + 322 &&
        mouseY > 368 && mouseY < 368 + 91){
        screen = 8;
        personaje.setCol(1);
        personaje.setFila(6);
    }
      break;

    //Opción correcta de RETO4
    case 9:
      if(mouseX > 155 && mouseX < 155 + 350 &&
        mouseY > 183 && mouseY < 183 + 195){
        screen = 10;
        personaje.setCol(1);
        personaje.setFila(6);
    }
      break;

    //Opción correcta de RETO5
    case 11:
      if(mouseX > 266 && mouseX < 266 + 650 &&
        mouseY > 564 && mouseY < 564 + 92){
        screen = 12;
        personaje.setCol(1);
        personaje.setFila(6);
    }
      break;

    
    //Opción correcta de RETO5
    case 13:
      if(mouseX > 728 && mouseX < 728 + 390 &&
        mouseY > 280 && mouseY < 280 + 90){
        screen = 15;
        personaje.setCol(1);
        personaje.setFila(6);
    }
      break;

    //Reiniciar juego
    case 14:
      if(mouseX > 472 && mouseX < 472 + 250 &&
        mouseY > 612 && mouseY < 612 + 60){
        screen = 0;
        personaje.setCol(1);
        personaje.setFila(6);

      }
      break;
    }
      
  }