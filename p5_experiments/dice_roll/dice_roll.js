// dice generator
// roll a random number from 0 to 6 - press space key to generate new number
var capture;
var diceRoll;
var integer;
var convertedDice;

function setup(){
createCanvas(windowWidth, windowHeight);
background(0, 0, 255);
imageMode(CENTER);
textAlign(CENTER);
diceRoll = random(6);
convertedDice = int(diceRoll);
numbers = convertedDice;
}

function draw() {
background(0, 0, 255);
textSize(72);
text(numbers, width/2, height/2);
}

function mousePressed() {
numbers=random(6);
}
