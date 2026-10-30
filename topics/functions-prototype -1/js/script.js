
"use strict";

function setup() {
    createCanvas(800,400)

}



function draw() {
    background('#180e4e');
    //big dipper
    star(50,180,30);
    star(100,300,30);
    star(260,280,30);
    star(260,140,30);
    star(420,120,30);
    star(570,100,30);
    star(700,130,30);

}
function star(x,y,size){
    push();
    fill('#ffee35');
    noStroke();
    circle(x,y,size);
    fill('#fff261');
    noStroke();
    circle(x,y,size-5);
    fill('#fff895');
    noStroke();
    circle(x,y,size-10);
    fill('#ffffd7');
    noStroke();
    circle(x,y,size-15);
    pop();

}
console = console.log();