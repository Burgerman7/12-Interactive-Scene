// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let pX = 480;
let pY = 720;
let xPos = 200;
let yPos = 200;
let lives = 3;
let line1 = (350, 550, 600, 550)
let move = 5;
let score =0;
//              hori vert 
let direction = [0, 0]

function setup() {
  //This function get run once at the start of the program
  createCanvas(880, 940);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(15);
}
100
function draw()   {
  background(220);
  strokeWeight(5); {
    //line 1
    line(350, 550, 600, 550)
    //line 2
    line(350, 550, 350, 450)
    //line 3
    line(600, 550, 600, 450)
    //line 4
    line(350, 450, 435, 450)
    //line 5
    line(600, 450, 500, 450)
    //line 6
    line(350, 615, 600, 615)
    //line 7
    line(480, 615, 480, 690)
    //line 8
    line(5, 0, 5, 400)
    //line 9
    line(5, 500, 175, 500)
    //line 10
    line(5, 585, 5, 1000)
    //line 11
    line(860, 0, 860, 400)
    //line 12
    line(860, 480, 730, 480)
    //line 13
    line(860, 600, 860, 1000)
    //line 14
    line(670, 515, 670, 625)
    //line 15
    line(290, 515, 290, 625)
    //line 16
    line(540, 685, 640, 685)
    //line 17
    line(290, 685, 410, 685)
    //line 18
    line(5, 930, 860, 930)
    //line 19
    line(5, 5, 860, 5)
    //line 20
    line(5, 750, 95, 750)
    //line 21
    line(860, 750, 775, 750)
    //line 22
    line(360, 750, 590, 750)
    //line 23
    line(480, 750, 480, 850)
    //line 24
    line(100, 210, 175, 210)
    //line 25
    line(650, 210, 730, 210)
    //line 26
    line(175, 750, 175, 640)
    //line 27
    line(125, 640, 175, 640)
    //line 28
    line(720, 750, 720, 640)
    //line 29
    line(720, 640, 770, 640)
    //line 30
    line(590, 850, 740, 850)
    //line 31
    line(650, 850, 650, 750)
    //line 32
    line(375, 850, 220, 850)
    //line 33
    line(300, 850, 300, 750)
    //line 34
    line(280, 305, 280, 435)
    //line 35
    line(280, 370, 370, 370)
    //line 36
    line(670, 305, 670, 435)
    //line 37
    line(670, 370, 540, 370)
    //line 38
    line(430, 5, 430, 160)
    //line 39
    line(390, 275, 540, 275)
    //line 40
    line(460, 275, 460, 370)
    //line 41
    line(5, 400, 5, 590)
    //line 42
    line(860, 400, 860, 600)
    //line 43
    line(5,340,175,340)
    //line 44
    line(120,930,120,825)
    //rect 1
    fill('black')
    rect(110, 100, 100, 80)
    //rect 2
    rect(295, 100, 100, 80)
    //rect 3
    rect(550, 100, 100, 80)
    //rect 4
    rect(740, 100, 100, 80)
    //rect 5
    rect(110, 420, 80, 50)
  }
  if (xPos > 875) {
    xPos = -100
    yPos = random(40, 360)
  }
  // coullisn
  if (pX < 0) {
    pX = pX + 5;
  }
  if (pX > width) {
    pX = pX - 5;
  }
  if (pY < 0) {
    pY = pY + 5;
  }
  if (pY > height) {
    pY = pY - 5;
  }

  pX += 10 * direction[0];
  pY += 10 * direction[1];



  movePlayer();
  drawPlayer(pX, pY);
  fill("black")
  text(mouseX + ", " + mouseY, 20, 20);
  text(pX + ", " + pY, 70, 20);


}


function drawPlayer(x, y) {
  strokeWeight(0);
  fill('yellow');
  ellipse(x, y, 40, 40);
}


function movePlayer() {
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) { // w key
    direction = [0, -1];
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // s key
    direction = [0, 1];
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // a key
    direction = [-1, 0];
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // d key
    direction = [1, 0];
  }
  if (keyIsDown(32)) { // d key
    direction = [0, 0];
  }
  if (keyIsDown(82)) { // d key
    direction = [0, 0];
    pX = 480;
    pY = 720;
  }
}


function playerlives(Life) {
  noStroke();
  stroke(0);
  if (Life === 3) {
    fill("red");
    rect(380, 10, 9, 9);
    rect(370, 10, 9, 9);
    rect(360, 10, 9, 9);
  }
  else if (Life === 2) {
    fill("red");
    rect(370, 10, 9, 9);
    rect(360, 10, 9, 9);
  }
  else if (Life === 1) {
    fill("red");
    rect(370, 10, 9, 9);
  }
  else if (Life === 0) {
    text('GAME OVER.', 125, 200);
    text('Press r to restart', 125, 225);
    if (keyIsDown(82)) {
      lives = 3;
      score = 0;
    }
  text("score" + score, 100, 100);  
  }
}

