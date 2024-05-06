let img;
let img1;
let img2;
let bg;
let snd;
let rx = 1000;
let ry = 400;
let rw = 200;
let rh = 70;

function preload() {
  img = loadImage("assets/dormlife1.png");
  img1 = loadImage("assets/dormlife2.png");
  img2 = loadImage("assets/dormlife3.png");
  bg = loadImage("assets/paper.png");
  snd = loadSound("assets/click.mov");

}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);



}

function draw() {
  // background((245, 245, 245));
  background(bg);
  image(img, 800, 0);
  image(img1, 300, 210);
  image(img2, 120, 30);

  for (let i = 0; i < 50; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let c = img.get(x, y)

    let r = red(c);
    let g = green(c);
    let b = blue(c);
    let a = alpha(c);

  }

  //    image(cam, 0, 0);

  if (mouseIsPressed) {
    if (mouseX > rx && mouseX < rx + rw &&
      mouseY > ry && mouseY < ry + rh) {
      strokeWeight(2);
      stroke(0, 100, 0);
      fill(255, 195, 0);
      noStroke();
      // fill(r, g, b, a);
      text('move in day pt.2 (2023)', 200, 100);
      textSize(20)
      text('first meal at dorm (2019)', 1000, 300);
      text('first visitors at dorm :)', 540, 300);
    }
  } else {
    stroke(0)
    fill(120, 100, 255);
  }

  rect(rx, ry, rw, rh, 10);
  fill(255);
  textSize(20);
  textFont("monospace");
  text('access memories', 1010, 440);

}

function linkWithSound(link) {
  snd.play();
  // anonymous function
  setTimeout(function () {
    window.open(link, "_self");
  }, 750);
}

