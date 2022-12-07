var navio,navioImg

var mar,marImg

function preload(){
navioImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

marImg=loadImage("sea2.png");
}

function setup(){
  createCanvas(400,400);
  navio=createSprite(300,200,20,20);
  navio.addAnimation("navegaçao",navioImg);
  navio.depth=3
  navio.scale=0.25
  mar=createSprite(350,200,100,40);
  mar.addImage("ondas",marImg);
  mar.depth=1
  mar.scale=0.25
 
}

function draw() {
  background("blue");
  mar.velocityX=-5;
  if (mar.x < -592 ){
    mar.x=0;

  }










    drawSprites();

 
}
