class Paper{

    constructor(x,y){
        var options = {
            isStatic:false,
            restitution: 0.1,
            friction: 0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y, 50, options);
        
        World.add(world, this.body);
    }

    display(){

    var pos = this.body.position;

    push()
    translate(pos.x,pos.y)
    fill('green')
    ellipseMode(RADIUS)
    ellipse(0, 0,15,15)
    pop()


    }

}