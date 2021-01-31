var state = 0;
var start,startImg;




function preload(){
startImg = loadImage("startbutton.png");
lntImg = loadImage("lnt.png");
nitkImg = loadImage("NITK1.png");
nextImg = loadImage("next.png");
next1Img = loadImage("next1.png");

}

function setup(){
createCanvas(600,600)
     start = createSprite(500, 500, 50,50);
     start.addImage(startImg);
     start.scale = 0.2;

     lnt = createSprite(100,100, 50,50);
     lnt.addImage(lntImg);
     lnt.scale = 0.07;

     nitk = createSprite(500,100, 50,50);
     nitk.addImage(nitkImg);
     nitk.scale = 0.5;

     latitude1 = createInput("");
     longitude1 = createInput("");
     latitude2 = createInput("");
     longitude2 = createInput("");

     next = createSprite(250, 500, 50,50);
     next.addImage(nextImg);
     next.scale = 0.5;

     next1 = createSprite(250, 400, 50,50);
     next1.addImage(next1Img);
     next1.scale = 0.3;

}

function draw(){
  background(38,152,242)
  if(state===0){
    fill("black")
    textSize(20); 
    text("Digital Solutions for work measurement techniques", 50,250)
    text("in distribution projects", 200, 300)
    lnt.visible = true;
    nitk.visible = true;
    start.visible = true;
    next.visible = false; 
    next1.visible = false;
  }

  if(mousePressedOver(start)){
    state = 1;
    start.remove();
  }

  if(state===1){
    fill("black")
    
    lnt.visible = false;
    nitk.visible = false;
    start.visible = false;
    next.visible = true; 
    next1.visible = false;

    textSize(20);
    textFont("arial Black");
    text("Enter the co-ordinates", 200,100);
    textSize(15);
    textFont("arial");
    text("PointA co-ordinates", 100, 200);
    text("Latitude", 100, 230);
    text("Longitude", 100, 260);

    text("PointB co-ordinates", 100, 350);
    text("Latitude", 100, 380);
    text("Longitude", 100, 410);

    latitude1.position(190,215)
    longitude1.position(190,245)

    latitude2.position(190,365)
    longitude2.position(190,395)
  }
  
  if(mousePressedOver(next)){
    state = 2;
  }
  

  if(state === 2){
    latitude1.hide();
    latitude2.hide();
    longitude1.hide();
    longitude2.hide();
    next.visible = false;
    next1.visible = true;

    textSize(20);
    fill("black")
    textFont("arial Black");
    text("Select the number of cables", 150,100);

    textSize(15);
    textFont("arial");
    text("LT Cable", 100, 230);
    text("HT Cable", 100, 260);
    text("Service Cable", 100, 290);

    lt = createSelect();
    lt.position(200, 215)
    lt.option('00');
    lt.option('02');

    ht = createSelect();
    ht.position(200, 245)
    ht.option('00');
    ht.option('01');
    ht.option('02');
    ht.option('04');

    sc = createSelect();
    sc.position(200, 275)
    sc.option('01');
   
  }

  
  if(mousePressedOver(next1)){
    state = 3;
  }

  if(state === 3){
    

  }


drawSprites();
}