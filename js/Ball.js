class Ball 
{constructor(x,y,r){

var options ={
    isStatic:false ,
    'restitution':0.4,
    'density':0.4,
    'friction':1.0,
}

this.body = Bodies.cricle(x,y,options);
this.r = r;
World.add(world , this.body)

}

display(){

 var pos = this.body.position
 Push()
 translate(pos.x , pos.y)
 ellipesMode(RADIUS)
 fill("red")
 ellipse(0,0,this.r,this.r)
 Pop();
}

}