 var path,pathImg;
 var runner,runnerImg

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4
  path.scale= 1.2

  runner=createSprite(310,310,20,20);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.1

  leftBoundary=createSprite(0,300,100,600);
  rightBoundary=createSprite(390,300,80,600);
  rightBoundary.visible=false
  leftBoundary.visible=false

}

function draw() {
  background(0);
  path.velocityY = 4
  runner.x=World.mouseX
  if(path.y>400){
    path.y = height/2
    
  }
  runner.collide(leftBoundary);
  runner.collide(rightBoundary)
  
drawSprites();
}
