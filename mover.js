var Mover = function(){
  this.x= 400/2;
  this.y = 400/2;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3,3);
    this.y +=random(-3,3);
};

Mover.prototype.show = function(){
   
    fill(random(10),random(255),random(40));
    noStroke();
    ellipse(this.x, this.y, 10,10);
};
