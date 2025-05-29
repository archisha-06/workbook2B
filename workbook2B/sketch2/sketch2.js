let s2 = function (p) {
  p.setup = function () {
    let canvas = p.createCanvas(250, 250, p.WEBGL);
    canvas.parent("sketch2");
  };

  p.draw = function () {
    p.background(10);
    p.rotateX(p.millis() / 1000);
    p.fill(255, 0, 255);
    p.stroke(255);
    p.sphere(90);
  };
};

new p5(s2);








