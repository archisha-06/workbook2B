function setup() {
createCanvas(windowWidth, windowHeight);
background("pink");
noStroke();
frameRate(1);
}
function draw() {
fill (random(255), random(255), random(255));
circle(random(width), random(height), random(20, 300));
}
