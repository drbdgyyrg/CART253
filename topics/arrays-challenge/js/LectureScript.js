/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let arrayOfOddNumbers = [1,3,5,7,9,11,13,15]
let currentArrayPosition = 0;
let sentence = "hello CART 253";
let dialogOptions = ["yes","no","maybe","never"];
let dialogOptionsIndex = 0;
let square={
    x:200,
    y:100,
    w:20,
    h:50
}
function createSquare (){
    
}

function setup() {
    createCanvas(500,500);
    arrayOfOddNumbers[3]=21

}

function displayText(referenceString){
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(referenceString, width/2, height/2);
    pop();
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    displayText(dialogOptions[dialogOptionsIndex]);
    let newSquare = createSquare();

}
function mousePressed(){
    dialogOptionsIndex=dialogOptionsIndex+1;
    if(dialogOptionsIndex>=4){
        dialogOptionsIndex=0;
    }
    
}
function keyPressed(){

}