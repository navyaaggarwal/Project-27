
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObject;
var bobObject1 , bobObject2 , bobObject3 , bobObject4 , bobObject5;
var rope1;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 roofObject = new Roof(350,200,350,40);
	 
	 bobObject1 = new Bob(350,300,60);
	 bobObject2 = new Bob(300,300,60);
	 bobObject3 = new Bob(350,300,60);
	 bobObject4 = new Bob(400,300,60);
	 bobObject5 = new Bob(450,300,60);

	 ground = new Roof(400,500,800,10);

	 //rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0 )
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  //rope1.display();

  ground.display();
 
}



