
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  //creating ground
  ground = createSprite(200,350,900,10);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("lightblue");
  
  //movement of ground
  if(ground.x>0){
  ground.x = ground.width /2;
  }
  ground.velocityX = -4;
  console.log(ground.x);
  
  //monkey upward movement
  if(keyDown("space")&& monkey.y >= 250){
    monkey.velocityY = -12;
  }
  
  //giving gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground); 
  
  createFood();
  createObstacles();
  survivalTime(); 
  
  drawSprites();
}

function createFood(){
  if(frameCount % 80 === 0){
    food = createSprite(400,200,20,20);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -4;
    
     //assigning lifetime to the variable
    food.lifetime = 100;
    FoodGroup.add(food);
  }
}
function createObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,310,20,20);                           obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
}

function survivalTime(){
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time"+ survivalTime,100,50);
}