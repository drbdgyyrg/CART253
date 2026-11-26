/**
 * soccer field events 02 shoot the ball
 * Runzhuo Zhang
 * 
 * events 02 homework
 */

"use strict";

let soccerImage = undefined;

let darkerGrass = {
    R: 113,
    G: 210,
    B: 130
}
let lighterGrass = {
    R: 150,
    G: 220,
    B: 150
}
let ball = {
    x: 690,
    y: 300,
    size: 10,
    speedX: 0,
    speedY: 0,
    //moving: false
}
let player1 = {
    x: 600,
    y: 100,
    size: 20,
    fillColor: "#0000ff"
}
let player2 = {
    x: 670,
    y: 320,
    size: 20,
    fillColor: "#0000ff",
    speedX: 0,
    speedY: 0
}
let teamBlue = [];
let teamRed = [];
async function setup() {
createCanvas(900, 604);
buildTeamBlue();
buildTeamRed();
soccerImage = await loadImage('assets/images/soccerBall_dirty.png');
imageMode(CENTER);
textAlign(CENTER,CENTER);
}



function draw() {
background(200);

    push();
    fill(lighterGrass.R, lighterGrass.G, lighterGrass.B);
    //turn the color of the grass lighter and yellower
    //lighterGrass.R = lighterGrass.R + 1;
    //lighterGrass.R = constrain(lighterGrass.R, 150, 210);
    stroke(255);
    strokeWeight(2);
    rect(30,30, 840, 544);
    pop();
    drawArc();
    drawDarkGreenGrass();
    drawCircle();
    drawLines();
    drawSpots();
    drawTeamBlue();
    drawTeamRed();
    drawBall();
//move the ball
    moveBall();
//move the shooter
    moveShooter();
}
function drawSpots(){
    push();
    fill(255);
    noStroke();
    circle(120, 302, 3.5);
    circle(780, 302, 3.5);
    circle(450, 302, 5);
    pop();
}
function drawArc(){
    push();
    fill(lighterGrass.R, lighterGrass.G, lighterGrass.B);
    stroke(255);
    strokeWeight(2);
    arc(120, 302, 146.4, 146.4, radians(305), radians(55));
    arc(780, 302, 146.4, 146.4, radians(125), radians(235));
    arc(30,30, 20,20, radians(0), radians(90));
    arc(870,30, 20,20, radians(90), radians(180));
    arc(30,574, 20,20, radians(270), radians(360));
    arc(870,574, 20,20, radians(180), radians(270));
    pop();
}
function drawCircle(){
    push();
    fill(lighterGrass.R, lighterGrass.G, lighterGrass.B);
    stroke(255);
    strokeWeight(2);
    ellipse(450, 302, 146.4, 146.4);
    pop();
}
function drawLines(){
    push();
    stroke(255);
    strokeWeight(2);
    //draw center line
    line(450,30, 450, 574);
    //draw big box
    line(30,140.72, 162, 140.72);
    line(30,463.28, 162, 463.28);
    line(738,140.72, 870, 140.72);
    line(738,463.28, 870, 463.28);
    line(162,140.72, 162, 463.28);
    line(738,140.72, 738, 463.28);
    //draw small box
    line(30, 228.8, 74, 228.8);
    line(30, 375.2, 74, 375.2);
    line(870, 228.8, 826, 228.8);
    line(870, 375.2, 826, 375.2);
    line(74,228.8,74,375.2);
    line(826,228.8,826,375.2);
    //draw goal
    line(15,272.72, 15,331.28);
    line(885,272.72, 885,331.28);
    line(15,272.72, 30,272.72);
    line(885,272.72, 870,272.72);
    line(15,331.28, 30,331.28);
    line(885,331.28, 870,331.28);
    pop();
}
function drawDarkGreenGrass(){
    push();
    fill(darkerGrass.R, darkerGrass.G, darkerGrass.B);
    //turn the color of the grass darker and yellower
    //darkerGrass.R = darkerGrass.R + 1;
    //darkerGrass.R = constrain(darkerGrass.R, 113, 188);
    //darkerGrass.B = darkerGrass.B - 0.2;
    darkerGrass.B = constrain(darkerGrass.B, 114, 130);
    noStroke();
    rect(56,32, 50.25, 540);
    rect(161,32, 50.25, 540);
    rect(266,32, 50.25, 540);
    rect(371,32, 50.25, 540);
    rect(476,32, 50.25, 540);
    rect(581,32, 50.25, 540);
    rect(686,32, 50.25, 540);
    rect(791,32, 50.25, 540);
    //rect(32,139,836,109);
    //rect(32,357,836,109);
    pop();
}
//adding players and ball
function bluePlayer(player1x,player1y,player1size,player1speedX,player1speedY,player1number){
    let newBluePlayer = {
    x: player1x,
    y: player1y,
    originalX: player1x,
    originalY: player1y,
    size: player1size,
    fillColor: "#0000ff",
    speedX:player1speedX,
    speedY:player1speedY,
    number:player1number,
    }
  
    teamBlue.push(newBluePlayer);
    return;
}
function buildTeamBlue(){
    //keeper
    bluePlayer(60,302,20,0,0,"1");
    //defender
    bluePlayer(430,180,20,0.08,0.05,"3");
    bluePlayer(390,322,20,0,0,"5");
    bluePlayer(520,425,20,0.04,0.05,"2");
    //midfielder
    bluePlayer(680,130,20,0,0,"4");
    bluePlayer(680,370,20,0,0,"6");
    bluePlayer(680,302,20,0,0,"10");
    bluePlayer(610,250,20,0,0,"8");
    bluePlayer(700,494,20,0,0,"7");
    //forward
    bluePlayer(750,245,20,0,0,"9");
    bluePlayer(805,384,20,0.02,0.08,"11");
    return;

}
function drawTeamBlue(){
    for (let i = 0; i < teamBlue.length; i++){
        // if (currentScene === "animationScene"){
        //     teamBlue[i].x = teamBlue[i].x + teamBlue[i].speedX
        //     teamBlue[i].y = teamBlue[i].y + teamBlue[i].speedY

        // }
        
    push();
    fill(teamBlue[i].fillColor);
    //noStroke();
    stroke("gold");
    strokeWeight(1.5);
    circle(teamBlue[i].x, teamBlue[i].y, teamBlue[i].size);
    noStroke();
    fill(255);
    text(teamBlue[i].number, teamBlue[i].x, teamBlue[i].y);
    
    pop();
    }
}
function redPlayer(player2x,player2y,player2size,player2speedX,player2speedY,player2number){
    let newRedPlayer = {
        x: player2x,
        y: player2y,
        originalX: player2x,
        originalY: player2y,
        size: player2size,
        fillColor:"#ff0000",
        speedX: player2speedX,
        speedY: player2speedY,
        number: player2number,

    }
    teamRed.push(newRedPlayer);
   
    return;
}
function buildTeamRed(){
    //keeper
    redPlayer(860,302,15,0,0.1,"1");
    //defender
    redPlayer(790,260,20,0.08,0.06,"4");
    redPlayer(810,340,20,0.06,0.08,"5");
    redPlayer(780,420,20,0.05,0.06,"3");
    redPlayer(750,160,20,0,0,"2");
    //midfielder
    redPlayer(730,270,20,0.1,0.05,"6");
    redPlayer(720,350,20,0.03,0.05,"7");
    redPlayer(560,342,20,0,0,"10");
    redPlayer(660,420,20,0,0,"8");
    redPlayer(560,150,20,0,0,"9");
    //forward
    redPlayer(460,302,20,0,0,"11");
    return;
}
function drawTeamRed (){
    for(let i = 0; i < teamRed.length; i++){
        // if(currentScene === "animationScene"){
        //     teamRed[i].x = teamRed[i].x + teamRed[i].speedX
        //     teamRed[i].y = teamRed[i].y + teamRed[i].speedY
        // }
        push();
        fill(teamRed[i].fillColor);
        //noStroke();
        stroke("green");
        strokeWeight(1.5);
        circle(teamRed[i].x, teamRed[i].y, teamRed[i].size);
        noStroke();
        fill(255);
        text(teamRed[i].number, teamRed[i].x, teamRed[i].y);
        pop();
    }
}
function drawBall(){
    push();
    image(soccerImage, ball.x, ball.y, ball.size, ball.size);
    noStroke();
    pop();
    }
    

//moving animations
function moveShooter(){
    teamBlue[6].x = teamBlue[6].x + teamBlue[6].speedX;
    teamBlue[6].y = teamBlue[6].y + teamBlue[6].speedY;
    }

function moveBall(){
    let distance = dist(teamBlue[6].x, teamBlue[6].y, ball.x, ball.y);
    //console.log(ball.x)
    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY;
    if (distance < teamBlue[6].size/2 + ball.size/2){
        if(teamBlue[6].x <= ball.x)
        {ball.x = ball.x + 1}
        if(teamBlue[6].x >= ball.x)
        {ball.x = ball.x - 1}
        if(teamBlue[6].y <= ball.y)
        {ball.y = ball.y + 1}
        if(teamBlue[6].y >= ball.y)
        {ball.y = ball.y - 1}
        ball.x = constrain(ball.x, 600, width-20);
            
    }
}
    

function keyPressed(event){
    if (event.key === 'ArrowUp'){
        teamBlue[6].speedY = -0.5;
        
    }
    if (event.key === 'ArrowDown'){
        teamBlue[6].speedY = 0.5;
    }
    if (event.key === 'ArrowLeft'){
        teamBlue[6].speedX = -0.5;
    }
    if (event.key === 'ArrowRight'){
        teamBlue[6].speedX = 0.5;
    }
    if (event.key === 'a' && dist(teamBlue[6].x, teamBlue[6].y, ball.x, ball.y) < teamBlue[6].size/1.5 + ball.size/1.5){
        if(teamBlue[6].x < ball.x){ball.speedX = 5;
        }
        else{
            ball.speedX = -5;
        }
        if(teamBlue[6].y < ball.y){ball.speedY = random(0,2);
        }
        else{
            ball.speedY = random(-2,0);
        }
        // ball.speedX = 5;
        // //add a random to show the shot can be wide sometimes
        // ball.speedY = random(-3, 3);
    }
}
function keyReleased(event){
    if (event.key === 'ArrowUp'){
        teamBlue[6].speedY = 0;
    }
    if (event.key === 'ArrowDown'){
        teamBlue[6].speedY = 0;
    }
    if (event.key === 'ArrowLeft'){
        teamBlue[6].speedX = 0;
    }
    if (event.key === 'ArrowRight'){
        teamBlue[6].speedX = 0;
    }
}