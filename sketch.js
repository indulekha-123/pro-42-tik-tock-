
function setup() {
  createCanvas(800,800);
  
  

}

function draw() {
  background("black"); 
  var hr = hour();
  var mn = minute();
 var sc = second();
 
 


 scAngle =  map (sc , 0, 60,0,360);
  hrAngle = map(hr,0,3600,0,360);
  mnAngle=map(mn,0,60,0,360);
 angleMode = (DEGREES);
 
  
 push ();

  rotate (scAngle);
  stroke (255,0,0);
  strokeWeight(7);
  line (0,0,100,400);


  rotate (hrAngle);
stroke (995,190,0);
  strokeWeight(7);
 line (0,0,200,400);
  
 rotate (mnAngle);
  stroke (79,90,0);
strokeWeight(7);
line (0,0,300,300);

pop ();




  drawSprites();
}


