// variables
var canvas;
var music;
var box;
var platform1;
var platform2;
var platform3;
var plaatform4;
var edges;
function preload(){

    music=loadSound("music.mp3");
    
    
}


function setup(){
    // creating sprites
    canvas = createCanvas(800,600);
    platform1=createSprite(100,550,200,20);
    platform2=createSprite(300,550,200,20);
    platform3=createSprite(500,550,200,20);
    platform4=createSprite(700,550,200,20);
    box=createSprite(400,300,30,30);
    
    
    //velocities

    box.velocityX=5;
    box.velocityY=5; 

}

function draw() {
    background(rgb(0,0,0));
    edges=createEdgeSprites();
    //colors
    platform1.shapeColor=("blue");
    platform2.shapeColor=("green");
    platform3.shapeColor=("red");
    platform4.shapeColor=("yellow");
  


   


    // changing colors

if(box.isTouching(platform1)){
    box.shapeColor="blue";
    music.play();
}   
if(box.isTouching(platform2)){
    box.shapeColor="green"; 
    music.stop();
}   
if(box.isTouching(platform3)){
    box.shapeColor="red";

}   
if(box.isTouching(platform4)){
    box.shapeColor="yellow";
} 

 // bouncing

 box.bounceOff(platform1);
 box.bounceOff(platform2);
 box.bounceOff(platform3);
 box.bounceOff(platform4);
 box.bounceOff(edges); 


 //sound
 
 


    drawSprites();
}
