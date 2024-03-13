console.log("test");

let pattern = 100;
let angle = 0;
let radDist = 0;
let t1 = 0;
let t2 = 0;
let t3 = 0;
let t4 = 0;
let t5 = 0;
let t6 = 0;
let t7 = 0;
let t8 = 0;
let t9 = 0;

function setup(){
    let canvas = createCanvas(800,500);
    canvas.parent("p5-canvas-container")

  background(200);

  //cursor(CROSS);
  noCursor();
}

function draw() {
  background(0, 20);

  for (let i = 0; i < 10; i++) {
    noFill();
    stroke(255, 100);
    circle(random(width), random(height), random(1, 5));
  }

  drawPetal1(140, 100);
  drawPetal2(140, 275);
  drawPetal3(140, 420);

  drawPetal4(400, 100);
  drawPetal5(400, 275);
  drawPetal6(400, 420);
  drawPetal7(640, 100);
  drawPetal8(640, 275);
  drawPetal9(640, 420);

  drawMagicWand(mouseX, mouseY);
}

function drawMagicWand(x, y) {
  push();
  translate(x, y);

  let sinValue = sin(frameCount * 0.05) * 0.2;
  rotate(PI * -0.25 + sinValue);

  noStroke();
  fill(86, 86, 86);
  rect(-3, 0, 20, 100, 5);
  fill(255, random(255), random(255));
  rect(-3, 0, 20, 25, 2);
  pop();
  //text
  noStroke();
  fill(255);
  textSize(20);
  text('hover over flowers', mouseX, mouseY);

  
}

function drawPetal1(x, y) {
  let r1 = 216;
  let g1 = 219;
  let b1 = 226;
  let rx = 75;
  let ry = 95;
  let radDist = 50;
  let freq = frameCount * 0.1;
  let amp = 200;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    t1 += 3;
    r1 = 10 + sinValue;
    g1 = 123;
    b1 = 244 - sinValue;
  } else {
    r1 = 255 + cosValue;
    g1 = 100 + sinValue;

    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw bgCircle
  noStroke();
  fill(169, 188, 208);
  circle(0, 0, 100);

  // draw pattern
  for (let angle = 0; angle < 360; angle += 60) {
    let dia = 0;
    let cx = cos(radians(angle + t1)) * radDist;
    let cy = sin(radians(angle + t1)) * radDist;
    angle += 0.15;

    if (mouseX > 137 && mouseX < 105) {
      strokeWeight(3);
      fill(0, g1, b1);
      stroke(230, 123, 100);
      circle(cx, cy, 10);
    } else {
      strokeWeight(3);
      fill(0, g1, b1);
      stroke(230, 123, 100);
      circle(cx, cy, 30);
    }

    strokeWeight(3);
    fill(r1, g1, b1);
    stroke(55, 63, 81);
    circle(cx, cy, 50);
  }
  pop();
}

function drawPetal2(x, y) {
  let r3 = 55;
  let g3 = 114;
  let b3 = 255;
  let radDist = 40;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    t2 += 5;
    radDist += 30;
    r3 += random(100);
    g3 += random(189);
  } else {
    t2 += 2;
    radDist -= 0;

    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw bgCircle
  noStroke();
  fill(239, 112, 157);
  circle(0, 0, 100);

  // draw pattern

  // for (let angle = 0; angle < 360; angle += 50 * frameCount * t) {
  for (let angle = 0; angle < 360; angle += 60) {
    push();

    rotate(radians(angle + t2));
    strokeWeight(3);
    fill(r3, g3, b3);
    stroke(226, 239, 112);
    ellipse(radDist, 0, 60, 20);
    ellipse(radDist * 0.5, 0, 10, 10);
    ellipse(radDist * 2.0, 0, 5, 50);

    pop();
  }
  pop();
}

function drawPetal3(x, y) {
  let r2 = 217;
  let g2 = 242;
  let b2 = 180;
  let radDist = 20;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    t3 += 5;
    radDist = 60 + sin(radians(angle * 4)) * 10 + random(-2, -40);
  } else {
    t3 += 2;
    radDist -= 0;

    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw bgCircle
  noStroke();
  fill(247, 100, 75);
  circle(0, 0, 100);

  // draw pattern

  // for (let angle = 0; angle < 360; angle += 50 * frameCount * t) {
  for (let angle = 0; angle < 360; angle += 60) {
    let c1x = cos(radians(angle + t3)) * radDist;
    let c1y = sin(radians(angle + t3)) * radDist;
    strokeWeight(3);
    fill(r2, g2, b2);
    stroke(113, 232, 234);
    ellipse(c1x, c1y, 30);

    // noStroke();
    // fill(247, 201, 75);
    // //circle(x, y, 100);
  }
  pop();
}

function drawPetal4(x, y) {
  let r4 = 248;
  let g4 = 240;
  let b4 = 251;
  let radDist = 20;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    t4 += 4;
    radDist = sin(frameCount * 0.07) * 50;
  } else {
    t4 += 2;
    radDist -= 0;

    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw bgCircle
  noStroke();
  fill(202, 213, 202);
  circle(0, 0, 100);

  // draw pattern

  for (let angle = 0; angle < 360; angle += 60) {
    push();

    rotate(radians(angle + frameCount));
    strokeWeight(5);
    stroke(99, 32, 238);
    fill(r4, g4, b4)
    rect(0, 0, 30, 60, 10)
    stroke(100, 0, 120)
    rect(radDist * 0.5, 0, 20, 50, 10);
   
    
pop();
  
  }
  pop();
}

function drawPetal5(x, y) {
  let r5 = 228;
  let g5 = 0;
  let b5 = 102;
  let radDist = 40;
  let freq = frameCount * 0.15;
  let amp = 40;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;

  // let it rotate!
  // let distance = dist(x, y, mouseX, mouseY);
  // if (distance < radDist) {
  //   // rotate!
  //   t5 += 8;
  //   fill(random(255), random(255), random(255));
  // } else {
  //   t5 += 2;
  //   strokeWeight(3);
  //   stroke(100, 250, 50);

  // do nothing or something else!
  // }

  push();
  translate(x, y);

  // draw bgCircle
  noStroke();
  fill(168, 194, 86);
  circle(0, 0, 100);

  // draw pattern

  // for (let angle = 0; angle < 360; angle += 50 * frameCount * t) {
  for (let angle = 0; angle < 360; angle += 40) {
    let x2 = cos(radians(angle - t5)) * radDist;
    let y2 = sin(radians(angle + t5)) * radDist;

    strokeWeight(3);
    stroke(218, 237, 189);
    fill(r5, g5, b5);
    rect(x2, y2, 30, 30, 8);
    rectMode(CENTER);

    let distance = dist(x, y, mouseX, mouseY);
    if (distance < radDist) {
      // rotate!
      t5 += 0.5;
      r5 = 255 + sinValue;
      g5 = 100;
      b5 = 200 - sinValue;
  
      rect(x2, y2, 40, 40, 15);
    } else {
      t5 += 0.05;
      strokeWeight(3);
      stroke(100, 250, 50);
    }
    // noStroke();
    // fill(247, 201, 75);
    // //circle(x, y, 30);
  }
  pop();
}

function drawPetal6(x, y) {
  let r6 = 228;
  let g6 = 0;
  let b6 = 102;
  let radDist = 40;
  let angle = 0;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    t6 += 8;
    radDist = sin(radians(angle + 50)) * 30 * random(-10, 50);
  } else {
    t6 += 2;
    strokeWeight(3);
    stroke(100, 250, 50);

    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw bgCircle
  noStroke();
  fill(163, 149, 148);
  circle(0, 0, 100);

  // draw pattern

  for (let angle = 0; angle < 360; angle += 40) {
    let x2 = cos(radians(angle - t6)) * radDist;
    let y2 = sin(radians(angle - t6)) * radDist;

    strokeWeight(3);
    stroke(110, 103, 95);
    fill(237, 235, 215);
    rect(x2, y2, 30, 30, 8);
    rectMode(CENTER);

    // noStroke();
    // fill(247, 201, 75);
    // //circle(x, y, 30);
  }
  pop();
}

function drawPetal7(x, y) {
  let r7 = 105;
  let g7 = 116;
  let b7 = 140;
  let radDist = 0;
  let angle = 0;
  for (let angle = 0; angle < 360; angle += 50) {
    let radDist = 85 + sin(radians((angle += 50)));
    let cosValue = cos(radians(angle + t7)) * radDist;
    let sinValue = sin(radians(angle + t7)) * radDist;

    // let it rotate!
    let distance = dist(x, y, mouseX, mouseY);
    if (distance < radDist) {
      // rotate!
      t7 += 0.3;
      radDist = sin(radians(angle + 50)) * 20 * random(5, 10);
    } else {
      t7 += 0.1;
      strokeWeight(3);
      stroke(100, 250, 50);

      // do nothing or something else!
    }

    push();
    translate(x, y);

    // draw bgCircle
    noStroke();
    fill(144, 178, 161);
    circle(0, 0, 40);

    // draw pattern

    let lx = 0 + cosValue;
    let ly = 0 + sinValue;
    
    for (let angle = 0; angle < 360; angle += 60) {
    push();

    rotate(radians(angle + t7));
    strokeWeight(5);
    stroke(r7, g7, b7);
    line(radDist, 0, 0, 20);
    line(radDist * 0.5, 0, 10);
    line(radDist * 0.6, 0, 5, 50);

    pop();
  }

    // stroke(random(202), 150, random(255));
    // strokeWeight(7);
    // line(0, 0, lx, ly);

    // noStroke();
    // fill(247, 201, 75);
    // //circle(x, y, 30);
    pop();
  }
}

function drawPetal8(x, y) {
  let r8 = 108;
  let g8 = 145;
  let b8 = 191;
  let cr8 = 252;
  let cg8 = 236;
  let cb8 = 82;
  let dia8 = 50;
  let radDist = 10;
  let freq = frameCount * 0.02;
  let amp = 500;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    dia8 = cosValue * -0.08;
    cr8 = 255 + sinValue;
    cg8 = 190;
    cb8 = 50;
    t8 += 0.5;
    radDist = sin(radians(angle + 0.1)) * 0.5 * random(-10, 20);
  } else {
    t8 -= 1;
    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw pattern
  for (let angle = 0; angle < 360; angle += 25) {
    let radDist = 40 + random(20, 40);
    let cosValue = cos(radians(angle + t8)) * radDist;
    let sinValue = sin(radians(angle + t8)) * radDist;

    let l2x = 0 + cosValue;
    let l2y = 0 - sinValue;

    stroke(r8, g8, b8);
    strokeWeight(10);
    line(0, 0, l2x, l2y);

    noStroke();
    fill(cr8, cg8, cb8);
    circle(0, 0, dia8);
  }
  pop();
}

function drawPetal9(x, y) {
  let r9 = 228;
  let g9 = 0;
  let b9 = 102;
  let cr9 = 2520;
  let cg9 = 84;
  let cb9 = 192;
  let radDist = 30;
  let freq = frameCount * 0.09;
  let amp = 400;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;

  // let it rotate!
  let distance = dist(x, y, mouseX, mouseY);
  if (distance < radDist) {
    // rotate!
    cr9 = 3 * frameCount;
    cg9 = 1;
    cb9 = 10;
    t9 += 0.5;
    radDist = sin(radians(angle + 20)) * 10 * random(13, 15);
  } else {
    t9 += 0.25;
    strokeWeight(3);
    stroke(100, 250, 50);
    // do nothing or something else!
  }

  push();
  translate(x, y);

  // draw pattern
  for (let angle = 0; angle < 360; angle += 45) {
    //t += 0.5;
    let xl = cos(radians(angle + t9)) * radDist;
    let yl = sin(radians(angle + t9)) * radDist;

    noStroke();
    fill(cr9, cg9, cb9);
    circle(xl, yl, 30);

    stroke(202, 207, 100);
    strokeWeight(15);
    line(0, 0, xl, yl);

    noStroke();
    fill(255, 84, 192);
    circle(0, 0, 30);
  }
  pop();
}
