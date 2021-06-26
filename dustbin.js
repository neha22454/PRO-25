class Dustbin {

    constructor(x, y ,width,height) {
     
      var options = {'restitution':0,'friction':1,'density':0.1 , isStatic:true}
      
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     imageMode(CENTER)
     fill(255)
     image(this.image,0,0,this.width,this.height)
    }
  };
