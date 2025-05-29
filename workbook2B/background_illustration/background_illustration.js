function createIllustration(sketchId, index, style, color) {
  return new p5((p) => {
    let canvas;
    let w, h;

    p.setup = () => {
      const section = document.querySelector('.p5-section');
      w = section.offsetWidth / 3;
      h = section.offsetHeight;
      canvas = p.createCanvas(w, h);
      canvas.parent(section);
      canvas.position(index * w, 0);
      canvas.style('z-index', '-1');
      canvas.style('pointer-events', 'none');
      p.noFill();
    };

    p.draw = () => {
      p.clear();
      p.translate(p.width / 2, p.height / 2);
      let t = p.frameCount * 0.01;

      switch (style) {
        case 1:
          drawRotatingLines(p, t, color);
          break;
        case 2:
          drawNeonGrid(p, t, color);
          break;
        case 3:
          drawParticleOrbit(p, t, color);
          break;
      }
    };

    p.windowResized = () => {
      const section = document.querySelector('.p5-section');
      w = section.offsetWidth / 3;
      h = section.offsetHeight;
      p.resizeCanvas(w, h);
      canvas.position(index * w, 0);
    };

    function drawRotatingLines(p, t, col) {
      p.stroke(col);
      for (let i = 0; i < 16; i++) {
        let angle = p.TWO_PI * i / 16 + t;
        let x = 150 * p.cos(angle);
        let y = 150 * p.sin(angle);
        p.line(0, 0, x, y);
        p.ellipse(x, y, 10);
      }
    }

    function drawNeonGrid(p, t, col) {
      p.stroke(col);
      let spacing = 30 + 2 * p.sin(t);
      for (let x = -p.width; x < p.width; x += spacing) {
        for (let y = -p.height; y < p.height; y += spacing) {
          p.push();
          p.translate(x, y);
          p.rotate(t * 0.3);
          p.rect(0, 0, 10, 10);
          p.pop();
        }
      }
    }

    function drawParticleOrbit(p, t, col) {
      p.stroke(col);
      for (let i = 0; i < 50; i++) {
        let a = i * 0.2 + t;
        let r = 80 + 40 * p.sin(a * 1.5);
        let x = r * p.cos(a);
        let y = r * p.sin(a);
        p.ellipse(x, y, 4);
      }
    }
  }, sketchId);
}

// Bright neon colors
const neonBlue = [0, 255, 255];
const neonPink = [255, 60, 255];
const neonGreen = [100, 255, 100];

// Create the three illustrations
createIllustration('sketch1', 0, 1, neonBlue);   // Rotating rays
createIllustration('sketch2', 1, 2, neonPink);   // Neon grid
createIllustration('sketch3', 2, 3, neonGreen);  // Particle orbit







