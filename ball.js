class Ball{
    constructor(x,y,r){
        var option = {
            isStatic:false,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,r,option)
        World.add(world,this.body)
    }
    display(){
        var ballpos = this.body.position
        push()
        translate(ballpos.x,ballpos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}