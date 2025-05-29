let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('./data/bottomImg.jpg');
  topImg = loadImage('./data/topImg.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
  topImg.resize(width, height);
  image(bottomImg, 0, 0, width, height); 
}


function draw() {
}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

function mouseDragged() {
  copy(topImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}
