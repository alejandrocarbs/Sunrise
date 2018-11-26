
var color = [ "#222f3e","#f368e0", "#ee5253", "#0abde3", "#10ac84",
"#222f3e", "#5f27cd"];
var i = 0;
document.querySelector("button").addEventListener("click", function(){
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color [i] 
})
var blueDiam = 15
function setup() {
  // put setup code here
  createCanvas(500,500);
}


function draw() {
  // put drawing code here
  background("#cc5353");
  fill("#f0e03f"); //light blue
  stroke("#fb3a09"); //yellow
  strokeWeight(1);
  ellipse(250,250,blueDiam, blueDiam);
  //blueDiam = blueDiam + .1;
  fill("#000"); //red
  ellipse (random(width),random(height),5,5);
  text("SUNRISE" ,40,40);
  textAlign("CENTER");
  
  textSize (20);
  textFont ("Times New Roman");

  textStyle (BOLD);

  
  
  console.log(blueDiam);
}
function mousePressed(){
		if (blueDiam >=1500){
			blueDiam=1;
		}else{
  		blueDiam = blueDiam +50;
  }

}

