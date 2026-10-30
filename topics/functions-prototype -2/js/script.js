
"use strict";

function setup() {
    createCanvas(800,400)

}



function draw() {
    background('#180e4e');
    //big dipper
    star(50,180,27);
    star(100,300,26);
    star(260,280,24);
    star(260,140,30);
    star(420,120,25);
    star(570,100,28);
    star(700,130,26);

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
console = console.log();