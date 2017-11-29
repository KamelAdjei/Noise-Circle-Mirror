//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates
let size = 50;
let x =0;
function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window
}

function draw() {
  background(120);
x=x+1;
  if (x > width) {
      x = 0;
    }
fill(255);
  ellipse (x,height/2,size,size);
}
