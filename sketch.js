let array = [];

function setup() {
  createCanvas(600, 600);
  background(68, 182, 184);
  strokeWeight(5)
  noFill();
}

function draw() {
  if (mouseIsPressed == true) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX, mouseY]);
    // stroke(map(mouseX, 0, 600, 0, 255, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);


  }


}

function keyTyped() {
  if (key === 's') {

    saveCanvas('filename', 'png');
  } else if (key === 'd') {

background(68, 182, 184);

beginShape();
    for(let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();


  }

  return false;

}
