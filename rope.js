class Rope {
    constructor(body1,body2,offsetX,offsetY) {
               
            offsetX = offsetX
            offsetY = offsetY
        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offsetX , y:this.offsetY}
           // stiffness : 0.04,
           // length : 10
        }
        
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    
        fly(){
             this.sling.bodyA = null;
       }
        display() {
            if(this.sling.bodyA){
              var pointA = this.rope.bodyA.position;
              var pointB = this.pointB;
              strokeWeight(4);
              line(pointA.x , pointA.y ,pointB.x , pointB.y);
            }
        }
    
    
    }