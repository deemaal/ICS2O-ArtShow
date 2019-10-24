var Mover = function() {
  this.x = 400 / 2;
  this.y = 400 / 2;

};

Mover.prototype.update = function() {
  this.x += random(-20, 20);
  this.y += random(-20, 20);
};

Mover.prototype.show = function() {

  fill(138, 55, 89);
  noStroke();
  ellipse(this.x, this.y, 5, 5);
};
