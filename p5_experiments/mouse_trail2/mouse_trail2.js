let brushMode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  rectMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    myBrush(mouseX, mouseY);
  }
}

function myBrush(x, y) {
  if (brushMode == 1) {
    ellipse(random(x-20, x+20), random(y-20, y+20), random(5,25));
  } else if (brushMode == 2) {
    line(random(x-20, x+20), random(y-20, y+20), random(x-20, x+20), random(y-20, y+20));
  } else if (brushMode == 3) {
    rect(x, y, random(10, 50), random(10, 50));
  }
}

function keyTyped() {
  if (key == ' ') {
   background(220); 
  } else if (key == '1') {
   brushMode = 1;
  } else if (key == '2') {
   brushMode = 2;
  } else if (key == '3') {
   brushMode = 3;
  } 
}
