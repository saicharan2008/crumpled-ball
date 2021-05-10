
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new paper(200,100,100)
    var render=Render.create({
		element:document.body,
        engine:engine,
		options:{
			width:1300,
			height:134,
			wireFrames:false
		}
	})
	Engine.run(engine);
   Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background(230);
 
console.log(paperobj.y)
  groundObject.display();
  dustbinObj.display();
  paperobj.display();

}

function mouseDragged(){
	Matter.Body.setPosition(paperobj.body,{x:mouseX,y:mouseY});
}
