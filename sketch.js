const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score=0;
var polygon_img,backgroundImg;
function preload(){
  polygon_img=loadImage("miscball.png");
  backgroundIm();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);






  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {

  if(backgroundImg)
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill(255,75,75);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  noStroke();
        textSize(35)
        fill("black")
        text("Score"+score, width-300, 350)

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill(15,255,91);
  block1.display();
  block1.Score();
  block2.display();
  block2.Score();
  block3.display();
  block3.Score();
  block4.display();
  block4.Score();
  block5.display();
  block5.Score();
  block6.display();
  block6.Score();
  block7.display();
  block7.Score();
  fill(73,255,233);
  block8.display();
  block8.Score();
  block9.display();
  block9.Score();
  block10.display();
  block10.Score();
  block11.display();
  block11.Score();
  block12.display();
  block12.Score();
  fill(255,187,187);
  block13.display();
  block13.Score();
  block14.display();
  block14.Score();
  block15.display();
  block15.Score();
  fill(238,255,134);
  block16.display();
  block16.Score();
  fill(43,103,255);
  blocks1.display();
  blocks1.Score();
  blocks2.display();
  blocks2.Score();
  blocks3.display();
  blocks3.Score();
  blocks4.display();
  blocks4.Score();
  blocks5.display();
  blocks5.Score();
  fill(124,255,187);
  blocks6.display();
  blocks6.Score();
  blocks7.display();
  blocks7.Score();
  blocks8.display();
  blocks8.Score();
  fill(91,211,255)
  blocks9.display();
  blocks9.Score();


 
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
 
  
  
 
  

  



  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,50,50);

  slingShot.display();
}
function keyPressed(){
  if (keyCode === 32){
  
  slingShot.attach(this.ball);
  
  
  }
  
  }



function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}


async function backgroundIm(){

  var back= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var js= await back.json();
  var dt= js.datetime
  var s= dt.slice (11,13)
  console.log(s);



  if(s>=06 && s<- 15){
  
  bg = loadImage("sprites/bg.png")
  }
  
  else{
  
  bg = loadImage("sprites/bg2.png")
  
  
  
  }
  
  backgroundImg=bg;

  
  } 
