/**
 * Arrays prototype 02
 * Runzhuo Zhang
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let backgroundImage = undefined;
let castoloImage = undefined;
let burchetImage = undefined;
//speech array
const speech = [
    "Burchet going in with the shoulder charge!",
    "Castolo: I will not let you take it from me!",
    "Burchet: You are a fool to think you can defeat me!",
    "Castolo: Your training is no match for my power!",
    "Burchet: Give it to me!",
    "Castolo: Never!",
    "Burchet: I will kill you!",
    "Castolo: I will kill your whole family!",
    "Burchet: You won't know where my family lives!",
    "Castolo: I know where your kids go to school!"];
    
//which sentence is being displayed?
let speechIndex = 0;

let box = {
        x: 430,
        y: 600,
        width: 800,
        height: 250,
        padding:20,
        fontSize:20
    }

async function setup() {
    createCanvas(1600, 900);
    backgroundImage = await loadImage('assets/images/player_conflict_horizontal.png');
    castoloImage = await loadImage('assets/images/castolo.png');
    burchetImage = await loadImage('assets/images/BurchetReversed.png');
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    image(backgroundImage, width/2 , height/2 );
    characterImage();
    
}
function characterImage(){
    //et x = 0;
    //let y = 0;
    image(castoloImage, 1450, 800, 683/1.5, 1184/1.5);
    image(burchetImage, 130, 780, 742/1.4, 911/1.4);
    dialogueBox();
}

function dialogueBox(){
    
    push();
    fill(255, 255, 255, 200);
    stroke(0);
    strokeWeight(5);
    rect(box.x, box.y, box.width, box.height);
    pop();
    // push();
    // fill(0);
    // textSize(box.fontSize);
    // text(speech[0], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    // pop();

}