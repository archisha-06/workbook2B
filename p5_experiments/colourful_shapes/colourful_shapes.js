function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    }
    
    function draw() {
    fill(255, 255, 0);
    stroke(255,0,0);
    
    fill("blue");
    strokeWeight(4);
    ellipse(width/2, height/2, 200, 600);
    
    fill(255,255,0);
    line(0,0,300,300);
    circle(mouseX,mouseY, 100);
    
    fill('#ffc0cb');
    square(width/2, height/2, 100);
    triangle(0,400, 400, 0, 400, 400);}
