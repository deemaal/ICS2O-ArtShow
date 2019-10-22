var Mover = function(){
  this.x= 400/2;
  this.y = 400/2;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3,3);
    this.y +=random(-3,3);
};

Mover.prototype.show = function(){
   
     
    noStroke();
  if(random(1)<0.5){
  fill(random(255)%100);
    rect(this.x, this.y,20,20);
  }else{
    fill(200,30,30);
  ellipse(this.x,this.y,30,30);
  }
  
};
