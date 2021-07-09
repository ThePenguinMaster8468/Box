var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(12,56,12,16);
  box.shapeColor = "green";
}

function draw() 
{
  background("blue");

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 3;
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 3;
  }

  drawSprites();


}




