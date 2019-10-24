let sceneNum = 0;
let dot = new Mover();
let dots = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum == 0) {
    background(215, 112, 215);
    fill(7, 14, 145);
    textSize(35);
    text("The Art Show", 100, 150)
    textSize(20);
    text("Click anywhere to Start", 100, 250)
  } else if (sceneNum == 1) {
    background(215, 112, 215);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }
  }
}
