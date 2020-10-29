var ball,img,paddle;
var topEdge,bottomEdge;
function preload() {
  
  paddle = loadImage("ball.png");
  ball = loadImage("paddle.png");
 
}
function setup() {
  createCanvas(400, 400);
  paddle = createSprite(370,200,20,80);
  ball = createSprite(50,200,20,20);

}

function draw() {
  background(205,153,0);
  drawSprites();
edges =  createEdgeSprites();
  
   if(keyDown("Up_arrow")) {
    paddle.velocityY = -5;
  }
  
   if(keyDown("Down_arrow")) {
    paddle.velocityY = 5;
  }
  
  if(keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 2;
    
  }
   
  
 
  
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  
  paddle.bounceOff(edges[2])
  paddle.bounceOff(edges[3])
}


