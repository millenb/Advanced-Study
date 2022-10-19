function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  noLoop();
}

function draw() {
  drawTarget(width * .55, height * .4);
}

function drawTarget(xloc, yloc){
  let circleGrayVals = [0, 50, 100, 150, 200, 255];
  let numCircles = circleGrayVals.length;
  let spaceBetweenCircles = 20;
  for (let i = 0; i < numCircles; i++) {
    fill(circleGrayVals[i]);
    circle(xloc, yloc, 200 - i * spaceBetweenCircles);
  }
}
  