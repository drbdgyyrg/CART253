/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";
let startColor = undefined;
let endColor = undefined;
let gradientIndex = undefined;
let i = undefined;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    startColor = color(255, 0, 0);
    endColor = color(0, 0, 255);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
   
    let x = 0;
    let y = 0;
    let Weight = 0;
    let strokeColor = 255;
    let lengthVertical = 0;
    let lengthHorizontal = 0;
    let rotation = 0;
    while(x<width){
        push();
        stroke(strokeColor);
        strokeWeight(Weight);
        rotate(rotation);
        line(x, 0, x, lengthVertical);
        x += 50;
        Weight += .8;
        strokeColor -= 25;
        lengthVertical += 51.7;
        rotation += .2;
        
        pop();
    }
    strokeColor=255;
    Weight=0;
    while(y<height){
        push();
        stroke(strokeColor);
        strokeWeight(Weight);
        rotate(rotation);
        line(0, y, lengthHorizontal, y);
        y += 50;
        Weight += .8;
        strokeColor -= 25;
        lengthHorizontal += 51.7;
        rotation += .2;
        
        pop();
    }
    
    // stroke(0);
    // line(0, 0, 0, height);
    
    // stroke(25);
    // line(50, 0, 50, height);
    
    // stroke(50);
    // line(100, 0, 100, height);
    
    // stroke(75);
    // line(150, 0, 150, height);
    
    // stroke(100);
    // line(200, 0, 200, height);
    
    // stroke(125);
    // line(250, 0, 250, height);
    
    // stroke(150);
    // line(300, 0, 300, height);
    
    // stroke(175);
    // line(350, 0, 350, height);
    
    // stroke(200);
    // line(400, 0, 400, height);
    
    // stroke(225);
    // line(450, 0, 450, height);
    
    // stroke(250);
    // line(500, 0, 500, height);
}
