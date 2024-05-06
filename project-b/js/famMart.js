let img;
let img1;
let img2;
let famSound;
let rx = 1200;
let ry = 80;
let rw = 150;
let rh = 70;
let bg;
let y = 0;
let snd;

function preload() {
  img = loadImage("assets/fammart1.png");
  img1 = loadImage("assets/fammart2.png");
  img2 = loadImage("assets/fammart3.png");
  famSound = loadSound("assets/fammart.m4a");
  bg = loadImage("assets/familymart.jpeg");
  snd = loadSound("assets/click.mov");
}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  background(0);
}

function draw() {
  background((245, 245, 245));


  if (mouseIsPressed) {
    if (mouseX > rx && mouseX < rx + rw &&
      mouseY > ry && mouseY < ry + rh) {
      strokeWeight(2);
      stroke(0, 100, 0);
      fill(154, 205, 50);
      background(bg);
      image(img, 350, 0);
      image(img1, 200, 210);
      image(img2, 900, 30);
    }
  } else {
    stroke(154, 205, 50)
    fill(0, 100, 0);
  }

  rect(rx, ry, rw, rh, 10);
  fill(255);
  textSize(20);
  text('enter', 1250, 120);


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

function linkWithSound(link) {
  snd.play();
  // anonymous function
  setTimeout(function () {
      window.open(link, "_self");
  }, 750);
}