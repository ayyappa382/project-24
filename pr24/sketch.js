const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone1,stone2,stone3;
var rubber1,rubber2,rubber3;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    stone1 = new Stone(200,300,70,70);
    stone2 = new Stone(240,100,70,70);
    stone3 = new Stone(700,240,70,70);


    rubber1= new Rubber(200,200);
    rubber2= new Rubber(820,220);
    rubber3= new Rubber(870,120);

    hammer= new Hammer(100,100)

    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    stone1.display();
    stone2.display();
    stone3.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    hammer.display();
    ground.display();

}



