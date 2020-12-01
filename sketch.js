
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(400,350,800,20,{isStatic:true});
	World.add(world,ground);

	var paper_options = {
		isStatic: false,
		restitution:0.3,
		friction: 0.5,
		density: 1.2
	}
	paper = Bodies.circle(100,320,30,paper_options);
	World.add(world,paper);

	box1 = new Box(650,330,125,20);
	box2 = new Box(595,300,20,100);
	box3 = new Box(720,300,20,100);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();



  push();
  fill(255,255,0);
  rect(ground.position.x,ground.position.y,800,20);
  pop();


  push();
  fill(255,0,0);
  ellipse(paper.position.x,paper.position.y,30);
  pop();

  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  };
  

	
  drawSprites();
 
}



