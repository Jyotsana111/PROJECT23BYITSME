class Box{
    constructor(x,y,width,height){
        var options={
            isStattic : 0.1
        }
        
        this.body = Bodies.rectangle(x,y,width,height, options)
        World.add(world,this.body)

        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        fill ("red");
        rect(pos.x,pos.y,this.width,this.height)


    }
}