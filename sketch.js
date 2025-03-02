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
    pY -=5
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // s key
    pY +=5
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // a key
    pX -=5
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // d key
    pX +=100
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
function checkCollision(newX, newY) {
  let pacRadius = 20; // Pac-Man's size (ellipse radius)

  for (let wall of walls) {
    let x1 = wall.x1, y1 = wall.y1, x2 = wall.x2, y2 = wall.y2;

    // Find the nearest point on the wall segment
    let nearestX = constrain(newX, Math.min(x1, x2), Math.max(x1, x2));
    let nearestY = constrain(newY, Math.min(y1, y2), Math.max(y1, y2));

    // Calculate distance from Pac-Man's center to nearest wall point
    let distance = dist(newX, newY, nearestX, nearestY);
    
    // If the distance is less than Pac-Man's radius, there's a collision
    if (distance < pacRadius) {
      return true; // Collision detected, don't move Pac-Man
    }
  }
  return false; // No collision, movement is allowed
}
function movePlayer() {
  let newX = pX, newY = pY;

  if (keyIsDown(87) || keyIsDown(UP_ARROW)) { // W key (Up)
    newY -= 5;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // S key (Down)
    newY += 5;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // A key (Left)
    newX -= 5;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // D key (Right)
    newX += 5;
  }

  // Ensure Pac-Man does not move through walls
  if (!checkCollision(newX, newY)) {
    pX = newX;
    pY = newY;
  }
}
let walls = [
  { x1: 350, y1: 550, x2: 600, y2: 550 },  // Line 1
  { x1: 350, y1: 450, x2: 350, y2: 550 },  // Line 2
  { x1: 600, y1: 450, x2: 600, y2: 550 },  // Line 3
  { x1: 350, y1: 450, x2: 435, y2: 450 },  // Line 4
  { x1: 600, y1: 450, x2: 500, y2: 450 },  // Line 5
  { x1: 350, y1: 615, x2: 600, y2: 615 },  // line 6
  { x1: 480, y1: 615, x2: 480, y2: 690 },  // Line 7
  { x1: 5, y1: 0, x2: 5, y2: 400 },        // line 8
  { x1: 5, y1: 500, x2: 175, y2: 500 },    // line 9
  { x1: 5, y1: 585, x2: 5, y2: 1000 },     // line 10
  { x1: 860, y1: 0, x2: 860, y2: 400 },    // Line 11
  { x1: 860, y1: 480, x2: 730, y2: 480 },  // Line 12
  { x1: 860, y1: 600, x2: 860, y2: 1000 },  //line 13
  { x1: 670, y1: 515, x2: 290, y2: 625 },   //line 14
  { x1: 290, y1: 515, x2: 290, y2: 625 },   //line 15
  { x1: 540, y1: 685, x2: 640, y2: 685 },   // line 16
  { x1: 290, y1: 685, x2: 410, y2: 685 },   // line 17
  { x1: 5, y1: 930, x2: 860, y2: 930 },     // line 18
  { x1: 5, y1: 5, x2: 860, y2: 5 },         //line 19
  { x1: 5, y1: 750, x2: 95, y2: 750 },      //line 20
  { x1: 860, y1: 750, x2: 775, y2: 750 },  // line 21
  { x1: 360, y1: 750, x2: 590, y2: 750 },    // line 22
  { x1: 480, y1: 750, x2: 480, y2: 850 },   // line 23
  { x1: 100, y1: 210, x2: 175, y2: 210 },   // line 24
  { x1: 650, y1: 210, x2: 730, y2: 210 },  // line 25
  { x1: 175, y1: 750, x2: 175, y2: 640 },  // line 26
  { x1: 125, y1: 640, x2: 175, y2: 640 },  // line 27
  { x1: 720, y1: 750, x2: 720, y2: 640 },  // line 28
  { x1: 720, y1: 640, x2: 770, y2: 640 },  // line 29
  { x1: 590, y1: 850, x2: 740, y2: 850 },  // line 30
  { x1: 650, y1: 850, x2: 650, y2: 750 },  // line 31
  { x1: 375, y1: 850, x2: 220, y2: 850 },  // line 32
  { x1: 300, y1: 850, x2: 300, y2: 750 },  // line 33
  { x1: 280, y1: 305, x2: 280, y2: 435 }, // line 34
  { x1: 280, y1: 370, x2: 370, y2: 370 }, // line 35
  { x1: 670, y1: 305, x2: 670, y2: 435 },  //line 36
  { x1: 670, y1: 370, x2: 540, y2: 370 },  // line 37
  { x1: 430, y1: 5, x2: 430, y2: 160 },  // line 38
  { x1: 390, y1: 275, x2: 540, y2: 275 },  // line 39
  { x1: 460, y1: 275, x2: 460, y2: 370 },  // line 40
  { x1: 5, y1: 400, x2: 5, y2: 590 },     // line 41
  { x1: 860, y1: 400, x2: 860, y2: 600 },  // line 42
  { x1: 5, y1: 340, x2: 175, y2: 340 },   // line 43
  { x1: 120, y1: 930, x2: 120, y2: 825 },  // line 44
  { x1: 5, y1: 0, x2: 5, y2: 400 },        // Left border
  { x1: 5, y1: 500, x2: 175, y2: 500 }     // Bottom border
  
];

