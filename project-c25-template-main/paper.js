class paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
            friction:0,
            dinsity:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y,(this.r-20)/2, options);
 		World.add(world, this.body);
         this.image=loadImage("paper.png");

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}