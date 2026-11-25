/**
 * soccer field arrays 03 build teams
 * Runzhuo Zhang
 * 
 * arrays 03 homework
 */

"use strict";

let soccerImage = undefined;
let dribbler = undefined;
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
    x: 450,
    y: 302,
    size: 10,
    speedX: 0,
    speedY: 0,
    moving: false,
    //moveTorwardsGoal: false,
}
let player1 = {
    x: 880,
    y: 25,
    size: 20,
    fillColor: "#0000ff",
    speedX:0,
    speedY:0,
    number:0
}
let player2 = {
    x: 790,
    y: 305,
    size: 20,
    fillColor: "#f1e900",
    speedX: 0,
    speedY: 0,
    number: 0
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
let currentScene = undefined;

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(200);
if (currentScene === undefined){
    push();
    fill(lighterGrass.R, lighterGrass.G, lighterGrass.B);
    
    stroke(255);
    strokeWeight(2);
    rect(30,30, 840, 544);
    pop();
    drawArc();
    drawDarkGreenGrass();
    drawCircle();
    drawLines();
    drawSpots();
}
else if (currentScene === "animationScene"){
    push();
    fill(lighterGrass.R, lighterGrass.G, lighterGrass.B);
    
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
    findDribbler();
    if (dribbler !== undefined){
        moveBall();

    }
    endAnimation();
}
else if (currentScene === "shootingMiniGame"){
    push();
    fill(lighterGrass.R, lighterGrass.G, lighterGrass.B);
    
    stroke(255);
    strokeWeight(2);
    rect(30,30, 840, 544);
    pop();
    drawArc();
    drawDarkGreenGrass();
    drawCircle();
    drawLines();
    drawSpots();
}
}


//drawing the lines and arcs on the soccer field
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
    size: player1size,
    fillColor: "#0000ff",
    speedX:player1speedX,
    speedY:player1speedY,
    number:player1number,
    }
    // push();
    // fill(player1.fillColor);
    // noStroke();
    // circle(player1x, player1y, player1size);
    
    // pop();
    teamBlue.push(newBluePlayer);
    return;
}
function buildTeamBlue(){
    //keeper
    bluePlayer(40,302,20,0,0,"1");
    //defender
    bluePlayer(150,170,20,0.5,0,"3");
    bluePlayer(130,302,20,0.45,0,"5");
    bluePlayer(150,425,20,0.5,0,"2");
    //midfielder
    bluePlayer(230,230,20,0.5,0,"4");
    bluePlayer(230,370,20,0.6,0,"6");
    bluePlayer(330,302,20,0.5,0,"10");
    bluePlayer(290,100,20,0.5,-0.02,"8");
    bluePlayer(290,504,20,0.5,0.02,"7");
    //forward
    bluePlayer(420,220,20,0.5,0.02,"9");
    bluePlayer(420,384,20,0.55,-0.02,"11");
    return;

}
function drawTeamBlue(){
    for (let i = 0; i < teamBlue.length; i++){
        if (currentScene === "animationScene"){
            teamBlue[i].x = teamBlue[i].x + teamBlue[i].speedX
            teamBlue[i].y = teamBlue[i].y + teamBlue[i].speedY

        }
        
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
        size: player2size,
        fillColor:"#ff0000",
        speedX: player2speedX,
        speedY: player2speedY,
        number: player2number,

    }
    teamRed.push(newRedPlayer);
    // push();
    // fill(player2.fillColor);
    // noStroke();
    // circle(player2x, player2y, player2size);
    
    // pop();
    return;
}
function buildTeamRed(){
    //keeper
    redPlayer(860,302,20,0,0,1);
    //defender
    redPlayer(790,240,20,0.03,0.01,"4");
    redPlayer(790,364,20,0.03,-0.01,"5");
    redPlayer(760,490,20,0.05,0,"3");
    redPlayer(760,110,20,0.05,0,"2");
    //midfielder
    redPlayer(680,220,20,0.15,0.03,"6");
    redPlayer(680,384,20,0.15,-0.03,"7");
    redPlayer(600,302,20,0.2,0,"10");
    redPlayer(560,470,20,0.2,-0.02,"8");
    redPlayer(560,130,20,0.2,0.02,"9");
    //forward
    redPlayer(480,302,20,0.25,0.06,"11");
    return;
}
function drawTeamRed (){
    for(let i = 0; i < teamRed.length; i++){
        if(currentScene === "animationScene"){
            teamRed[i].x = teamRed[i].x + teamRed[i].speedX
            teamRed[i].y = teamRed[i].y + teamRed[i].speedY
        }
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
    //circle(ball.x, ball.y, ball.size);
    pop();
    }
function findDribbler(){
    for (let i = 0; i < teamBlue.length; i++){
        let distance = dist(ball.x, ball.y, teamBlue[i].x, teamBlue[i].y)
        if (distance < teamBlue[i].size + ball.size){
            dribbler = teamBlue[i];
            return;

        }
    }
}
function moveBall(){
    let distance = dist(dribbler.x, dribbler.y, ball.x, ball.y);
    //console.log(ball.x)
    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY;
    if (distance < dribbler.size/2 + ball.size/2){
        if(dribbler.x <= ball.x)
        {ball.x = ball.x + 1}
        if(dribbler.x >= ball.x)
        {ball.x = ball.x - 1}
        // if(dribbler.y <= ball.y)
        // {ball.y = ball.y + 1}
        // if(dribbler.y >= ball.y)
        // {ball.y = ball.y - 1}
        //ball.x = constrain(ball.x, 600, width-20);
            
    }
}
function endAnimation(){
    for (let i = 0; i < teamBlue.length; i++){
        
        if (teamBlue[i].x > 700){
           currentScene = "shootingMiniGame"
           return;
        }
        
    }
}
    
function mousePressed(){
    currentScene = "animationScene";
}