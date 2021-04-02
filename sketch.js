var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var garden, gardenImage;

function preload() {
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat4.png");
    catImg3 = loadAnimation("images/cat3.png","images/cat2.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse2.png");
    gardenImage = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400);
    garden.addImage("garden", gardenImage);
    //create tom and jerry sprites here
    cat = createSprite(600,500,20,20);
    cat.addAnimation("cat", catImg1);
    cat.changeAnimation("cat");
    cat.scale = 0.3;

    mouse = createSprite(200,500,20,20);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.changeAnimation("mouse");
    mouse.scale = 0.3
}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.addAnimation("catHappy", catImg2);
        cat.changeAnimation("catHappy");
        mouse.addAnimation("mouseHappy", mouseImg3);
        mouse.changeAnimation("mouseHappy");
        cat.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catWalking", catImg3)
      cat.changeAnimation("catWalking")
      cat.velocityX = -2;
  }

}
