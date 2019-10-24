function setup() {
  createCanvas(400, 400);
  background(100, 100, 150);
}

function draw() {
  var x = random(800);
  var y = random(800);

  var r = random(255);
  var g = random(255);
  var b = random(255);

  fill(r, g, b);
  ellipse(x, y, 10);
}
