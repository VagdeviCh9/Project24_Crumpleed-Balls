
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(50,350);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow"

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground1);

	groundSprite1=createSprite(width-200, 650, 220,20);
	groundSprite1.shapeColor="red"

	boxSprite1=createSprite(width-100, 590, 20,100);
	boxSprite1.shapeColor="red"

	boxSprite2=createSprite(width-300, 590, 20,100);
	boxSprite2.shapeColor="red"

	ground = Bodies.rectangle(width-200, 650, 400, 20 , {isStatic:true} );
	World.add(world, ground);

	box1 = Bodies.rectangle(width-100, 590, 20,100,  {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(width-300, 590, 20,100,  {isStatic:true} );
	World.add(world, box2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  drawSprites();
  keyPressed(); 
  
  console.log(ball.body.position.x + " " + ball.body.position.y);
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x: 40, y: -6})
	}
}

