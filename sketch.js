
// The setup function runs once
function setup() {
  
  createCanvas(800, 600);
  background(160,160, 160);
  frameRate(5);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
	// background(160,160,160);
	// fill(204,153,255)
	// rect(90,20,350,200, 20)
	// var red = random(200,255)
	// var green = random(200,255)
	// var blue = random(200,255)
	// //(153,204,255)
	// fill(red, green,blue);
	// ellipse(mouseX,mouseY,100,100)
	// //stroke (255,153,153)
	// //line (30,70,40,90)
	// //fill(255,153,204)
	// stroke(255,102,178)
	// //triangle (350,370,390,330,380,490)
	// textSize (32);
	// fill(0,0,0)
	// text("Sabora",690,40)
	
	var red = random(200,255);
	var green = random(200,255);
	var blue = random(200,255);
	fill(red, green,blue);
	ellipse(random(0,800),random(0,600),100,100);
	rect(random(0,800),random(0,600),350,200, 20);
}


