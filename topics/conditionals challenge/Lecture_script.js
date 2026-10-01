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
let creature = {
    x:150,
    y:150,
    w:120,
    h:120,
    eye:{
        fillColor:"#ffffff",
        size:120/3.5,
        center_x:150,
        center_y:150
    },
    fillStates:{
        happy:"#cbdc5e",
        sad:"#5e5edc",
        angry:"#df5014",
        neutral:"#12e440"

    },
    currentFull:"#12e440"

}
function setup() {
    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    mouseX,mouseY
    let distance = dist(creature.x, creature.y, mouseX, mouseY);
    let mouseIsMoving = (movedX >0 || movedY >0);
    if(distance < creature.w/2 && mouseIsMoving){
        creature.currentFill = creature.fillStates.angry;
    }
    else{
        creature.currentFill = creature.fillStates.neutral;
    }

    background(0);
    push();
    //body
    fill(creature.currentFill);
    ellipse(creature.x, creature.y, creature.w, creature.h);
    fill(creature.eye.fillColor);
    //left eye
    ellipse(creature.eye.center_x-creature.eye.size, creature.eye.center_y, creature.eye.size, creature.eye.size);
    //right eye
    ellipse(creature.eye.center_x+creature.eye.size, creature.eye.center_y, creature.eye.size, creature.eye.size);
pop ();
}
console = console.log();
