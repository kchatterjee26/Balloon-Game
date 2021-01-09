var bg;
var blueBalloon, redBalloon, greenBalloon, pinkBalloon;
var bow;
var randomBalloon;
var score;

function preload(){
  bgImg = loadImage("background0.png");
  blueBalloon = loadImage("blue_balloon0.png");
  redBalloon = loadImage("red_balloon0.png");
  greenBalloon = loadImage("green_balloon0.png");
  pinkBalloon = loadImage("pink_balloon0.png");
  bowImg = loadImage("bow0.png");
  arrowImg = loadImage("arrow0.png");
  
}

function setup() {
   createCanvas(600, 600);
  
  //create bg
  bg = createSprite(300,300,600,600);
  bg.addImage(bgImg);
  bg.scale = 3;

  bow = createSprite(500,300,50,10);
  bow.addImage("bow0.png",bowImg);
  bow.scale = 1.5;

  score = 0;
}

function draw() {
  background("red");
  // move bg
  bg.velocityX = -4;

  bow.y = mouseY;
  
  if (bg.x < 0){
      bg.x = bg.width/2;
    }
  
  if (keyWentUp("space")) {
    var arrow = createSprite(300,300,300,300);
  arrow.addImage("arrow0.png",arrowImg);
  arrow.scale = 0.5;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  }
  
  
  spawnBlueBalloons();
  spawnRedBalloons();
  spawnGreenBalloons();
  spawnPinkBalloons();
  drawSprites();
  
}

function spawnBlueBalloons() {
 // for(var i=50;i<550;i=i+50) {  
   if (frameCount % 60 === 0) {
    var i = Math.round(random(50,550));
    blueBalloon1= createSprite(0,i);
    blueBalloon1.addImage("blue_balloon0.png",blueBalloon);
    blueBalloon1.scale = 0.1;
    blueBalloon1.velocityX = 4;
    blueBalloon1.lifetime = 150;
   }
   
  //}
}

function spawnRedBalloons() {
  // for(var i=100;i<500;i=i+50){
  if (frameCount % 60 ===0) {
    var i = Math.round(random(100,500));
  redBalloon1 = createSprite(100,i);
  redBalloon1.addImage("red_ballon0.png", redBalloon);
  redBalloon1.scale = 0.1;
  redBalloon1.velocityX = 4;
  redBalloon.lifetime = 150;
  }
}
//}

function spawnGreenBalloons() {
 // for (var i = 150;i<450;i=i+50) {
   if (frameCount % 60 === 0) {
    var i = Math.round(random(150,450));
  greenBalloon1 = createSprite(150,i);
  greenBalloon1.addImage("green_balloon0.png", greenBalloon);
  greenBalloon1.scale = 0.1;  
  greenBalloon1.velocityX = 4;
  greenBalloon1.lifetime = 150;
    }
  }
  
//}

function spawnPinkBalloons() {
  //for (var i = 200;i<400;i=i+50) {
    if (frameCount % 60 ===0) {
    var i = Math.round(random(200,400));
    pinkBalloon1 = createSprite(200,i);
    pinkBalloon1.addImage("pink_balloon0.png",pinkBalloon);
    pinkBalloon1.scale = 1.5;
    pinkBalloon1.velocityX = 4;
    pinkBalloon1.lifetime = 150;
  }
}
//}

