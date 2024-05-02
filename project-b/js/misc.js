let img;
let img1;
let img2;
let img3;
let img4;


function preload() {
  img1 = loadImage("assets/misc2.png");
  img3 = loadImage("assets/misc4.png");
  img4 = loadImage("assets/misc5.png");
  img = loadImage("assets/misc1.png");


}


function setup() {
  //let canvas = createCanvas(1200, 1400);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);

}

let t = 0;

function draw() {
  background((245, 245, 245));
  image(img1, 900, 50);
  image(img3, 600, 0);
  image(img4, 200, 250);
  image(img, 150, 0);

  // let c = img.get(mouseX, mouseY);
  // let c1 = img1.get(mouseX, mouseY);
  // let c2 = img3.get(mouseX, mouseY);
  // let c3 = img4.get(mouseX, mouseY);

  // fill(c);
  // fill(c1);
  // fill(c2);
  // fill(c3);

  let c = get(mouseX, mouseY);
  fill(c);
  square(10, 10, 100);

  text('龙 museum', 200, 200);
  textSize(20)
  text('modern art musuem pudong', 270, 520);
  text('富民路', 700, 200);


  if (mouseX < 200 && mouseX > 150 && mouseY < 200 && mouseY > 150) {
    t = 255;
  } else {
    t = 0;
  }


}