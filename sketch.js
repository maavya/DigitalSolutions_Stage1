var state = 0;
var start, startImg;
var latitude1, latitude2, longitude1, longitude2;
var long1input;
var lat1input;
var long2input;
var lat2input;



function distanceCalculator(long1input, long2input, lat1input, lat2input) {
  var long1 = long1input * (Math.PI / 180);
  var long2 = long2input * (Math.PI / 180);
  var lat1 = lat1input * (Math.PI / 180);
  var lat2 = lat2input * (Math.PI / 180);

  var dlon = long2 - long1
  var dlat = lat2 - lat1

  var a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2), 2);

  var c = 2 * Math.asin(Math.sqrt(a));

  var r = 6371;

  return c * r;
}

function preload() {
  startImg = loadImage("startbutton.png");
  lntImg = loadImage("lnt.png");
  nitkImg = loadImage("NITK1.png");
  nextImg = loadImage("next.png");
  next1Img = loadImage("next1.png")

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


  latitude1 = createInput(lat1input);
  console.log(long1input);

  longitude1 = createInput(long1input);
  latitude2 = createInput(lat2input);
  longitude2 = createInput(long2input);


  lt = createSelect();
  ht = createSelect();
  sc = createSelect();

  lt.option('00');
  lt.option('02');

  ht.option('00');
  ht.option('01');
  ht.option('02');
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
    console.log(long1input)
    //var x = distanceCalculator(long1input,long2input,lat1input,lat2input)
    var x = distanceCalculator(10, 20, 30, 40);
    console.log(x);
    state = 2;

  }


  if (state === 2) {
    latitude1.hide();
    latitude2.hide();
    longitude1.hide();
    longitude2.hide();
    next.visible = false;
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


    if (mousePressedOver(next1)) {
      console.log(next1);
      console.log(lt);
      console.log(ht);
      console.log(sc);
      lt.remove('00');

      state = 3;

    }
  }




  if (state === 3) {
    next1.remove();
    lt.remove();
    ht.remove();
    sc.remove();


  }


  drawSprites();
}