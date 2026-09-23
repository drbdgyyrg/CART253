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
    drawarc();
    drawcircle();
    drawlines();
    drawspots();
}
function drawspots(){
    push();
    fill(255);
    noStroke();
    circle(120, 302, 3.5);
    circle(780, 302, 3.5);
    circle(450, 302, 5);
    pop();
}
function drawarc(){
    push();
    fill(150, 220, 150);
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