
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {  
  background("white");
if(keyDown("space")){
 monkey.velocityY=-10;
}
  monkey.velocityY=monkey.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2
  }
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  drawSprites();
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
}
  function spawnFood(){
    if(frameCount%80===0){
      banana=createSprite(600,200,20,20);
      banana.y=random(120,200);
      banana.addImage(bananaImage);
      banana.velocityX=-4
      banana.lifetime=300
      banana.scale=0.1;
      FoodGroup.add(banana);
    }
  }
 function spawnObstacles(){
   if(frameCount%300===0){
     obstacles=createSprite(800,350,20,20);
     obstacles.addImage(obstacleImage);
     obstacles.velocityX=-4
     obstacles.lifetime=300
     obstacles.scale=0.1;
     obstaclesGroup.add(obstacles);
     
   }
 } 








