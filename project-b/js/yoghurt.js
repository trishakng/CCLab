let paint;

let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let rx = 640;
let ry = 300;
let rw = 150;
let rh = 150;
let r1x = 200;
let r1y = 200;
let r1w = 80;
let r1h = 80;
let r2x = 1000;
let r2y = 500;
let r2w = 120;
let r2h = 120;
let dia;
let r, g, b;
let snd;

function preload() {
  img = loadImage("assets/yoghurt.png");
  img1 = loadImage("assets/yoghurt2.png");
  img2 = loadImage("assets/yoghurt3.png");
  img3 = loadImage("assets/yoghurt4.png");
  img4 = loadImage("assets/yoghurt5.png");
  img5 = loadImage("assets/froyo.png");
  snd = loadSound("assets/click.mov");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  // background(10);

  paint = createGraphics(width, height); // off-canvas, in memory, image
  noCursor();

  dia = 30;

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

}

function draw() {
  background(30);
  image(img, 200, 0);
  image(img1, 600, 200);
  image(img2, 800, 10);
  image(img3, 90, 250);
  image(img4, 1000, 220)
  image(img5, mouseX, mouseY, 100, 100)


  if (keyIsPressed == true) {
    if (key == "1") {
      r = (255);
      g = (100);
      b = (50);
    } else if (key == "2") {
      r = (100);
      g = (255);
      b = (100);
    } else if (key == " ") {
      paint.clear();
    }
  }

  if (keyIsPressed) {
    if (key == "-") {
      dia = dia + 3;
    } else if (key == "=") {
      dia = dia - 3;
    }
  }


  if (mouseIsPressed == true) {
    cursor('lib/assets/paintbrush.png')

    paint.noStroke();
    paint.fill(r, g, b);
    paint.ellipse(mouseX, mouseY, dia, dia);

  }

  image(paint, 0, 0);

  if (keyIsPressed) {
    if (key == "s" || key == "S") {
      save("sketch.png");
      noLoop();
    }
  }

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

  push();
  if (mouseIsPressed) {
    if (mouseX > r2x && mouseX < r2x + r2w &&
      mouseY > r2y && mouseY < r2y + r2h) {
      fill(100, 40, 100)
    }
  } else {
    fill(100, 222, 230);
  }

  rect(r2x, r2y, r2w, r2h);
  pop();
}

//    image(cam, 0, 0);

function linkWithSound(link) {
  snd.play();
  // anonymous function
  setTimeout(function () {
    window.open(link, "_self");
  }, 750);
}

