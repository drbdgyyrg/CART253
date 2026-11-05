/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let startColor = undefined;
let endColor = undefined;
let gradientIndex = undefined;
let y = undefined;
let i = undefined;

async function setup() {
    createCanvas(500, 500);
    //clownImage = await loadImage("assets/images/clown.png");
    imageMode(CENTER);
    startColor = color(255, 0, 0);
    endColor = color(0, 0, 255);

}
//scatter ellipes crrating objects
function drawEllipse() {
    push();
    let x = random (0,width);
    let y = random (0,height);
    fill(random(200,255), random(200,255), random(200,255));
    ellipse(x, y, random(3, 10), random(3, 10));
    pop();

}

/**
 * Draws the clown image and updates its position.
 */
function draw() {
    background(100);
    //scatter ellipse using loops
    for(let i=0; i<200; i++){
        drawEllipse();
    }
    //make the ellipse stop moving
    noLoop();
    gradientIndex = 0;
    y=0;
//     while(gradientIndex < 1) {
//     let rectColor = lerpColor(startColor, endColor, gradientIndex);
//     noStroke();
//     fill(rectColor);
//     rect(0, y, width, 2);
//     gradientIndex += 0.004;
//     y+=2;
// }
i=0;
y=height/2;
while(i<9){
    
    text(i,width/2,y);
    y+=20;

    i=i+1; //i++
}
y = height/2;
for(let i=0; i<9; i++){
    text(i,20,y);
    y+=20;
}
}