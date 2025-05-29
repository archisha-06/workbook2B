let s1 = function (p) {
  p.setup = function () {
    let canvas = p.createCanvas(250, 250, p.WEBGL);
    canvas.parent("sketch1");
    
  };

  p.draw = function () {
    p.background(10);
    p.rotateY(p.millis() / 1000);
    p.fill(0, 255, 255);
    p.stroke(255);
    p.box(100);
  };
};

new p5(s1);


