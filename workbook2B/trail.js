let trails = [];
let gridSize = 20;

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');  // Keep it behind content
  cnv.style('position', 'fixed');
  cnv.style('top', '0');
  cnv.style('left', '0');
  noCursor();
}

function draw() {
  clear(); // instead of background to keep the site visible
  trails.push(new GridParticle(mouseX, mouseY));

  for (let i = trails.length - 1; i >= 0; i--) {
    trails[i].update();
    trails[i].display();
    if (trails[i].isFinished()) {
      trails.splice(i, 1);
    }
  }

  // optional cursor dot
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
    stroke(0, 255, 255, this.alpha);
    line(this.x - gridSize, this.y, this.x + gridSize, this.y);
    line(this.x, this.y - gridSize, this.x, this.y + gridSize);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
