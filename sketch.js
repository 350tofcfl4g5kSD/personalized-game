var score=0;
var key1
var key2
var key3
var key4
var key5
var over
function setup(){
  createCanvas(1000,1000)
  
  var tree= createSprite(500,500);
  tree.addImage("xx",treeImage)
   key1=createSprite(250,350);
  key1.addImage("a",key1Image)
  key1.scale=0.01;
   key2 = createSprite(700,700);
  key2.addImage("b",key2Image)
  key2.scale= 0.01;
   key3 = createSprite(500,600)
  key3.addImage("c",key3Image)
  key3.scale=0.050;
  
   key4 =createSprite(0,500)
  key4.addImage("d",key4Image)
  key4.scale=0.050;

  key5=createSprite(500,500)
  key5.addImage("e",key5Image)
  key5.scale=0.022
 over=createSprite(500,500)
over.addImage("F",overImage);
over.visible=false;

}

function draw () {
  background("lightBlue");
  drawSprites();
  fill("red");
  textSize(20);
  text ("score = "+score,750,250)
  if(mousePressedOver(key1)) {
    score=score+1;

  }
if(mousePressedOver(key2)){
  score=score+2;

}
if(mousePressedOver(key3)) {
  score=score+1;

}
if(mousePressedOver(key4)){
  score=score+1

}
if(mousePressedOver(key5)){
score=score+1;  

}
if(score===50){
  over.visible=true;

}
}
function preload(){
  treeImage=loadImage("tree.jpg")
  key1Image=loadImage("key1.jpg")
  key2Image=loadImage("key2.jpg")
  key3Image=loadImage("key3.jpg")
  key4Image=loadImage("key4.jpg")
  key5Image=loadImage("key5.jpg")
  key6Image=loadImage("key6.jpg")
  key7Image=loadImage("key7.png")
  overImage=loadImage("over.png")
}