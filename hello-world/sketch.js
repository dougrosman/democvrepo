// atan2(), A triangle chases the mouse position. This also uses the lerp() function to create an easing effect

let shapePos;

function setup() {
  createCanvas(640, 480);
  rectMode(CENTER);
  shapePos = createVector(width / 2, height / 2);
}

function draw() {
  background(100);

  const mousePos = createVector(mouseX, mouseY);
  const angle = atan2(mousePos.y - shapePos.y, mousePos.x - shapePos.x);

  push()
  translate(shapePos.x, shapePos.y);
  rotate(angle + PI / 2);
  triangle(0, -20, -10, 20, 10, 20)
  pop()

  // this line keeps updating the shape position to be closer to the mouse
  shapePos = p5.Vector.lerp(shapePos, mousePos, 0.05);

}
