let pic;

function preload() {
  pic = loadImage("data/crying_robot.jpg"); // Make sure the file is correctly named and in the "data" folder!
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  imageMode(CENTER); // Correct syntax
}

function draw() {
  background("black"); // Clear the canvas each frame
  image(pic, mouseX, mouseY); // Image follows the mouse
}
 
