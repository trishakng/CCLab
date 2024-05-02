let img;
let img1;
let img2;

function preload() {
  img = loadImage("assets/dormlife1.png");
  img1 = loadImage("assets/dormlife2.png");
  img2 = loadImage("assets/dormlife3.png");

}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);

}

function draw() {
  background((245, 245, 245));
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

    let avg = (r + g + b) / 3;

    noStroke();
    fill(r, g, b, a);
    text('move in day', 200, 200);
    textSize(20)
    text('first meal at dorm (2019)', 1060, 300);
    text('first visitors at dorm', 530, 300);

  }

  //    image(cam, 0, 0);

}
