const Engine = Matter.Engine;
 const World = Matter.World;
const Bodies = Matter.Bodies;
  var snow = [];
  function preload() {
    img = loadImage("snow2.jpg")
  }
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(img);  
  if(frameCount%3===0) {
    snow.push(new Snow(random(0,800),10,10))
  }
  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }
  Engine.update(engine);
}