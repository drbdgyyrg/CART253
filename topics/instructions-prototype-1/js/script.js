/**
 * soccerfield 01
 * Runzhuo
 * 
 * representational prototype
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 604);
    //background(240);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    //drawStrawberryCurve();
    push();
    fill(150, 220, 150);
    stroke(255);
    strokeWeight(2);
    rect(30,30, 840, 544);
    pop();
    drawcircle();
    drawlines();
}
function drawcircle(){
    push();
    fill(150, 220, 150);
    stroke(255);
    strokeWeight(2);
    ellipse(450, 302, 146.4, 146.4);
    pop();
}
function drawlines(){
    push();
    stroke(255);
    strokeWeight(2);
    line(450,30, 450, 574);
    pop();
}
function drawStrawberryCurve(){
    fill(220, 38, 38); // Vibrant strawberry red
  noStroke();
  
  beginShape();
  // Start at the top center dip of the strawberry
  vertex(0, -40); 
  
  // Top right curve and right side down to the bottom tip
  bezierVertex(45, -70, 75, 10, 0, 80);
  
  // Bottom tip back up the left side to the top center dip
  bezierVertex(-75, 10, -45, -70, 0, -40);
  endShape(CLOSE);
    //fill(220, 20, 60);
    //beginShape();
    //beziervertex(200,100);
    //beziervertex(150,90);
    //beziervertex(120,200);
    //beziervertex(200,300);
    //beziervertex(280,200);
    //beziervertex(250,90);
    // beziervertex(200,100);
    //endShape(CLOSE);
}