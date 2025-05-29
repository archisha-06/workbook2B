let capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide(); // Hide the default HTML video element
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(capture, width / 2, height / 2);
  filter(THRESHOLD);
}
