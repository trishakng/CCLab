let img;
let img1;
let img2;
let img3;
let img4;
let rx = 640;
let ry = 300;
let rw = 150;
let rh = 150;
let r1x = 200;
let r1y = 200;
let r1w = 80;
let r1h = 80;

function preload() {
  img = loadImage("assets/yoghurt.png");
  img1 = loadImage("assets/yoghurt2.png");
  img2 = loadImage("assets/yoghurt3.png");
  img3 = loadImage("assets/yoghurt4.png");
  img4 = loadImage("assets/yoghurt5.png");

}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);

}

function draw() {
  background((245, 0, 245));
  image(img, 200, 0);
  image(img1, 600, 200);
  image(img2, 800, 10);
  image(img3, 90, 250);
  image(img4, 1000, 220)

  push();
  if (mouseIsPressed) {
    if (mouseX > rx && mouseX < rx + rw &&
      mouseY > ry && mouseY < ry + rh) {
      fill(40, 120, 255)
    }
  } else {
    fill(120, 120, 0);
  }

  rect(rx, ry, rw, rh);
  pop();

  push();
  if (mouseIsPressed) {
    if (mouseX > r1x && mouseX < r1x + r1w &&
      mouseY > r1y && mouseY < r1y + r1h) {
      fill(30, 40, 100)
    }
  } else {
    fill(255, 120, 230);
  }

  rect(r1x, r1y, r1w, r1h);
  pop();

}

//    image(cam, 0, 0);

