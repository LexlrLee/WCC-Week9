function setup() { 
  createCanvas(1500, 800);
  img = createCapture(VIDEO);
	img.hide();
  img.size(1500,800);
}

function draw() {
	background(255);
	img.loadPixels();
  for (var y=0;y<img.height ;  y+=20)
  {
    for (var x=0;x<img.width; x+=20)
    {
      var  i = y * width + (img.width-x-1);	
     const darkness = (255 - img.pixels[i * 4]) / 255;
     const radius = 30 * darkness;
			fill(random(255), random(1), random(1));
    ellipse(x, y, radius, radius);
      }
    }
  }
