/**
 * variables-challenge
 * Runzhuo Zhang
 * 
 * on class challenge
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
let bird = {
    x: 10,
    y: 15,
    size: 20,
    r:228,
    g:229,
    b:28
}
let BGcolorB = 100;
let BGcolorG = 0;
let BGcolorR = 0;

let rage = {
    x: 0,
    y: 0
    

}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160 + BGcolorR, 180 + BGcolorG, 200 + BGcolorB);
  BGcolorB = BGcolorB - 1;
  BGcolorG = BGcolorG - 1;
  BGcolorR = BGcolorR - 1;
  // Draw Mr. Furious as a coloured circle
  mrFurious.x = mrFurious.x + random(-rage.x, +rage.x);
  mrFurious.y = mrFurious.y + random(-rage.y, +rage.y);
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  rage.x = rage.x + 0.1;
  rage.x =constrain(rage.x, 0, 10);
  rage.y = rage.y + 0.03;
  rage.y = constrain(rage.y, 0, 3);
  mrFurious.fill.r = mrFurious.fill.r + 1;
  mrFurious.fill.g = mrFurious.fill.g - 1;
  mrFurious.fill.b = mrFurious.fill.b - 1;
  
  pop();
  //bird
  push();
  fill(bird.r, bird.g, bird.b);
  ellipse(bird.x, bird.y, bird.size, bird.size/2);
  bird.x = bird.x + 2.2;
  bird.x = constrain(bird.x, 0, width-10);
  console.log(bird.x);
  pop();
}