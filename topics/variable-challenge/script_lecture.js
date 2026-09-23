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

//let ellipse_Size = 150;
//let rect_Size = 100;

let sun = {
    SunX: 100,
    SunY: 100,
    SunSize: 40,
    R: 255,
    G: 200,
    B: 0
}

let bird = {
    birdX: 400,
    birdY: 200,
    birdSize: 20,
    R: 200,
    G: 20,
    B: 255
}
let BGcolorR = 0;
function setup() {
    createCanvas(600, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(BGcolorR,200,200);
    fill(sun.R, sun.G, sun.B);
    ellipse(sun.SunX, sun.SunY, sun.SunSize, sun.SunSize);
    fill(bird.R, bird.G, bird.B);
    ellipse(bird.birdX, bird.birdY, bird.birdSize, bird.birdSize);
    bird.birdX = bird.birdX + 1;
    bird.birdX = constrain(bird.birdX, 0, width-10);
    console.log(bird.birdX);
    BGcolorR = BGcolorR + 1;

    //ellipse(width/2, height/2, ellipse_Size, ellipse_Size);
    //ellipse(mouseX, mouseY, ellipse_Size/2, ellipse_Size/2);
    //ellipse_Size = ellipse_Size + 1;
    //fill(0, 0, 255);
    //rect(width/2, height/2, rect_Size, rect_Size);
    //rect_Size = rect_Size - 0.5;

}