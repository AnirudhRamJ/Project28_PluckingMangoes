const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango10, mango11, mango12;
var world, boy;
// Declare launcherObject variable here
var launcherObject;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(width / 2, 600, width, 20);
	stoneObj = new Stone(235, 420, 30);
	// Create launcherObject here
	launcherObject = new Rope(stoneObj.body, { x: 235, y: 420 });
	
	treeObj = new Tree(1050, 580);
	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1170, 130, 30);
	mango3 = new Mango(1010, 140, 30);
	mango4 = new Mango(1000, 70, 30);
	mango5 = new Mango(1100, 70, 30);
	mango6 = new Mango(1000, 230, 30);
	mango7 = new Mango(900, 230, 40);
	mango8 = new Mango(1140, 150, 40);
	mango9 = new Mango(1100, 230, 40);
	mango10 = new Mango(1200, 200, 40);
	mango11 = new Mango(1120, 50, 40);
	mango12 = new Mango(900, 160, 40);

	Engine.run(engine);
}

function draw() {

	background(230);
	textSize(25);
	// Add code for displaying text here!
	text("Press Space to get a second chance to Play!!", 50, 50);
	image(boy, 200, 340, 200, 300);

	treeObj.display();
	stoneObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	groundObject.display();
	launcherObject.display();

	detectCollision(stoneObj, mango1);
	detectCollision(stoneObj, mango2);
	detectCollision(stoneObj, mango3);
	detectCollision(stoneObj, mango4);
	detectCollision(stoneObj, mango5);
	detectCollision(stoneObj, mango6);
	detectCollision(stoneObj, mango7);
	detectCollision(stoneObj, mango8);
	detectCollision(stoneObj, mango9);
	detectCollision(stoneObj, mango10);
	detectCollision(stoneObj, mango11);
	detectCollision(stoneObj, mango12);
}

// Create mouseDragged function here
function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
}

// Create mouseReleased function here
function mouseReleased() {
	launcherObject.fly();
}

// Create keyPressed function here
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 });
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone, lmango) {

	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}