class boy {
    constructor(x,y,w,h) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, w,h, options);
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      imageMode(CENTER);
      image(this.image,0, 0, 0, 0);
      pop();
    }
  }