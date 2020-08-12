
var wall,thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 40, 30);

  thickness = random(22,80)
  weight = random(400,1500)

  bullet = createSprite(1570,400,30,30);
  wall = createSprite(1200,200,thickness,200);

  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  bullet.weight = weight;
}

function draw() {
  background(255,255,255);

  bullet.velocityX = speed;

 if(hasCollided(bullet,wall))
 {
   bullet.velocityX = 0;
   var damage=0.5 * weight * speed * speed/thickness*thickness*thickness;
   if(damage>10)
   {
     bullet.shapeColor = color(255,0,0);
   }
  if (damage<10) 
  {
    bullet.shapeColor=color(0,255,0);
  }

 }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.X + lbullet.width;
  wallLeftEdge=lwall;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
   return false;

}