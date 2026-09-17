/**
 * Challenge
 * Runzhuo
 * 
 * Monkey face
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(640,400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(184,161,250);

push();
fill(133,92,82);
//ellipse(320,200,300,300);
arc(180,200,115,120,HALF_PI,PI+HALF_PI);
arc(460,200,115,120,PI+HALF_PI,HALF_PI);
pop();
push();
fill(252,194,27);
arc(180,200,70,72,HALF_PI,PI+HALF_PI);
arc(460,200,70,72,PI+HALF_PI,HALF_PI);
pop();
push();
fill(133,92,82);
ellipse(320,200,300,300);
pop();
//to draw the roof
drawface();
//to drow the eys
drawEyes();
//to draw the mouth
drawMouth();
}
//function to draw face
function drawface(){
    //nostroke();
    fill(252,194,27);
    
    ellipse(320,220,250,230);
    
    //ellipse(370,200,150,150);
}
//function draw eyes
function drawEyes(){
    fill(60,60,60);
    ellipse(265,180,45,55);
    ellipse(375,180,45,55);
    ellipse(320,230,35,22);

}
//function draw mouth
function drawMouth(){
    //fill(60,60,60);
    arc(320,260,165,120,0,PI);
    fill(230,230,230);
    arc(320,260,165,45,0,PI);
}