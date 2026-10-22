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

let circleX = 250;
let circleY = 250;
let circle_X_2 = 220;
let circle_Y_2
function setup() {
createCanvas(500, 500);
}
function changeY(){
    circleY=circleY-1;
    console.log(circleY)
}
function squareNumber(num){
    let squaredNumberValue = num*num;
    return squaredNumberValue;
}

function calculateCloseness(objX,objY){
    let d = dist(mouseX,mouseY,objX,objY)
    let mappedVal = map(d,0,250,0,255)
    return mappedVal;
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    complexCircles();
    let newVal = calculateCloseness(circleX,circleY)
    complexCircles_P(width/4, height/4, 100, 100,newVal);
    //complexCircles_P(width/4+width/2, height/4+height/2, 100, 100);
    let value = random(5,50);
    //complexCircles_P(width/4, height/4+height/2, 100, 100);
    //complexCircles_P(width/4+width/2, height/4, 100, 100);
}
function complexCircles(){
    push();
    fill(255,191,0);
    ellipse(width/2, height/2, 200, 200);
    fill(255, 0, 0);
    ellipse(width/2, height/2, 150, 150);
    fill(0, 0, 255);
    ellipse(width/2, height/2, 100, 100);
    fill(0, 255, 0);
    ellipse(width/2, height/2, 50, 50);
    pop();
}

function complexCircles_P(x,y,w,h, newVal){
    push();
    fill(255,191,0);
    ellipse(x, y, w, h);
    fill(255, 0, 0);
    ellipse(x, y, w*0.75, h*0.75);
    fill(0, 0, 255);
    ellipse(x, y, w*0.5, h*0.5);
    fill(0, 255, 0);
    ellipse(x, y, w*0.25, h*0.25);
    pop();
}