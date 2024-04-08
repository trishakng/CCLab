let names = [
"Moon",
"Belle",
"Ruby",
"Trisha",
"Jenna",
];

let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  // background(220);

  //array function
  //array.push();
  //array.splice();

  // names.push("Sean");
  // names.push("Will");
  // names.push("Cicci");

  // //to take out
  // names.splice(3,1);

for (let i = 0; i < 100; i++) {
  let x = random(width);
  let y = 0;
  let dia = random(1, 50);
  balls.push(new Ball(x, y, dia));
  
}

}

function draw() {
  background(220);
  // part 1 of class
  // let firstIndex = 0;
  // let lastIndex = names.length - 1;
  // text(names[lastIndex], 50, 100)

  // for (let i=0; i<names.length; i++) {
  //   let x = 120;
  //   let y = 100 + i *20; // variation
  //   text(i + ": " + names[i], x, y);
  // }


  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.display();

  }


}

class Ball {
  constructor(startX, startY, startDia) {
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-0.1, 0.1);
    this.ySpd = random(1, 8);
    this.dia = startDia;

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    push()
    noStroke()
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    rect(this.x, this.y, 20, 20, 5);
    rectMode(CENTER);
    pop()
  }
}