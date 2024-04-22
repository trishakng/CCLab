/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new dimple(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

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



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/