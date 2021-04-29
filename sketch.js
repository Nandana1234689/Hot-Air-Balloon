var ball;
var balloon,balloonimg
var bg , bgimg
var b,bi
function preload(){
balloonimg = loadAnimation("images/hotairballoon1.png","images/hotairballoon2.png","images/hotairballoon3.png")
bgimg = loadImage("images/cityImage.png")
}
function setup(){
    createCanvas(1350,750);

    bg = createSprite(650,325,1350,650)
    bg.addImage(bgimg)
    bg.scale = 0.6

    balloon = createSprite(250,500,10,10);
    balloon.addAnimation("rounding",balloonimg)
    balloon.scale = 0.7

  
    
}

function draw(){
    background("white");

if (balloon.y<300){
    balloon.scale = 0.5
}
if (balloon.y>300){
    balloon.scale = 0.7
}

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
   
    }
    else if(keyDown(RIGHT_ARROW)){    
        changePosition(1,0);

    }
    else if(keyDown(UP_ARROW)){      
        changePosition(0,-1);

    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
      
    }
    drawSprites();
}

function changePosition(x,y){
    balloon.x = balloon.x + x;
    balloon.y = balloon.y + y;
}
