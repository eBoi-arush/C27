Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;

var engine;
var world;

var ground1;

var roof;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup(){
	createCanvas(600,400);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);	

	ground1 = new fixedBlock(width/2,height,width * 1.5,15);

	roof = new fixedBlock(width/2,50,((65/100) * width),20);

	bob1 = new Bob(160,200,35);
	bob2 = new Bob(230,200,35);
	bob3 = new Bob(300,200,35);
	bob4 = new Bob(370,200,35);
	bob5 = new Bob(440,200,35);

	/*
	rope1Options = {
		pointA = 300,10},
		bodyB = roof.body,
		length = 150,
		stiffness = 0.5
	}
	rope1 = Constraint.create(rope1Options);
	*/

  rope1= new Rope(bob1.body,roof.body,-140, 0);
	rope2= new Rope(bob2.body,roof.body,-70,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,70,0);
	rope5= new Rope(bob5.body,roof.body,140,0);
}

function draw(){
	background(200);

	ground1.show();

	roof.show();

	bob1.show();
	bob2.show();
	bob3.show();
	bob4.show();
	bob5.show();

	
	rope1.show();
	rope2.show();
	rope3.show();
	rope4.show();
	rope5.show();
}

function keyPressed () {
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -0.1 , y:-0});
	}
}
