let array = [];
let strokeWidth = 8;



function setup() {
  background(68, 182, 184);
  createCanvas(600, 500);


}

function draw() {

  background(68, 182, 184, 4);

  if (mouseIsPressed) {
    strokeWeight(strokeWidth);
      line(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY);
    }
    //line(mouseX, mouseY, pmouseX, pmouseY);

     stroke(map(mouseX, 250, 600, 200, 100,))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

}


function keyTyped() {
  if (key === 's') {

    saveCanvas('filename', 'png');
  } else if (key === 'c') {
    clear();

  }


}
