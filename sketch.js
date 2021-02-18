var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    packageSprite.visible=true;

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
    //packageSprite.x=helicopterSprite.x


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

    var options = {
		restitution:0.4,
	    isStatic:true
	}

	packageBody = Bodies.circle(helicopterSprite.x , 200 , 5 ,options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	


 	boxleftSprite=createSprite(300, 610, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(320, 610, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(400, 650, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(400, 635, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(500 , 610, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(480 , 610, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x= helicopterSprite.x

  

   keyPress();

  drawSprites();
  
  
 
}

function keyPress(){
	if(keyDown("left_arrow")){
		helicopterSprite.x=helicopterSprite.x-2;
	}else if(keyDown("right_arrow")){
	   helicopterSprite.x=helicopterSprite.x+2;
   }
	if(keyDown("down_arrow")){
   
	 Matter.Body.setStatic(packageBody,false)
	 
	}
}