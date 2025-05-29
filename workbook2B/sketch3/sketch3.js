let s3 = function (p) {
    p.setup = function () {
      let canvas = p.createCanvas(250, 250, p.WEBGL);
      canvas.parent("sketch3");
    };
  
    p.draw = function () {
      p.background(10);
      p.rotateZ(p.millis() / 1000);
      p.fill(0, 255, 100);
      p.stroke(255);
      p.cone(80, 200);
    };
  };
  
  new p5(s3);
  

  
  
