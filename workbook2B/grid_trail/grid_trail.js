let trails = [];
let gridSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(0);
  noCursor();
}

function draw() {
  background(0, 50); // fading trail effect

  // Add new grid particle at mouse position
  trails.push(new GridParticle(mouseX, mouseY));

  // Update and display all grid particles
  for (let i = trails.length - 1; i >= 0; i--) {
    trails[i].update();
    trails[i].display();
    if (trails[i].isFinished()) {
      trails.splice(i, 1);
    }
  }

  // Optional: draw a cool cursor (dot)
  noStroke();
  fill(0, 255, 255);
  ellipse(mouseX, mouseY, 8, 8);
}

class GridParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
  }

  update() {
    this.alpha -= 5;
  }

  display() {
    stroke(0, 255, 255, this.alpha); // neon blue lines
    strokeWeight(1);

    // Draw grid cross around the point
    line(this.x - gridSize, this.y, this.x + gridSize, this.y); // horizontal
    line(this.x, this.y - gridSize, this.x, this.y + gridSize); // vertical
  }

  isFinished() {
    return this.alpha <= 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
