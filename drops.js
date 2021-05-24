class Drops{
    constructor(x ,y ,r){
        var options={
           isStatic : false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.rain = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world ,this.rain)

    }


     display(){
       var pos = this.rain.position;
       fill("blue")
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.r)
    }
    update(){
        if(this.rain.position.y > height){
     Matter.Body.setPosition(this.rain ,{x : random(0 ,400) , y : random(50 ,-400)});
        }
    }
}