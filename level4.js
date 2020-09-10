class Level4 {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x,y,30,50,options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(79,280,249);
      rect(pos.x, pos.y, 30, 50);
    }
  };