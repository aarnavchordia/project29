const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;


   b1 = new Box(600, 255, 30, 30);
   b2 = new Box(570, 255, 30, 30);
   b3 = new Box(540, 255, 30, 30);
   b4 = new Box(510, 255, 30, 30);
   b5 = new Box(630, 255, 30, 30);
   b6 = new Box(660, 255, 30, 30);
   b7 = new Box(690, 255, 30, 30);
   b8 = new Box(600, 215, 30, 30);
   b9 = new Box(570, 215, 30, 30);
  b10 = new Box(540, 215, 30, 30);
  b11 = new Box(630, 215, 30, 30);
  b12 = new Box(660, 215, 30, 30);
  b13 = new Box(600, 175, 30, 30);
  b14 = new Box(570, 175, 30, 30);
  b15 = new Box(630, 175, 30, 30);
  b16 = new Box(600, 135, 30, 30);

  //b17 = new Box(1000,120,30,40);
 // b18 = new Box(1000,120,30,40);
 //b19= new Box(1000,120,30,40);
  //b20 = new Box(1000,120,30,40);
 // b21 = new Box(1000,120,30,40);
 //b22 = new Box(990,120,30,40);
  //b23 = new Box(1000,120,30,40);

  blocks1 = new Box(840, 175, 30, 30);
  blocks2 = new Box(870, 175, 30, 30);
  blocks3 = new Box(900, 175, 30, 30);
  blocks4 = new Box(930, 175, 30, 30);
  blocks5 = new Box(960, 175, 30, 30);
  blocks6 = new Box(870, 135, 30, 30);
  blocks7 = new Box(900, 135, 30, 30);
  blocks8 = new Box(930, 135, 30, 30);
  blocks9 = new Box(900, 95, 30, 30);



  stand1 = new Ground(600, 280, 210, 10);
 stand2 = new Ground(900, 200, 200, 10);
  

  polygon = new Polygon(200, 270, 23, 23);

  slingshot = new SlingShot(polygon.body, {x:200, y:260});


  
  
}

function draw() {
  background("purple");

  Engine.update(engine);  

  fill("black");
  textSize(20);
  text("Drag the Hexagon and realease it towards the Blocks or the boxes ",200,40)

  drawSprites();

  

  polygon.display();

  slingshot.display();

  stand1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  //b17.display();
  //b18.display();
 // b19.display();
 // b20.display();
 // b21.display();
 // b22.display();
 // b23 display();
  



  blocks1.display()
  blocks2.display();
  blocks3.display()
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display()
  blocks8.display()
  blocks9.display()
  

  stand2.display();


}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
  
  
  }
  
  
  function mouseReleased(){
  slingshot.fly();
  
  }