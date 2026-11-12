/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// let flowerOne = {
// x: 100,
// width: 20,
// height: 250,
// y: 500 - 250,
// petal_width: 75,
// fillStem:'green',
// strokePetal:'black',
// fillPetal:'pink'
// }
// let flowerTwo = {
// x: 200,
// width: 20,
// height: 150,
// y: 500 - 150,
// petal_width: 75,
// fillStem:'green',
// strokePetal:'black',
// fillPetal:'deeppink'
// }

// let flowerThree = {
// x: 350,
// width: 20,
// height: 100,
// y: 500 - 100,
// petal_width: 75,
// fillStem:'green',
// strokePetal:'black',
// fillPetal:'white'
// }
// let flowerFour = createFlower(400, 500 - 200, 15, 300, 55);
// let flowers = [flowerOne, flowerTwo, flowerThree, flowerFour]

let flowers = [];

async function setup() {
createCanvas(500, 500);
let jsonData = await loadJSON("assets/data/flowers.json");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background('dodgerblue');
for (let i = 0; i < flowers.length; i++) {
  drawFlower(jsonData.flowers[i]);
}
}

function mousePressed() {
  let newFlower = createFlower(mouseX, mouseY, random(10, 20), random(150, 250), random(60, 90));
  flowers.push(newFlower);
}

function drawFlower(flower) {
  //stem
  push();
  noStroke();
  fill(flower.fillStem);
  rect(flower.x, flower.y, flower.width, flower.height);
  pop();
  //petal
  push();
  stroke(flower.strokePetal);
  fill(flower.fillPetal);
  ellipse(flower.x + flower.width / 2, flower.y - flower.petal_width / 2, flower.petal_width, flower.petal_width);
  pop();
}

function createFlower(stemX, stemY,stemW, stemH,petalW){
  return {
    x: stemX,
    y: stemY,
    width: stemW,
    height: stemH,
    petal_width: petalW,
    fillStem: 'green',
    strokePetal: 'black',
    fillPetal: 'pink'
  };
}