class Bob{
	constructor(x, y, radius){
		var circleOptions = {
			isStatic: false,
			restitution: 0.8
		}
		this.body = Bodies.circle(x, y, radius, circleOptions);
		this.radius = radius;

		World.add(world, this.body);
	}

	show(){
		var cords = this.body.position;

		fill("gray");
		ellipseMode(RADIUS);
		circle(cords.x, cords.y, this.radius);
	}
}