var player , PlayerRunning;
var apple ,appleImage, obstacle, obstacleImage,doughnut,doughnutImage;
var obstacleImage2,obstacleImage3;
var obstacle2,obstacle3;
var FoodGroup, obstacleGroup, collide;
var score = 0;
var background_image;
var gamestate = 1;

function preload(){
  
  
  PlayerRunning =loadImage("Images/download (4).png");
  
  appleImage = loadImage("Images/image.png");
  doughnutImage = loadImage("Images/images.png");
  obstacleImage = loadImage("Images/download(2).png");
  obstacleImage2 = loadImage("Images/download(3).png");
  obstacleImage3 = loadImage("Images/download.png");
 
}



function setup() {
  
  createCanvas(displayWidth, displayHeight-75);
  
  player = createSprite(50,385,30,30);
  player.addAnimation("running",PlayerRunning);
  
  ground = createSprite(displayWidth/2,displayHeight-150,3*displayWidth,20);
  ground.velocityX=-4;
  ground.shapeColor = "green";
  
  obstacleGroup=new Group ();
  FoodGroup=new Group();
}


function draw() {
  background("red");
  
  if (ground.x<-200) {
    ground.x=500; 
  }
  player.velocityY=player.velocityY+0.5;
  player.collide(ground);
  
  if( keyDown("space")&& player.y>height-70) {
   player.velocityY=-10; 
  }
  
  text("Score : "+score,10,10);
  
  if(player.isTouching(FoodGroup)) {
    score = score + 1;
  }
  
  if(player.isTouching(obstacleGroup)) {
    //obstacleGroup.setVelocityXEach(0);
    //FoodGroup.setVelocityXEach(0);
    gamestate = 0;
  }
  
  Obstacles();
  
  bananas();
  
  drawSprites();

  
}

function Obstacles(){
  if(frameCount%400==0) {
   
  obstacle=createSprite(displayWidth,displayHeight-250,20,60);
  obstacle.velocityX=-3;
  obstacle.addImage(obstacleImage);
  obstacle.scale=2;
  console.log(obstacle.x);
  obstacle.setCollider("rectangle",0,0,360,360);
  //obstacle.debug=true;
  obstacleGroup.setLifetimeEach(380);  
    
  obstacle.velocityX = obstacle.velocityX+ (-1);  
    
    obstacleGroup.add(obstacle);
  
  }
}

function bananas(){
  if(frameCount%220==0) {
   
  apple=createSprite(displayWidth,displayHeight-500,20,60);
  apple.velocityX=-3;
  apple.addImage(appleImage);
  apple.scale=0.5;
  apple.setCollider("rectangle",0,0,90,90);
  apple.debug=true;
    
  apple.velocityX =-3;  
    
    FoodGroup.add(apple);
  
  }
}