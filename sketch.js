var ball,ball_image,paddle,paddle_image;

function preload() {
  
  ball_image = loadImage("ball.png");
  
  paddle_image = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   
  ball = createSprite(200,200,10,10);
  ball.addImage("BALL",ball_image);
  ball.velocityX = 9;
  ball.velocityY = 9;
  
  paddle = createSprite(380,200,15,100);
  paddle.addImage("PADDLE",paddle_image);
  
  edges = createEdgeSprites();

}

function draw() {
  
  background(205,153,0);
  
  if(keyDown(UP_ARROW))
  {
     
   paddle.y = paddle.y - 20; 
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    
   paddle.y = paddle.y + 20; 
    
  }
  
  randomVelocity();
  
  drawSprites();
  
  createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
}

function randomVelocity()
{
  
  if(ball.bounceOff(paddle)){
   
    ball.velocityX = random(-8,+8);
    ball.velocityY = random(-8,+8);
    
  }
  
}

