function preload(){
  img = loadImage("assets/sprite.png");

}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(0);

  blendMode(ADD);
  tint(120, 80, 5, 50)
  imageMode(CENTER);
  image(img, mouseX, mouseY, 50, 50)

  // let r = map(mouseX, 0, width, 0, 255);
  // let g = map(mouseX, 0, height, 0 , 255);


  // tint(r, 255, 255);
  // image(img, 0, 0);

  // if(mousIsPressed == false){
  // //   filter(GRAY);
  // filter(BLUR);
  // }

  //   }
  // filter(THRESHOLD);

  }