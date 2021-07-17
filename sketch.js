//namespacing : module Alias
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;
var ball, ground;



function setup()
{
  createCanvas(400,400);

 //create you own engine
  myEngine = Engine.create();

  //create your own world: myWorld is myEngine's world
  myWorld = myEngine.world;

  var ball_option = {

    restitution: 0.8,
    frictionAir: 0.01
  }

  var ground_option = {
    isStatic: true

  }
  //create the ball
  ball = Bodies.circle(100, 10, 20, ball_option);

  //create the ground
  ground = Bodies.rectangle(200, 370, 400, 20, ground_option); 

  //add the bodies inside the world : myWorld
  World.add(myWorld, ball);
  World.add(myWorld, ground);

  console.log(ball);


}

function draw() 
{
  background(51);
  Engine.update(myEngine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
 
}

