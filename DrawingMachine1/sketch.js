let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(68, 182, 184);
  drawGrid();
  noFill();
}

function draw() {

  background(68, 182, 184, 5);
  strokeWeight(strokeWidth);


  noiseOffset += 0.03;
  strokeWidth = noise(noiseOffset) * 50;

    line(mouseX, mouseY, pmouseX, pmouseY);

     stroke(map(mouseX, 250, 600, 200, 100,))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);




}

function keyTyped() {
  if (key === 's') {

    saveCanvas('filename', 'png');
  } else if (key === 'c') {
    clear();

  }

  return false;

}

function drawGrid() {
  numCells = 20;
  for(let i = 0; i <= width; i += width / numCells) {
    rect(i, 50, 50, width / numCells, height / numCells);
    rect(i, 20, 20, width / numCells, height / numCells);
    rect(i, 200, 200, width / numCells, height / numCells);


  }

}
