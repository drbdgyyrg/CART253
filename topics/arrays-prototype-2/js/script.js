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

//a box variable to hold the position and size of the dialogue box
let box = {
        x: 430,
        y: 600,
        width: 800,
        height: 250,
        padding:20,
        fontSize:50
    }

async function setup() {
    createCanvas(1600, 900);
    //put image assets in
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
    //information boxes
    CastoloBox(1250, 80, 300, 150);
    BurchetBox(50, 80, 300, 150);
    dialogueBox();
    characterImage();
    
}
//display the character images with right size and position
function characterImage(){
    
    image(castoloImage, 1450, 800, 683/1.5, 1184/1.5);
    image(burchetImage, 130, 780, 742/1.4, 911/1.4);
    
    
}

function dialogueBox(){
    //create a box with a transparent background and black border
    push();
    fill(255, 255, 255, 150);
    stroke(0);
    strokeWeight(5);
    rect(box.x, box.y, box.width, box.height);
    pop();
    //display the text in the box
    push();
    fill(0);
    textSize(box.fontSize);
    textAlign(CENTER, CENTER);
    textFont('Georgia');
    text(speech[speechIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    pop();

}
//Press the mouse to proceed the speech with array
function mousePressed(){
    //increment the speech index
    speechIndex++;
    //if the index is greater than the length of the array, reset it to 0
    if(speechIndex >= speech.length){
        speechIndex = 0;
    }
}
function CastoloBox(x,y,sizeX,sizeY){
    push();
    fill(200, 200, 255, 170);
    stroke(0);
    strokeWeight(2);
    rect(x, y, sizeX, sizeY);
    pop();
    //display the text in the box
    push();
    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    textFont('fontBold');
    text("Castolo", x + 10, y-40, sizeX - 10, sizeY - 10);
    text("FW: Age 25", x + 10, y + 10, sizeX - 20, sizeY - 20);
    text("Brazil", x + 10, y + 60, sizeX - 20, sizeY - 20);
    pop();
}
function BurchetBox(x,y,sizeX,sizeY){
    push();
    fill(255, 200, 200, 170);
    stroke(0);
    strokeWeight(2);
    rect(x, y, sizeX, sizeY);
    pop();
    //display the text in the box
    push();
    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    textFont('fontBold');
    text("Burchet", x + 10, y-40, sizeX - 10, sizeY - 10);
    text("RMF: Age 29", x + 10, y + 10, sizeX - 20, sizeY - 20);
    text("Australia", x + 10, y + 60, sizeX - 20, sizeY - 20);
    pop();
}