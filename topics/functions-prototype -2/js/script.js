
"use strict";
let angle = 0;
function setup() {
    createCanvas(2500,2500);
    //rotate base on degrees
    angleMode(DEGREES);

}



function draw() {
    background('#180e4e');
    //big dipper rotate alongside the North Star
    push();
    //relocate the origin of the rotation
    translate(1250,1250);
    //apply the rotation
    rotate(angle);
    //adding objects
    bigDipper();
    pop();
    //adding rotation animation
    angle += 0.5;
    //adding NorthStar
    star(1250, height/2,40);


}
function star(x,y,size){
    //to contain 4 layers to make a color gradient
    push();
    fill('#ffee35a9');
    noStroke();
    circle(x,y,size);
    fill('#fff261b1');
    noStroke();
    circle(x,y,size-5);
    fill('#fff895d8');
    noStroke();
    circle(x,y,size-10);
    fill('#ffffd7f1');
    noStroke();
    circle(x,y,size-15);
    pop();
    return;

}
function bigDipper(){
    push();
    star(50,1040,22);
    star(100,1160,21);
    star(260,1140,19);
    star(260,1000,25);
    star(420,980,20);
    star(570,960,23);
    star(700,990,21);
    pop();
    return;
}
// function northStar (x,y,size){
//     push();
//     fill('#ffee35a9');
//     noStroke();
//     circle(x,y,size);
//     fill('#fff261b1');
//     noStroke();
//     circle(x,y,size-5);
//     fill('#fff895d8');
//     noStroke();
//     circle(x,y,size-10);
//     fill('#ffffd7f1');
//     noStroke();
//     circle(x,y,size-15);
//     pop();
//     return;

// }
console = console.log();