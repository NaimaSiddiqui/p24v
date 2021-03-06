const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper; 
var engine, world;
var dustbin1, dustbin2, dustbin3;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin1 = new DustBin(400, 690, 200, 20, "green");
  dustbin2 = new DustBin(500, 650, 20, 100, "green");
  dustbin3 = new DustBin(295, 650, 200, 20, "green");

  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
    rectMode(CENTER);
    background(0);
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    paper.display();

  }


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
