
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score;
var ground;
var gameState
var END=1
var PLAY=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");      
 
}



function setup() {
monkey=createSprite(100,510,30,20);
monkey.addAnimation("run",monkey_running);
monkey.scale=0.2;
  
  
ground=createSprite(300,550,600,10);
ground.x = ground.width /2;
  
FoodGroup=new Group();
ObstacleGroup=new Group();
score=0;
}




  
function draw(){
createCanvas(600,600);
  background("cyan");                                                   
  
  ground.velocityX=-4;
  
if(keyDown("space")){
monkey.velocityY=-20; 
}
   
monkey.velocityY=monkey.velocityY+1;
spawnBanana();
spawnObstacles();
score = score + Math.round(getFrameRate()/60);
 
 if (ground.x < 298){
      ground.x = ground.width/2;
    } 
 if(ObstacleGroup.isTouching(monkey)){
gameState=END 
}
 
 
  
 monkey.collide(ground);
  
 

  
text("Survival Time:"+score,400,100);

  
  drawSprites();

  
 
  
  
}

   



function spawnBanana(){
if(frameCount% 80 === 0){
banana=createSprite(600,50,30,20);
banana.addImage(bananaImage);
banana.scale=0.15;
banana.y=Math.round(random(200,300));
banana.velocityX=-5;
FoodGroup.add(banana);
banana.lifetime=120;
}
}
  
function spawnObstacles(){
if(frameCount% 300 === 0){
obstacle=createSprite(600,500,30,20);
obstacle.addImage(obstacleImage);
obstacle.scale=0.3;
obstacle.velocityX=-5;
ObstacleGroup.add(obstacle);
obstacle.lifetime=120;
}
}






