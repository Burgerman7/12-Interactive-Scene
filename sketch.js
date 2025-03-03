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
let eX = 390;
let eY = 500;
let eX1 = 470;
let eY1 = 500; 
let eX2 = 550;
let eY2 = 500;
let eX3 = 470;
let eY3 = 410;
let ghostDirection = { dx: 5, dy: 0 }; 
let ghostDirectionCyan = { dx: 5, dy: 0 };  
let ghostDirectionPink = { dx: -5, dy: 0 }; 
let ghostDirectionOrange = { dx: 0, dy: 5 }; 
let ghostDirectionRed = { dx: 0, dy: -5 }; 
let pacDirection = { dx: 0, dy: 0 }; 
let scaredMode = false; 
let scaredTimer = 0; 
let powerPelletChance = 0.3;
let gameOver = false



function setup() {
  //This function get run once at the start of the program
  createCanvas(880, 940);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(15);

  setupPellets();
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
  if (checkGhostCollision()) {
    lives--; // Decrease life
    if (lives > 0) {
      // Reset Pac-Man position
      pX = 480;
      pY = 720;
    } else {
      // Game Over
      textSize(32);
      fill("red");
      text("GAME OVER", width / 2 - 80, height / 2);
      text(" Press r to restart", 440, 500);
      noLoop(); // Stop the game
    }
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

if(scaredMode && frameCount > scaredTimer){
  scaredMode = false
}




  drawPellets();
  checkPelletCollision();
  checkPelletCollision();
  moveGhostChase();
  moveGhostChase1();
  moveGhostChase2();
  moveGhostChase3();
  drawGhost3(eX3, eY3);
  drawGhost2(eX2, eY2);
  drawGhost1(eX1, eY1);
  drawGhost(eX, eY);
  playerlives(lives);
  movePlayer();
  drawPlayer(pX, pY);
  fill("black")
  textSize(20);
  text("Score: " + score, 20, 30);
  text(mouseX + ',' + mouseY, width/2, height/2);
}


function drawPlayer(x, y) {
  strokeWeight(0);
  fill('yellow');
  ellipse(x, y, 40, 40);
}

function drawGhost(x, y){
  strokeWeight(0);
  fill('cyan');
  rect(x, y, 40, 40);
} 

function drawGhost1(x1, y1){
  strokeWeight(0);
  fill('pink');
  rect(x1, y1, 40, 40);
}

function drawGhost2(x2, y2){
  strokeWeight(0);
  fill('orange');
  rect(x2, y2, 40, 40);
}

function drawGhost3(x3, y3){
  strokeWeight(0);
  fill('red');
  rect(x3, y3, 40, 40);
}
function keyPressed() {
  if (key === "r" || key === "R") {
    lives = 3;
    score = 0;
    pX = 480;
    pY = 720;
    loop(); // Restart the game
  }
}


function playerlives(Life) {
  noStroke();
  stroke(0);
  if (Life === 3) {
    fill("red");
    rect(860, 10, 15, 15);
    rect(840, 10, 15, 15);
    rect(820, 10, 15, 15);
  }
  else if (Life === 2) {
    fill("red");
    rect(840, 10, 15, 15);
    rect(820, 10, 15, 15);
  }
  else if (Life === 1) {
    fill("red");
    rect(820, 10, 15, 15);
  }
  else if (Life === 0) {
    if (keyIsDown(82)) {
      lives = 3;
      score = 0;
    }
    if (checkGhostCollision()) {
      lives--; // Decrease lives
      if (lives > 0) {
        pX = 480; // Reset Pac-Man
        pY = 720;
      } else {
        noLoop(); // Stop the game
      }
    }
  }
}

function checkCollision(newX, newY) {
  let pacRadius = 20; // Pac-Man's size 

  for (let wall of walls) {
    let x1 = wall.x1, y1 = wall.y1, x2 = wall.x2, y2 = wall.y2;

    
    let nearestX = constrain(newX, Math.min(x1, x2), Math.max(x1, x2));
    let nearestY = constrain(newY, Math.min(y1, y2), Math.max(y1, y2));

    
    let distance = dist(newX, newY, nearestX, nearestY);
    
    
    if (distance < pacRadius) {
      return true; // Collision detected
    }
  }
  return false; // No collision
}
function movePlayer() {
  let newX = pX, newY = pY;

  if (keyIsDown(87) || keyIsDown(UP_ARROW)) { // W key (Up)
    newY -= 10;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // S key (Down)
    newY += 10;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // A key (Left)
    newX -= 10;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // D key (Right)
    newX += 10;
  }
  

  // Ensure Pac-Man does not move through walls
  if (!checkCollision(newX, newY)) {
    pX = newX;
    pY = newY;
  }
}

function keyPressed() {
  if (key === "w" || keyCode === UP_ARROW) { 
    pacDirection = { dx: 0, dy: -3 }; // Move Up
  }
  if (key === "s" || keyCode === DOWN_ARROW) { 
    pacDirection = { dx: 0, dy: 3 }; // Move Down
  }
  if (key === "a" || keyCode === LEFT_ARROW) { 
    pacDirection = { dx: -3, dy: 0 }; // Move Left
  }
  if (key === "d" || keyCode === RIGHT_ARROW) { 
    pacDirection = { dx: 3, dy: 0 }; // Move Right
  }
}

function movePlayer() {
  let newX = pX + pacDirection.dx * 5; // Move in the current direction
  let newY = pY + pacDirection.dy * 5;

  // Prevent movement through walls
  if (!checkCollision(newX, newY)) {
    pX = newX;
    pY = newY;
  }
}


function moveGhostsChase() {
  let directions = [
    { dx: 5, dy: 0 },  // Right
    { dx: -5, dy: 0 }, // Left
    { dx: 0, dy: 5 },  // Down
    { dx: 0, dy: -5 }  // Up
  ];

  function moveChasingGhost(ghostX, ghostY, ghostDirection, ghostType) {
    let bestDirection = ghostDirection;
    let shortestDistance = dist(ghostX, ghostY, pX, pY); // Distance to Pac-Man

    for (let dir of directions) {
      let newX = ghostX + dir.dx;
      let newY = ghostY + dir.dy;

      if (!checkCollision(newX, newY)) { 
        let newDistance = dist(newX, newY, pX, pY);

        if (ghostType === "cyan") {
          //  Cyan Ghost: Direct Chase
          if (newDistance < shortestDistance) {
            shortestDistance = newDistance;
            bestDirection = dir;
          }
        } 
        else if (ghostType === "pink") {
          let predictedX = pX + (direction[0] * 40);
          let predictedY = pY + (direction[1] * 40);
          let predictedDistance = dist(newX, newY, predictedX, predictedY);
          if (predictedDistance < shortestDistance) {
            shortestDistance = predictedDistance;
            bestDirection = dir;
          }
        } 
        else if (ghostType === "orange") {
          if (newDistance > 150) { // Chase if far
            if (newDistance < shortestDistance) {
              shortestDistance = newDistance;
              bestDirection = dir;
            }
          } else { // Run away if too close
            if (newDistance > shortestDistance) {
              shortestDistance = newDistance;
              bestDirection = dir;
            }
          }
        } 
        else if (ghostType === "red") {
          if (newDistance < 200) {
            if (newDistance < shortestDistance) {
              shortestDistance = newDistance;
              bestDirection = dir;
            }
          } else {
            bestDirection = random(directions); // Move randomly when far
          }
        }
      }
    }

    return bestDirection;
  }

  // Move Cyan Ghost 
  ghostDirectionCyan = moveChasingGhost(eX, eY, ghostDirectionCyan, "cyan");
  eX += ghostDirectionCyan.dx;
  eY += ghostDirectionCyan.dy;

  // Move Pink Ghost 
  ghostDirectionPink = moveChasingGhost(eX1, eY1, ghostDirectionPink, "pink");
  eX1 += ghostDirectionPink.dx;
  eY1 += ghostDirectionPink.dy;

  // Move Orange Ghost 
  ghostDirectionOrange = moveChasingGhost(eX2, eY2, ghostDirectionOrange, "orange");
  eX2 += ghostDirectionOrange.dx;
  eY2 += ghostDirectionOrange.dy;

  // Move Red Ghost 
  ghostDirectionRed = moveChasingGhost(eX3, eY3, ghostDirectionRed, "red");
  eX3 += ghostDirectionRed.dx;
  eY3 += ghostDirectionRed.dy;
}


function moveGhostChase() {
  let directions = [
    { dx: 5, dy: 0 },  // Right
    { dx: -5, dy: 0 }, // Left
    { dx: 0, dy: 5 },  // Down
    { dx: 0, dy: -5 }  // Up
  ];

  let bestDirection = ghostDirection;
  let shortestDistance = dist(eX, eY, pX, pY); 

  
  for (let dir of directions) {
    let newX = eX + dir.dx;
    let newY = eY + dir.dy;

    
    if (!checkCollision(newX, newY)) {
      let newDistance = dist(newX, newY, pX, pY);
      if (newDistance < shortestDistance) {
        shortestDistance = newDistance;
        bestDirection = dir;
      }
    }
  }

  
  eX += bestDirection.dx;
  eY += bestDirection.dy;
  ghostDirection = bestDirection; 
}

function moveGhostChase1() {
  let directions = [
    { dx: 2, dy: 0 },  // Right
    { dx: -2, dy: 0 }, // Left
    { dx: 0, dy: 2 },  // Down
    { dx: 0, dy: -2 }  // Up
  ];

  let bestDirection = ghostDirection;
  let shortestDistance = dist(eX1, eY1, pX, pY); 

  // Check all possible moves
  for (let dir of directions) {
    let newX = eX1 + dir.dx;
    let newY = eY1 + dir.dy;

    
    if (!checkCollision(newX, newY)) {
      let newDistance = dist(newX, newY, pX, pY);
      if (newDistance < shortestDistance) {
        shortestDistance = newDistance;
        bestDirection = dir;
      }
    }
  }

  
  eX1 += bestDirection.dx;
  eY1 += bestDirection.dy;
  ghostDirection = bestDirection; 
}

function moveGhostChase2() {
  let directions = [
    { dx: 3, dy: 0 },  // Right
    { dx: -3, dy: 0 }, // Left
    { dx: 0, dy: 3 },  // Down
    { dx: 0, dy: -3 }  // Up
  ];

  let bestDirection = ghostDirection;
  let shortestDistance = dist(eX2, eY2, pX, pY); 

  
  for (let dir of directions) {
    let newX = eX2 + dir.dx;
    let newY = eY2 + dir.dy;

    
    if (!checkCollision(newX, newY)) {
      let newDistance = dist(newX, newY, pX, pY);
      if (newDistance < shortestDistance) {
        shortestDistance = newDistance;
        bestDirection = dir;
      }
    }
  }

  
  eX2 += bestDirection.dx;
  eY2 += bestDirection.dy;
  ghostDirection = bestDirection; 
}

function moveGhostChase3() {
  let directions = [
    { dx: 4, dy: 0 },  // Right
    { dx: -4, dy: 0 }, // Left
    { dx: 0, dy: 4 },  // Down
    { dx: 0, dy: -4 }  // Up
  ];

  let bestDirection = ghostDirection;
  let shortestDistance = dist(eX3, eY3, pX, pY); 

  
  for (let dir of directions) {
    let newX = eX3 + dir.dx;
    let newY = eY3 + dir.dy;

    
    if (!checkCollision(newX, newY)) {
      let newDistance = dist(newX, newY, pX, pY);
      if (newDistance < shortestDistance) {
        shortestDistance = newDistance;
        bestDirection = dir;
      }
    }
  }

  
  eX3 += bestDirection.dx;
  eY3 += bestDirection.dy;
  ghostDirection = bestDirection; 
}

function checkGhostCollision() {
  let pacRadius = 20; // Pac-Man's size
  let ghostSize = 40; // Ghost size

  // Ghosts' positions
  let ghosts = [
    { x: eX, y: eY },   // Ghost 1 (cyan)
    { x: eX1, y: eY1 }, // Ghost 2 (pink)
    { x: eX2, y: eY2 }, // Ghost 3 (orange)
    { x: eX3, y: eY3 }  // Ghost 4 (red)
  ];

  // Loop through each ghost and check for collisions
  for (let ghost of ghosts) {
    let distance = dist(pX, pY, ghost.x, ghost.y);
    if (distance < pacRadius + ghostSize / 2) {
      return true; // Collision detected
    }
  }
  return false; // No collision
}


let walls = [
  { x1: 350, y1: 550, x2: 600, y2: 550 },  // Line 1
  { x1: 350, y1: 550, x2: 350, y2: 450 },  // Line 2
  { x1: 600, y1: 550, x2: 600, y2: 450 },  // Line 3
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
  { x1: 670, y1: 515, x2: 670, y2: 625 },   //line 14
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
  { x1: 58, y1: 58, x2: 160, y2: 58}, //rect1 top
  { x1: 160, y1: 58, x2: 160, y2: 141}, //rect1 right
  { x1: 58, y1: 141, x2: 160, y2: 141}, //rect1 bottom
  { x1: 58, y1: 58, x2: 58, y2: 141 }, //rect1 left
  { x1: 243, y1: 58, x2: 346, y2: 58 }, //rect2 top
  { x1: 346, y1: 58, x2: 346, y2: 141 }, //rect2 right
  { x1: 243, y1: 141, x2: 346, y2: 141 }, // rect2 bottom
  { x1: 243, y1: 58, x2: 243, y2: 141 }, // rect2 left
  { x1: 498, y1: 58, x2: 600, y2: 58 }, // rect3 top
  { x1: 600, y1: 58, x2: 600, y2: 141 }, // rect3 right
  { x1: 498, y1: 141, x2: 600, y2: 141 }, // rect3 bottom
  { x1: 498, y1: 58, x2: 498, y2: 141 }, // rect3 left
  { x1: 688, y1: 58, x2: 790, y2: 58 }, // rect4 top
  { x1: 790, y1: 58, x2: 790, y2: 141 }, // rect4 right
  { x1: 688, y1: 141, x2: 790, y2: 141 }, // rect4 bottom
  { x1: 688, y1: 58, x2: 688, y2: 141 }, // rect4 left
  { x1: 67, y1: 392, x2: 151, y2: 392 }, // rect5 top
  { x1: 151, y1: 392, x2: 151, y2: 445 }, // rect5 right
  { x1: 67, y1: 445, x2: 151, y2: 445 }, // rect5 bottom
  { x1: 67, y1: 392, x2: 67, y2: 445 }, // rect5 left
  { x1: 5, y1: 0, x2: 5, y2: 400 },        // Left border
  { x1: 5, y1: 500, x2: 175, y2: 500 }     // Bottom border
  
];


let pellets = [];  

function setupPellets() {
  for (let i = 40; i < width - 40; i += 40) {  
    for (let j = 40; j < height - 40; j += 40) {
      if (!checkCollision(i, j)) { 
        let isPowerPellet = (i % 240 === 0 && j % 240 === 0) || random() < powerPelletChance 
        // Places power pellets every 200px + 20% random chance

        pellets.push({ x: i, y: j, eaten: false, power: isPowerPellet });
      }
    }
  }
}


function drawPellets() {
  fill("white");  
  noStroke();
  for (let pellet of pellets) {
    if (!pellet.eaten) {  
      ellipse(pellet.x, pellet.y, 15, 15); 
    }
  }
}

function moveGhostsChase() {
  let directions = [
    { dx: 5, dy: 0 },  // Right
    { dx: -5, dy: 0 }, // Left
    { dx: 0, dy: 5 },  // Down
    { dx: 0, dy: -5 }  // Up
  ];

  function moveGhost(ghostX, ghostY, ghostDirection) {
    let bestDirection = ghostDirection;
    let bestDistance = scaredMode ? -Infinity : Infinity; 

    for (let dir of directions) {
      let newX = ghostX + dir.dx;
      let newY = ghostY + dir.dy;

      if (!checkCollision(newX, newY)) {
        let distance = dist(newX, newY, pX, pY);

        if (scaredMode) {
          // Ghosts try to move AWAY from Pac-Man
          if (distance > bestDistance) {
            bestDistance = distance;
            bestDirection = dir;
          }
        } else {
          if (distance < bestDistance) {
            bestDistance = distance;
            bestDirection = dir;
          }
        }
      }
    }

    return bestDirection;
  }

  // Move each ghost
  ghostDirectionCyan = moveGhost(eX, eY, ghostDirectionCyan);
  eX += ghostDirectionCyan.dx;
  eY += ghostDirectionCyan.dy;

  ghostDirectionPink = moveGhost1(eX1, eY1, ghostDirectionPink);
  eX1 += ghostDirectionPink.dx;
  eY1 += ghostDirectionPink.dy;

  ghostDirectionOrange = moveGhost2(eX2, eY2, ghostDirectionOrange);
  eX2 += ghostDirectionOrange.dx;
  eY2 += ghostDirectionOrange.dy;

  ghostDirectionRed = moveGhost3(eX3, eY3, ghostDirectionRed);
  eX3 += ghostDirectionRed.dx;
  eY3 += ghostDirectionRed.dy;
}

function checkPelletCollision() {
  for (let pellet of pellets) {
    let distance = dist(pX, pY, pellet.x, pellet.y);
    if (distance < 15 && !pellet.eaten) { 
      pellet.eaten = true;
      score += pellet.power ? 50 : 10; // Power pellets give more points

      if (pellet.power) {
        scaredMode = true;
        scaredTimer = frameCount + 300; // Scared mode lasts for 300 frames (~10 sec)
      }
    }
  }
}

function drawGhost(x, y){
  strokeWeight(0);
  fill(scaredMode ? 'blue' : 'cyan'); // Cyan Ghost turns blue
  rect(x, y, 40, 40);
} 

function drawGhost1(x1, y1){
  strokeWeight(0);
  fill(scaredMode ? 'blue' : 'pink'); // Pink Ghost turns blue
  rect(x1, y1, 40, 40);
}

function drawGhost2(x2, y2){
  strokeWeight(0);
  fill(scaredMode ? 'blue' : 'orange'); // Orange Ghost turns blue
  rect(x2, y2, 40, 40);
}

function drawGhost3(x3, y3){
  strokeWeight(0);
  fill(scaredMode ? 'blue' : 'red'); // Red Ghost turns blue
  rect(x3, y3, 40, 40);
}
function drawPellets() {
  noStroke();
  for (let pellet of pellets) {
    if (!pellet.eaten) {  
      if (pellet.power) {
        fill("blue");  // Power pellets are blue
        ellipse(pellet.x, pellet.y, 20, 20); // Bigger power pellet 
        random() < 0.2
      } else {
        fill("black"); // Normal pellets
        ellipse(pellet.x, pellet.y, 8, 8); // Regular pellet 
      }
    }
  }
}
function setupPellets() {
  for (let i = 40; i < width - 40; i += 40) {  
    for (let j = 40; j < height - 40; j += 40) {
      if (!checkCollision(i, j)) { 
        let isPowerPellet = (i % (width - 80) === 40 && j % (height - 80) === 40); 
        pellets.push({ x: i, y: j, eaten: false, power: isPowerPellet });
      }
    }
  }
}

function checkGhostCollision() {
  let pacRadius = 20; // Pac-Man's size
  let ghostSize = 40; // Ghost size

  let ghosts = [
    { x: eX, y: eY, name: "cyan" },
    { x: eX1, y: eY1, name: "pink" },
    { x: eX2, y: eY2, name: "orange" },
    { x: eX3, y: eY3, name: "red" }
  ];

  for (let ghost of ghosts) {
    let distance = dist(pX, pY, ghost.x, ghost.y);

    if (distance < pacRadius + ghostSize / 2) {
      if (scaredMode) {
        eatGhost(ghost.name); // Eat ghost if scared
        return false; // Ghost eaten
      } else {
        return true; // Collision, Pac-Man loses a life
      }
    }
  }
  return false; // No collision
}

function eatGhost(ghostName) {
  score += 200; // Eating a ghost gives extra points
  console.log(`Pac-Man ate the ${ghostName} ghost!`);

  // Reset ghost position to starting location after 3 seconds
  setTimeout(() => {
    if (ghostName === "cyan") { eX = 390; eY = 500; }
    if (ghostName === "pink") { eX1 = 470; eY1 = 500; }
    if (ghostName === "orange") { eX2 = 550; eY2 = 500; }
    if (ghostName === "red") { eX3 = 470; eY3 = 410; }
  }, 3000); // Ghost respawns after 3 seconds
}



