//creating the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var canvas.width = 512;
var canvas.height = 512;
document.body.appendChild(canvas);
//background image
var bgReady = false;
var bgImage = new Image();
bgImage.onLoad = function{
          bgReady = true;
          };
bgImage.src = "src";
//HERo image
var HReady = false;
var HImage = new Image();
HImage.onLoad = function{
          HReady = true;
          };
HImage.src = "images/hero.png";
//NPC 1
var NPC1Ready = false;
var NPC1Image = new Image();
NPC1Image.onLoad = function{
          NPC1Ready = true;
          };
NPC1Image.src = "images/monster.png";
//game objects
var hero = {
speed: 200,
health: 50,
range: 30
};
var NPC1 = {
health: 20,
speed: 100,
range:30
};
//Keyboard
var keysDown = {};
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
  var newNPC1 = function(){
  apple.x = Math.Random * canvas.Width;
  apple.y = Math.Random * canvas.Height;
  };
  //Updating game objects
 var reset = function(){
NPC1.x = Math.Random * canvas.height;
NPC1.y = Math.Random * canvas.width;
};
//moving the hero
var update =  function(modifer){
if (38 in keysDown) {
hero.y -= hero.speed * modifier;
}
if (40 in keysDown) {
hero.y += hero.speed * modifier;
};
if (37 in keysDown){
hero.x -= hero.speed * modifier;
};
if(39 in keysDown){
hero.x +=hero.speed * modifier
};
if(hero.x - NPC1.x =< hero.range && (32 in keysDown) && (hero.y - NPC1.y = <hero.range){
NPC1.health -= 5;
setTimeout(1000);
};
if(NPC1.x - hero.x =< hero.range && (32 in keysDown) && (hero.y - NPC1.y = <hero.range){
NPC1.health -= 5;
setTimeout(1000);
};
if(NPC1.x - hero.x =< hero.range && (32 in keysDown) && (NPC.y - hero.y = <hero.range){
NPC1.health -= 5;
setTimeout(1000);
};  
if(hero.x - NPC1.x =< hero.range && (32 in keysDown) && (NPC.y - hero.y = <hero.range){
NPC1.health -= 5;
setTimeout(1000);
};  
//drawing
var render = function(){
if (NPC1Ready) {
 ctx.drawImage(NPC1Image, NPC1.x, NPC1.y);
}
if(HReady){
ctx.drawImage(HImage, hero.x , hero.y);
}
};
// The main game loop
var main = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;
};

// Let's play this game!
reset();
var then = Date.now();
setInterval(main, 1); // Execute as fast as possible

