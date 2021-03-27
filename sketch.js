var state = 0;
var start, startImg;
var latitude1, latitude2, longitude1, longitude2;
var long1input;
var lat1input;
var long2input;
var lat2input;
var item1, item2, item3;
var goToNext = 1;
var distance;


function distanceCalculator(long1input, long2input, lat1input, lat2input) {
  var long1 = long1input * (Math.PI / 180);
  var long2 = long2input * (Math.PI / 180);
  var lat1 = lat1input * (Math.PI / 180);
  var lat2 = lat2input * (Math.PI / 180);

  var dlon = long2 - long1
  var dlat = lat2 - lat1

  var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  var c = 2 * Math.asin(Math.sqrt(a));

  var r = 6371;

  return c * r* 1000;
}

function preload() {
  startImg = loadImage("startbutton.png");
  lntImg = loadImage("lnt.png");
  nitkImg = loadImage("NITK1.png");
  nextImg = loadImage("next.png");
  next1Img = loadImage("next1.png")
  next3Img = loadImage("next3.png")

  type1Im = loadImage("type1.jpg")
  type1aIm = loadImage("type1a.jpg")
  type1bIm = loadImage("type1b.jpg")
  type2Im = loadImage("type2.jpg")
  type3Im = loadImage("type3.jpg")
  type4Im = loadImage("type4.jpg")


}

function setup() {
  createCanvas(600, 600)
  start = createSprite(500, 500, 50, 50);
  start.addImage(startImg);
  start.scale = 0.2;

  lnt = createSprite(100, 100, 50, 50);
  lnt.addImage(lntImg);
  lnt.scale = 0.07;

  nitk = createSprite(500, 100, 50, 50);
  nitk.addImage(nitkImg);
  nitk.scale = 0.5;


  latitude1 = createInput();
  longitude1 = createInput();
  latitude2 = createInput();
  longitude2 = createInput();


  lt = createSelect();
  ht = createSelect();
  sc = createSelect('select');

  lt.option('00');
  lt.option('02');


  ht.option('00');
  ht.option('01');
  ht.option('02');
  ht.option('03');
  ht.option('04');

  sc.option('01');

  next = createSprite(150, 500, 50, 50);
  next.addImage(nextImg);
  next.scale = 0.5;
  next.debug = false;
  next.setCollider("rectangle", 0, 0, 320, 100)

  next1 = createSprite(350, 500, 50, 50);
  next1.addImage(next1Img);
  next1.scale = 0.3;

  next3 = createSprite(125, 450, 50, 50);
  next3.addImage(next3Img);
  next3.scale = 0.3;

}

function draw() {
  background(192, 192, 192)


  if (state === 0) {
    fill("black")
    textSize(20);
    text("Digital Solutions for distance measurement techniques", 50, 250)
    text("in distribution projects", 200, 300)
    lnt.visible = true;
    nitk.visible = true;
    start.visible = true;
    next.visible = false;
    next1.visible = false;
    next3.visible = false;

  }

  if (mousePressedOver(start) && state === 0) {
    state = 1;
    start.remove();
  }

  if (state === 1) {
    fill("black")

    lnt.visible = false;
    nitk.visible = false;
    start.visible = false;
    next.visible = true;
    next1.visible = false;
    next3.visible = false;


    textSize(20);
    textFont("arial Black");
    text("Enter the co-ordinates", 200, 100);
    textSize(15);
    textFont("arial");
    text("PointA co-ordinates", 100, 200);
    text("Latitude", 100, 230);
    text("Longitude", 100, 260);

    text("PointB co-ordinates", 100, 350);
    text("Latitude", 100, 380);
    text("Longitude", 100, 410);

    latitude1.position(190, 215)
    longitude1.position(190, 245)



    latitude2.position(190, 365)
    longitude2.position(190, 395)
  }

  if (mousePressedOver(next) && state === 1) {
    lat1input = latitude1.value();
    lat2input = latitude2.value();
    long1input = longitude1.value();
    long2input = longitude2.value();
    console.log(lat1input);
    console.log(long1input);
    console.log(lat2input);
    console.log(long2input);
    distance = distanceCalculator(long1input,long2input,lat1input,lat2input);
    console.log(distance);
    state = 2;

  }


  if (state === 2) {
    latitude1.hide();
    latitude2.hide();
    longitude1.hide();
    longitude2.hide();
    next.visible= false;
    next1.visible = true;
    

    textSize(20);
    fill("black")
    textFont("arial Black");
    text("Select the number of cables", 150, 100);

    textSize(15);
    textFont("arial");
    text("LT Cable", 100, 230);
    text("HT Cable", 100, 260);
    text("Service Cable", 100, 290);



    lt.position(200, 215)
    ht.position(200, 245)
    sc.position(200, 275)
  
    
    
  }
  
  if (mousePressedOver(next1) && state ===2) {
    console.log(next1);
    console.log(lt);
    console.log(ht);
    console.log(sc);


     
    item1 = lt.value();
    console.log(item1);
    item2 = ht.value();
    console.log(item2);
    item3 = sc.value();
    console.log(item3);


    if(item1 ==2 && item2 ==2 && item3==1){
      console.log("Type-1")
      width = 450;
      depth = 1125;
      goToNext = 1
      typeImage = type1Im;
      EIE = 0.51;
      SF = 0.08;
      EIF = 0.43;

     }
     else if(item1 ==2 && item2 ==0 && item3==1){
      console.log("Type-1 a")
      width = 450;
      depth = 850;
      goToNext = 1
      typeImage = type1aIm;
      EIE = 0.38;
      SF = 0.12;
      EIF = 0.26;
     }
     else if(item1 ==2 && item2 ==1 && item3==1){
      console.log("Type-1 b")
      width = 450;
      depth = 1125;
      typeImage = type1bIm;
      EIE = 0.51;
      SF = 0.08;
      EIF = 0.43;
      goToNext = 1
     }
     else if(item1 ==0 && item2 ==3 && item3==1){
      console.log("Type-2")
      width = 650;
      depth = 1125;
      goToNext = 1
      typeImage = type2Im;
      EIE = 0.73;
      SF = 0.16;
      EIF = 0.57;
     }
     else if(item1 ==0 && item2 ==4 && item3==1){
      console.log("Type-3")
      width = 750;
      depth = 1125;
      typeImage = type3Im;
      goToNext = 1;
      EIE = 0.84;
      SF = 0.19;
      EIF = 0.66;
     }
     else if(item1 ==0 && item2 ==0 && item3==1){
      console.log("Type-4")
      width = 450;
      depth = 850;
      typeImage = type4Im;
      goToNext = 1;
      EIE = 0.38;
      SF = 0;
      EIF = 0.38;
     }
     else {
       goToNext = 0;
     }

    if(goToNext === 1){
    state = 3;
    }
    else{
      console.log("Please enter a valid type")
    }
  
  }

  



  if (state === 3) {
    console.log("yess its state 3")
    next1.remove();
    lt.remove();
    ht.remove();
    sc.remove();
    next3.visible = true;
    textSize(18);
    fill("black")
    textFont("arial");
    text("Distance between two coordinates-", 80, 100);
    text(distance, 380, 100)
    fill("red")
    textFont("bold");
    text("Trench details", 80, 150);
    text("estimated quantities", 80, 260);
    
    fill("black")
    textSize(15);
    textFont("arial");
    text("Depth", 80, 180);
    text(depth, 130,180);
    text("Width", 80, 200);
    text(width, 130,200);
    
   
    text("Earthwork in excavation", 80, 280)
    text(distance*EIE, 330,280)
    text("Sand Filling", 80, 300)
    text(distance*SF, 330,300)
    text("Earthwork in Filling", 80,320)
    text(distance*EIF, 330,320)

    
  }

  if (mousePressedOver(next3)) {
    
    lt.remove('00');

    state = 4;

  }

  if (state === 4)
  {

    next3.remove();
    fill("red")
    textSize(20);
    textFont("bold");
    text("Trench Design Image", 80, 50);
    IMG = createSprite(280,300,100,100)
    IMG.addImage(typeImage)
    
    

  }


  drawSprites();
}

function quantitiesCalculator() {
 

  return c * r* 1000;
}