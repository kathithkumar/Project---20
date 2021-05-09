var bgImg;
var cat, catimg1, catimg2, catimg3;
var mouse, mouseimg1, mouseimg2, mouseimg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(100,700,1,1);
    mouse.addAnimation("mouseStanding", mouseimg3);
    mouse.scale = 0.15;
    cat = createSprite(850,700,1,1);
    cat.addAnimation("catSitting", catimg1);
    cat.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      mouse.addAnimation("mouseHappy", mouseimg1);
      mouse.changeAnimation("mouseHappy");
      cat.addAnimation("catHappy", catimg3);
      cat.changeAnimation("catHappy");
      
      
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catWalking", catimg2);
    cat.changeAnimation("catWalking");
    cat.velocityX = -5;
  }

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catWalking", catimg2);
    cat.changeAnimation("catWalking");
    cat.velocityX = 5;
  }
}
