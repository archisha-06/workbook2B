let img;

function preload() {
  img = loadImage("./data/image-1.jpg"); // Make sure this image is in the 'data' folder or same directory
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
  image(img, width / 2, height / 2);
}

function draw() {
  // Apply a filter for fun
  filter(GRAY);
}
