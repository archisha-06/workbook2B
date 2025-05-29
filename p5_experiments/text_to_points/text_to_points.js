let points = [];

function preload() {
    font = loadFont('./data/Heroline.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
  points = font.textToPoints("I Love You!", 
  width / 2 - 400, //x position
  height / 2, // y polet sition
  144, { //font size
    sampleFactor: 0.2, //level of detail
  });
}


function draw() {
  background(160);
  xMapped = map(mouseX, 0, width, 180, 255);
  xMappedSize = map(mouseX, 0, width, 4, 32);
  for (let p of points) {
    fill(0, 0, xMapped, 20);
    noStroke();
    ellipse(p.x, p.y, xMappedSize, xMappedSize);
  }
}
