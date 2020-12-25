var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
   fixedrect=createSprite(400, 200, 50, 50);
   movingrect=createSprite(400,400,60,50);
  fixedrect.shapeColor="Green";
  movingrect.shapeColor="Green";
  
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x);
  console.log(fixedrect.width/2+movingrect.width/2)
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2){
    fixedrect.shapeColor="Blue";
  movingrect.shapeColor="Blue";
  }  
  else{
    fixedrect.shapeColor="Green";
  movingrect.shapeColor="Green";
  }
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
    fixedrect.shapeColor="Blue";
  movingrect.shapeColor="Blue";
  }  
  else{
    fixedrect.shapeColor="Green";
  movingrect.shapeColor="Green";
  }
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor="Blue";
  movingrect.shapeColor="Blue";
  }  
  else{
    fixedrect.shapeColor="Green";
  movingrect.shapeColor="Green";
  }
  if(fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor="Blue";
  movingrect.shapeColor="Blue";
  }  
  else{
    fixedrect.shapeColor="Green";
  movingrect.shapeColor="Green";
  }
  drawSprites();
}