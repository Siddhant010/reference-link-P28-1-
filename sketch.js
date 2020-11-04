const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine; 
var world; 
var stone;
var ground; 
var mango1, mango2, mango3, mango4, mango5; 
var tree; 
var boy; 
var origin;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mango1 = new Mango(600, 200, 10, 10);

}

function draw(){
    Engine.update(engine);
    strokeWeight(4);

    console.log("The NBA Draft will take place on the morning of the 19th of november 2020 as per IST");

    mango1.diplay();
    
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){

    origin.launch();

}