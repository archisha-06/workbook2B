new p5((p) => {
  let particles = [];
  let angle = 0;

  p.setup = () => {
    let header = document.querySelector('.header-sketch');
    let w = header.offsetWidth;
    let h = 200; // Shorter height
    let canvas = p.createCanvas(w, h, p.WEBGL);
    canvas.parent(header);
    canvas.style('z-index', '-1');
    canvas.style('pointer-events', 'none');
    p.noFill();

    // Create glowing geometric points
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: p.random(-w / 2, w / 2),
        y: p.random(-h / 2, h / 2),
        z: p.random(-200, 200),
      });
    }
  };

  p.windowResized = () => {
    let header = document.querySelector('.header-sketch');
    p.resizeCanvas(header.offsetWidth, 200);
  };

  p.draw = () => {
    p.clear();
    p.background(5, 5, 15);

    p.rotateY(angle * 0.002);
    p.rotateX(angle * 0.001);

    p.stroke(0, 255, 255, 100); // Neon cyan glow
    p.strokeWeight(1.5);

    // Draw points and lines connecting nearby ones
    for (let i = 0; i < particles.length; i++) {
      let a = particles[i];
      p.push();
      p.translate(a.x, a.y, a.z);
      p.point(0, 0, 0);
      p.pop();

      for (let j = i + 1; j < particles.length; j++) {
        let b = particles[j];
        let d = p.dist(a.x, a.y, a.z, b.x, b.y, b.z);
        if (d < 100) {
          p.line(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }

    angle += 1;
  };
});


