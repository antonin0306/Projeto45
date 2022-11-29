var BattleGround;
var cachorroImg;
var cachorro;

function preload(){
BattleGround = loadImage ("assets/Battleground.png")
cachorroImg = loadAnimation ("assets/cachorro-1.png.png","assets/cachorro-2.png.png",
"assets/cachorro-3.png.png","assets/cachorro-4.png.png","assets/cachorro-5.png.png")
}

function setup(){
createCanvas (1920/1.3,1080/1.5)
cachorro = createSprite (100, 500)
cachorro.addAnimation ("andando", cachorroImg)



}

function draw() {
background (BattleGround) 

 drawSprites()       
}
