class movingBlock{
	constructor(x, y, width, height){
		var boxOptions = {
			restitution: 0
		}
		this.body = Bodies.rectangle(x, y, width, height, boxOptions 	)
		this.width = width;
		this.height = height;

		World.add(world, this.body);
	}

	show(){
		var cords = this.body.position;	

		rectMode(CENTER);
		fill("gray");
		rect(cords.x, cords.y, this.width, this.height);
	}
}