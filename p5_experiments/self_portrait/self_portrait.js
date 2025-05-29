let dragging = false;
let offsetX, offsetY;
let glassesX = 270;
let glassesY = 340;
let canvas;

function setup() {
  canvas = createCanvas(600, 700);
  centerCanvas();
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function windowResized() {
  centerCanvas();
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function draw() {
  background('#ffeef2');
  noStroke();

  // Hair (back)
  fill('#3b2e2a');
  ellipse(300, 370, 280, 350);
  rect(300, 520, 200, 300, 60);

  // Face
  fill('#ffdab9');
  ellipse(300, 360, 220, 270);

  // Hair (top fringe)
  fill('#3b2e2a');
  arc(300, 290, 200, 140, PI, TWO_PI);

  // Eyes
  fill(255);
  ellipse(270, 340, 50, 35);
  ellipse(330, 340, 50, 35);
  fill(0);
  ellipse(270, 340, 15, 15);
  ellipse(330, 340, 15, 15);

  // Movable Glasses
  drawGlasses(glassesX, glassesY);

  // Nose
  fill('#f9b8a8');
  triangle(300, 370, 295, 400, 305, 400);

  // Mouth
  fill('#e57373');
  arc(300, 430, 70, 40, 0, PI);

  // Neck
  fill('#ffdab9');
  rect(300, 490, 40, 60);

  // Shirt
  fill('#b6c5f2');
  rect(300, 600, 160, 160, 30);

  // Blush
  fill('#ffb6b9');
  ellipse(220, 360, 25, 12);
  ellipse(380, 360, 25, 12);
}

function drawGlasses(x, y) {
  noFill();
  stroke(50);
  strokeWeight(2.5);
  ellipse(x, y, 60, 45);
  ellipse(x + 80, y, 60, 45);
  line(x + 30, y, x + 50, y); // bridge
  line(x - 30, y, x - 50, y - 5); // left arm
  line(x + 110, y, x + 130, y - 5); // right arm
}

function mousePressed() {
  let d = dist(mouseX, mouseY, glassesX, glassesY);
  if (d < 60) {
    dragging = true;
    offsetX = mouseX - glassesX;
    offsetY = mouseY - glassesY;
  }
}

function mouseDragged() {
  if (dragging) {
    glassesX = mouseX - offsetX;
    glassesY = mouseY - offsetY;
  }
}

function mouseReleased() {
  dragging = false;
}
