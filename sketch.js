var menino, meninoImg;
var floresta;
var borboleta,  borboletaImg;
var invisibleGround
var score = 0;

function preload() {
    floresta = loadImage("floresta.jpg");
    meninoImg = loadImage("menino.png");
    //borboletaImg = loadImage("boroleta.jpg");
}

function setup() {
    createCanvas(800, 400);

    menino = createSprite(200,200,20,20);
    menino.addImage(meninoImg);

    // borboleta = createSprite(250,100,20,20);
    // borboleta.addImage(borboletaImg);

    invisibleGround = createSprite(200,300,20,800);
}

function draw(){
    background(floresta);

    if(keyIsDown("space")){
        menino.veloityY = -15;
    }

    if(menino.collided(borboleta)) { 
        borboleta.visible = false;
        score =+ 1;
    }

    if(menino.collided(invisibleGround)){
        menino.positionx = 200;
        menino.positiony = 200;
    }

   
    borboleta.positionY.Math.rand(ramdom(10,400));
    borboleta.positionx.Math.rand(ramdom(10,400));
    borboleta.lifetime = 200;

    text("score: ", score);
    text.positionY = 50;
    text.positionx = 350;

}

