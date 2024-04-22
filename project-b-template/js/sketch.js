let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new dimple(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(0); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
class dimple {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.mouth = PI;
    this.color = "beige";
    this.colorEyes = "black";
    this.colorMouth = "salmon";
    this.colorCheeks = " #ffccee";
    this.Eyesize1 = 12;
    this.Eyesize2 = 12;
    this.xSpeed = 0;
    this.ySpeed = 5;
    this.angle = 0;
    this.Eyemovement = 1;

    //..
    //..
    //..
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > 350) {
      this.ySpeed *= -1;
    }
    this.angle += 0.1;

    if (this.Eyesize1 >= 20 || this.Eyesize1 <= 0) {
      this.Eyemovement *= -1;
    }

    if (this.Eyesize2 >= 20 || this.Eyesize2 <= 0) {
      this.Eyemovement += -1;
    }

    this.Eyesize1 += this.Eyemovement;
    this.Eyesize2 += this.Eyemovement;

    // if (this.y > 300 ) {
    //   this.mouth = PI*2;
    // }
    
    
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    rotate(this.angle);
    noStroke();
    fill(this.color);
    ellipse(0, 20, 200, 150, 20);
    ellipse(0, -45, 20, 50);
    ellipse(15, -45, 20, 50);
    ellipse(-15, -45, 20, 50);
    fill(this.colorEyes);
    circle(-40, 10, this.Eyesize1, this.Eyesize1);
    fill(this.colorEyes);
    circle(40, 10, this.Eyesize2, this.Eyesize2);
    fill(this.colorMouth);
    arc(0, 30, 40, 40, 0, this.mouth, PI);
    fill(this.colorCheeks);
    ellipse(-70, 20, 30, 12);
    ellipse(70, 20, 30, 12);
    
    push();
    translate(-70, -90)
    //heat
        noFill();
        stroke(200);
        strokeWeight(2);
        beginShape();
        vertex(20, 0); // first point
        bezierVertex(5, 20, 30, 10, 15, 30);
        endShape();

        noFill();
        stroke(200);
        strokeWeight(2);
        beginShape();
        vertex(40, 0); // first point
        bezierVertex(20, 20, 50, 10, 40, 30);
        endShape();

        noFill();
        stroke(200);
        strokeWeight(2);
        beginShape();
        vertex(70, 0); // first point
        bezierVertex(50, 20, 90, 10, 70, 30);
        endShape();

        noFill();
        stroke(200);
        strokeWeight(2);
        beginShape();
        vertex(100, 0); // first point
        bezierVertex(70, 20, 120, 10, 100, 30);
        endShape();

        noFill();
        stroke(200);
        strokeWeight(2);
        beginShape();
        vertex(120, 0); // first point
        bezierVertex(100, 20, 140, 10, 120, 30);
        endShape();



    pop();




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}

