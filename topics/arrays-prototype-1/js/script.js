
"use strict";
let angle = 0;
let stars = [];
let i = undefined;
function setup() {
    createCanvas(2500,2500);
    //rotate base on degrees
    angleMode(DEGREES);

}



function draw() {
    background('#180e4e');
    
    tinyStarsScatter();
    
    
    
    //big dipper rotate alongside the North Star
    push();
    //relocate the origin of the rotation
    translate(1250,1250);
    //apply the rotation
    rotate(angle);
    //adding objects
    tinyStarsScatter();
    bigDipper();
    pop();
    //adding rotation animation
    angle += 0.5;
    //adding NorthStar
    star(1250, height/2,40);


}
//create tiny stars for the background
function drawtinyStars(){
    push();
    let x = random(0,width);
    let y = random(0,height);
    fill(random(140,200),random(140,200),255);
    circle(x,y,random(3,10));
    
    
    pop();
}
//scatter tiny stars using arrays and for loops
function tinyStarsScatter(){

    for (let i = 0; i < 50; i++){
        drawtinyStars();
    }
    
    //noLoop();
    
}

//create stars for big dipper and North Star
function star(x,y,size){
    //to contain 4 layers to make a color gradient
    push();
    fill('#ffee3568');
    noStroke();
    circle(x,y,size);
    fill('#fff2615e');
    noStroke();
    circle(x,y,size-5);
    fill('#fff89567');
    noStroke();
    circle(x,y,size-10);
    fill('#ffffd761');
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