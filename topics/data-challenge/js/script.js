/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);
    carData = await loadJSON("assets/data/cars.json");
    dinosaurData = await loadJSON("assets/data/dinosaurs.json");
    // langData = await loadJSON("assets/data/lang.json");

}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);
//     if (lang === "fr") {
//     carName = langData.instructions.fr;
// }
// else if (lang === "en") {
//     carName = langData.instructions.en;
// }
    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();

}

/**
 * Generate a new car name
 */
function mousePressed() {
let car = random(carData.cars);
let dinosaur = random(dinosaurData.dinosaurs);
carName = car + " " + dinosaur; 
}