function setup() {
 createCanvas(400, 400);
}
function draw () {
  background ( "white");
  rect ( 0 ,0, 100 , 100);
}function setup() {
  createCanvas(400, 400);
  background("white")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
