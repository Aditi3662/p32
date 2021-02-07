
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var kitchen;
var Boy,Ground;

function preload(){

kitchenImage=loadImage("p32/kitchen.png");



}



function setup() {

  createCanvas(900,500);
  
  Boy=new boy (450,250,10,20);
  Ground=new ground(200,250,10,10)

}

function draw() {
  background(kitchenImage);




Boy.display();
Ground.display();

  drawSprites();
}