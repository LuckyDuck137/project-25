var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,380,1200,35);
	paper= new Paper(50,360,50);
	dustbin1= new Dustbin(900,210,10,170);
	dustbin2= new Dustbin(775,210,10,170);
	dustbin3= new Dustbin(783,210,120,170);
	//bin = new Bin(835,315,125,110);
	Engine.run(engine);
}


function draw() {
   background("grey");
 Engine.update(engine);
 paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 //bin.display();
 
 
 
 
 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		//Matter.Body.setStatic(paper.body,false);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:47,y:-42});
	}
}




