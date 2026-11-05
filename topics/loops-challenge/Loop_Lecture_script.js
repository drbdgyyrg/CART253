/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let clownImage = undefined;
let xPos = 0;

async function setup() {
    createCanvas(500, 500);
    clownImage = await loadImage("assets/images/clown.png");
    imageMode(CENTER);

}


/**
 * Draws the clown image and updates its position.
 */
function draw() {
    background(100);
    let x = 20;
    let y = 20;
    let imageWidth = 40;
    
    while(x<width){
        image(clownImage, x, y, imageWidth, imageWidth); 
        
        // while(y<height){
        //     image(clownImage, x, y, imageWidth, imageWidth); 
        //     y=y+imageWidth+5;
        // }
        x=x+imageWidth+5;
        y=20;
    }
    //xPos += 1; // Move the clown to the right
}