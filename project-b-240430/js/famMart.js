let img;
let img1;
let img2;
let famSound;
let rx = 1200;
let ry = 100;
let rw = 100;
let rh = 100;

function preload() {
  img = loadImage("assets/fammart1.png");
  img1 = loadImage("assets/fammart2.png");
  img2 = loadImage("assets/fammart3.png");
  famSound = loadSound("assets/Fammart.mp3");
}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);
}

function draw() {
  background((245, 245, 245));
  image(img, 350, 0);
  image(img1, 200, 210);
  image(img2, 900, 30);





  if (mouseIsPressed) {
    if (mouseX > rx && mouseX < rx + rw &&
      mouseY > ry && mouseY < ry + rh) {
      fill(255, 120, 255)
    }
  } else {
    fill(100, 20, 100);
  }

  rect(rx, ry, rw, rh);


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
  // }




}



function mousePressed() {
  if (mouseX > rx && mouseX < rx + rw &&
    mouseY > ry && mouseY < ry + rh) {
    famSound.play();
  }
}