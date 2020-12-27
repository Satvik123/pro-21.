var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,30,10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
}


function draw() {
  background("blue");
 if (hasCollided(bullet,wall)) {
   bullet.velocityX=0;
   var damage=(0.5*speed*speed*weight)/(thickness*thickness*thickness);
 }
console.log(bulletRightEdge);
 if (damage>10) {
   wall.shapeColor="red";
 }
if (damage<10) {
  wall.shapeColor="green";
}
  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
  return true;
  }
  else{
    return false;
  }
}