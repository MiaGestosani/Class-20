var mr, fr, vr1, vr2;

function setup() {
  createCanvas(800,400);
  fr =createSprite(200, 200, 50, 50);
  mr =createSprite(400, 200, 50, 50);
  vr1=createSprite(600, 0, 50, 50);

  vr1.shapeColor= ("blue");
  vr2=createSprite(600, 400, 50, 50);
  vr2.shapeColor= ("blue");
  vr1.velocityY=5;
  vr1.debug=true; 
  vr2.velocityY=-5;
  vr2.debug=true;
}

function draw() {
  background(0);  
mr.x=World.mouseX;
mr.y=World.mouseY;

if(vr1.y-vr2.y < vr1.height/2 + vr2.height/2 
  && vr2.y-vr1.y < vr1.height/2 + vr2.height/2 ){
  vr1.velocityY= vr1.velocityY*(-1); 
  vr2.velocityY= vr2.velocityY*(-1); 
}
if(mr.x -fr.x < mr.width/2 + fr.width/2 
  && fr.x-mr.x < mr.width/2 + fr.width/2
  && mr.y- fr.y< mr.height/2 + fr.height/2 
  && fr.y- mr.y< mr.height/2 + fr.height/2 )
{
  mr.shapeColor= "red";
  fr.shapeColor="red";
}
  else{
   mr.shapeColor= "green";
    fr.shapeColor="green";
 }
  drawSprites();
}