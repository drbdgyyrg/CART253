/**
 * soccer field conditionals 02 shoot the ball
 * Runzhuo Zhang
 * 
 * conditionals 02 homework
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
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
    x: 780,
    y: 350,
    size: 10,
    speedX: 5,
    speedY: -2
}
let player1 = {
    x: 600,
    y: 100,
    size: 20,
    fillColor: "#0000ff"
}
let player2 = {
    x: 710,
    y: 350,
    size: 20,
    fillColor: "#0000ff"
}
function setup() {
createCanvas(900, 604);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
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
    drawPlayers();
    drawBall();
//move the ball
    moveBall();
//move the player2
    movePlayer2();
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
function drawPlayers(){
    push();
    fill(player1.fillColor);
    noStroke();
    ellipse(player1.x, player1.y, player1.size, player1.size);
    ellipse(player2.x, player2.y, player2.size, player2.size);
    pop();
}
function drawBall(){
    push();
    fill(255,0,0);
    noStroke();
    circle(ball.x, ball.y, ball.size);
    pop();
    }
    
function movePlayer2(){
    player2.x = player2.x + 1;
    if (player2.x >= 880){
        player2.x = player2.x - 1;
    }

}
function moveBall(){
    //let distance = dist(player1.x, player1.y, ball.x, ball.y);
    console.log(distance)
    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY;
    if (ball.x >= player2.x + player2.size/2){
        ball.x = ball.x - ball.speedX;
        //ball.x = constrain(ball.x, 600, 685);
        ball.y = ball.y - ball.speedY;
        //ball.y = constrain(ball.y, 110, 340);
    }

}