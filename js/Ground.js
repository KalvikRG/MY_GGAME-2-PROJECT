class Ground
{
    constructor(x,y,width,heigth){

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,heigth,options)
        this.width = width
        this.heigth = heigth
        World.add(world, this.body);
    }   

    display()
    {
        var pos = tihs.body.position
        rectMode(CENTER);
        fill("black")
        rect(pos.x,pos.y,this.heigth,this.width)
    }
}