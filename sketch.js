const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var PLAY = 1;
var END = 0;
var gameState = PLAY;


var pc;
var engine, world;
var backgroundImg
var pc,pc_upidle,pc_downidle,pc_leftidle,pc_rightidle;
var pc_upwalk,pc_downwalk,pc_leftwalk,pc_rightwalk;
var npc,npcAnim,npc;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19;
var wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38;

var box,youwin,trophy

var gameOver, restart;


function preload() {
backgroundImg=loadImage("ground.png")
pc_downidle=loadAnimation("Character without weapon/idle/idle down1.png","Character without weapon/idle/idle down2.png")
pc_leftidle=loadAnimation("Character without weapon/idle/idle left1.png","Character without weapon/idle/idle left2.png")
pc_rightidle=loadAnimation("Character without weapon/idle/idle right1.png","Character without weapon/idle/idle right2.png")
pc_upidle=loadAnimation("Character without weapon/idle/idle up1.png","Character without weapon/idle/idle up2.png")
pc_downwalk=loadAnimation("Character without weapon/walk/walk down1.png","Character without weapon/walk/walk down2.png","Character without weapon/walk/walk down3.png","Character without weapon/walk/walk down4.png")
pc_upwalk=loadAnimation("Character without weapon/walk/walk up1.png","Character without weapon/walk/walk up2.png","Character without weapon/walk/walk up3.png","Character without weapon/walk/walk up4.png")
pc_leftwalk=loadAnimation("Character without weapon/walk/walk left1.png","Character without weapon/walk/walk left2.png","Character without weapon/walk/walk left3.png","Character without weapon/walk/walk left4.png")
pc_rightwalk=loadAnimation("Character without weapon/walk/walk right1.png","Character without weapon/walk/walk right2.png","Character without weapon/walk/walk right3.png","Character without weapon/walk/walk right4.png")

npcAnim=loadAnimation("walk01.png","walk02.png","walk03.png","walk04.png","walk05.png","walk06.png")

gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");
youwinImg =loadImage("R.png")
trophy = loadImage("trophy.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  pc=createSprite(220,705,20,20)
  pc.addAnimation("pc",pc_downidle)
  pc.scale=2
  pc.setCollider("circle",0,0,5)


  box=createSprite(1320,20,20,20)
  box.addImage(trophy)
  box.scale=0.2


  engine = Engine.create();
  world = engine.world;
  
wall1=createSprite(955,685,1250,5)
wall2=createSprite(1590,345,20,685)
wall3=createSprite(10,345,20,685);
wall4=createSprite(620,8,1200,5);
wall5=createSprite(180,85,20,145)
wall6=createSprite(525,150,20,140)
wall7=createSprite(350,50,20,80)
wall8=createSprite(260,160,185,5)
wall9=createSprite(850,50,20,80)
wall10=createSprite(680,80,350,5)
wall11=createSprite(750,140,450,5)
wall12=createSprite(610,215,150,5)
wall13=createSprite(1510,10,150,5)
wall14=createSprite(65,685,150,5)
wall15=createSprite(1415,190,20,230)
wall16=createSprite(1500,300,150,5)
wall17=createSprite(1500,500,200,5)
wall18=createSprite(1325,365,200,5)
wall19=createSprite(1415,400,20,80)
wall20=createSprite(1195,570,400,5)
wall21=createSprite(1230,350,20,320)
wall22=createSprite(1110,80,250,5)
wall23=createSprite(1230,110,20,60)
wall24=createSprite(1115,320,250,5)
wall25=createSprite(1110,500,250,5)
wall26=createSprite(1230,625,20,120)
wall27=createSprite(985,185,20,200)
wall28=createSprite(990,375,20,115)
wall29=createSprite(830,425,300,5)
wall30=createSprite(845,525,20,200)
wall31=createSprite(910,625,150,5)
wall32=createSprite(845,255,20,100)
wall33=createSprite(685,350,15,150)
wall34=createSprite(530,280,300,5)
wall35=createSprite(420,520,470,5)
wall36=createSprite(500,610,350,5)
wall37=createSprite(325,645,15,75)
wall38=createSprite(180,520,20,200)



gameOver = createSprite(775,210);
gameOver.addImage(gameOverImg);

restart = createSprite(750,450);
restart.addImage(restartImg);

gameOver.scale = 2;
restart.scale = 2;

gameOver.visible = false;
restart.visible = false;

youwin = createSprite(775,210)
youwin.addImage(youwinImg)
youwin.scale =1
youwin.visible = false;


npc= new Group();




  
}

function draw() {
  wall1.debug = false
  pc.debug = false
 
 

  background(backgroundImg);
  Engine.update(engine);


  if(pc.collide(box)){

restart.visible = true;
youwin.visible =true;
pc.destroy();

npc.visible=false;

if(mousePressedOver(restart)) {
  reset();
  }
  }



  

if(keyDown("UP_ARROW")){
  pc.addAnimation("upwalk",pc_upwalk)
  pc.y= pc.y-2

}

if(keyDown("DOWN_ARROW")){

  pc.y=pc.y+2
}

if(keyDown("LEFT_ARROW")){
  pc.x=pc.x-2
}



if(keyDown("RIGHT_ARROW")){
  pc.x=pc.x+2
}



if(pc.isTouching(npc)){
  gameState = END;
  

}
 if (gameState === END) {
gameOver.visible = true;
restart.visible = true;
npc.visible=false
pc.destroy()

}
if(mousePressedOver(restart)) {
  reset();

  
}




pc.collide(wall1)
pc.collide(wall2)
pc.collide(wall3)
pc.collide(wall4)
pc.collide(wall5)
pc.collide(wall6)
pc.collide(wall7)
pc.collide(wall8)
pc.collide(wall9)
pc.collide(wall10)
pc.collide(wall11)
pc.collide(wall12)
pc.collide(wall13)
pc.collide(wall14)
pc.collide(wall15)
pc.collide(wall16)
pc.collide(wall17)
pc.collide(wall18)
pc.collide(wall19)
pc.collide(wall20)
pc.collide(wall21)
pc.collide(wall22)
pc.collide(wall23)
pc.collide(wall24)
pc.collide(wall25)
pc.collide(wall26)
pc.collide(wall27)
pc.collide(wall28)
pc.collide(wall29)
pc.collide(wall30)
pc.collide(wall31)
pc.collide(wall32)
pc.collide(wall33)
pc.collide(wall34)
pc.collide(wall35)
pc.collide(wall36)
pc.collide(wall37)
pc.collide(wall38)



npc.bounceOff(wall1)
npc.bounceOff(wall2)
npc.bounceOff(wall3)
npc.bounceOff(wall4)
npc.bounceOff(wall5)
npc.bounceOff(wall6)
npc.bounceOff(wall7)
npc.bounceOff(wall8)
npc.bounceOff(wall9)
npc.bounceOff(wall10)
npc.bounceOff(wall11)
npc.bounceOff(wall12)
npc.bounceOff(wall13)
npc.bounceOff(wall14)
npc.bounceOff(wall15)
npc.bounceOff(wall16)
npc.bounceOff(wall17)
npc.bounceOff(wall18)
npc.bounceOff(wall19)
npc.bounceOff(wall20)
npc.bounceOff(wall21)
npc.bounceOff(wall22)
npc.bounceOff(wall23)
npc.bounceOff(wall24)
npc.bounceOff(wall25)
npc.bounceOff(wall26)
npc.bounceOff(wall27)
npc.bounceOff(wall28)
npc.bounceOff(wall29)
npc.bounceOff(wall30)
npc.bounceOff(wall31)
npc.bounceOff(wall32)
npc.bounceOff(wall33)
npc.bounceOff(wall34)
npc.bounceOff(wall35)
npc.bounceOff(wall36)
npc.bounceOff(wall37)
npc.bounceOff(wall38)

 

  console.log(mouseX,mouseY)

  spawnNPC();
  
  drawSprites();
  
}

function spawnNPC(){

if(frameCount%70===0){

  npc=createSprite(400,400)
  npc.addAnimation("npcwalk",npcAnim)
  npc.x=Math.round(random(30,1555))
  npc.y=Math.round(random(40,550))

  npc.velocityY=3
  npc.velocityX=3
  
  
  
}
  



}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  youwin.visible = false;
  
  pc.destroy()
  pc=createSprite(220,705,20,20)
  pc.addAnimation("pc",pc_downidle)
  pc.scale=2
  pc.setCollider("circle",0,0,5)


  
}
  
 
  

  
