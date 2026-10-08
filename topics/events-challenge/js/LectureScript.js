/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let mouseTriggerBall = {
    x: 200,
    y: 200,
    size: 50,
    speedX:0,
    speedY:0,
    fillColor:{
        r:200,
        g:200,
        b:200
    }
    
}

function setup() {
    createCanvas(500, 500);
    background(0);
    //setTimeout(changeBallColor, 1000);
    setInterval(changeBallColor, 2000);
    setInterval(changeBallSize, 3000);

    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    
    background(0);
    fill(mouseTriggerBall.fillColor.r, mouseTriggerBall.fillColor.g, mouseTriggerBall.fillColor.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size);
    
    //move the ball
    moveball();
}
// function mousePressed() {
//     mouseTriggerBall.x = mouseX;
//     mouseTriggerBall.y = mouseY;
//     fill(random(255), random(255), random(255));
//     ellipse(mouseX, mouseY, mouseTriggerBall.size);
// }
function changeBallColor(){
    mouseTriggerBall.fillColor.r = random(255);
    mouseTriggerBall.fillColor.g = random(255);
    mouseTriggerBall.fillColor.b = random(255);
}
function changeBallSize(){
    mouseTriggerBall.size = random(10, 100);
}
function moveball(){
    mouseTriggerBall.x = mouseTriggerBall.x + mouseTriggerBall.speedX;
    mouseTriggerBall.y = mouseTriggerBall.y + mouseTriggerBall.speedY;
    
}
function keyPressed(event) {
    if(event.key === 'ArrowRight'){
    mouseTriggerBall.speedX = 0.5;
    }
    if (event.key === 'ArrowLeft'){
        mouseTriggerBall.speedX = -0.5;
    }
    if (event.key === 'ArrowUp'){
        mouseTriggerBall.speedY = -0.5;
    }
    if (event.key === 'ArrowDown'){
        mouseTriggerBall.speedY = 0.5;
    }
    if (event.key === 'c'){
        mouseTriggerBall.fillColor.r = random(255);
        mouseTriggerBall.fillColor.g = random(255);
        mouseTriggerBall.fillColor.b = random(255);
    }
}
function keyReleased() {
    mouseTriggerBall.speedX = 0;
    mouseTriggerBall.speedY = 0;
}
function keyTyped() {

}
// function mousePressed() {
//     // mouseTriggerBall.speed = 0.5;
//     // mouseTriggerBall.fillColor.r = random(255);
//     // mouseTriggerBall.fillColor.g = random(255);
//     // mouseTriggerBall.fillColor.b = random(255);
// }
// function mouseReleased() {
//     mouseTriggerBall.speed = 0;
// }
// function mouseWheel(event) {
//     mouseTriggerBall.size = mouseTriggerBall.size + event.deltaY;
// }
// function moouseDragged() {
//     mouseTriggerBall.x = mouseX;
//     mouseTriggerBall.y = mouseY;
// }