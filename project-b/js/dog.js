let img;
let img1;
let img2;
let img3;

function preload() {
  img = loadImage("assets/dog.png");
  img1 = loadImage("assets/dog1.png");
  img2 = loadImage("assets/dog2.png");
  img3 = loadImage("assets/dog4.png");


}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);

}

function draw() {
  background(218, 165, 32);
  image(img, 550, 0);
  image(img1, 80, 10);
  image(img2, 1100, 100);
  image(img3, 320, 250);

  // for (let i = 0; i < 50; i++) {
  //   let x = floor(random(width));
  //   let y = floor(random(height));
  //   let dia = random(10, 30)
  //   let c = img.get(x, y)

  //   let r = red(c);
  //   let g = green(c);
  //   let b = blue(c);
  //   let a = alpha(c);

  //   let avg = (r + g + b) / 3;

  //   noStroke();
  //   fill(r, g, b, a);
  //   circle(x, y, dia)
}

//    image(cam, 0, 0);