class fixedBlock{
	constructor(x, y, width, height){
		var groundOptions = {
			isStatic: true  
		}
		this.body = Bodies.rectangle(x, y, width, height, groundOptions	)
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