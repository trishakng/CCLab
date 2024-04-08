let names = [
"Moon",
"Belle",
"Ruby",
"Trisha",
"Jenna",
];

let ballA, ballB;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  //array function
  //array.push();
  //array.splice();

  // names.push("Sean");
  // names.push("Will");
  // names.push("Cicci");

  // //to take out
  // names.splice(3,1);

ballA = new Ball(100,200,50);
ballB = new Ball(400,200,120);

}

function draw() {
  // part 1 of class
  // let firstIndex = 0;
  // let lastIndex = names.length - 1;
  // text(names[lastIndex], 50, 100)

  // for (let i=0; i<names.length; i++) {
  //   let x = 120;
  //   let y = 100 + i *20; // variation
  //   text(i + ": " + names[i], x, y);
  // }
  ballA.move();
  ballA.display();

  ballB.move();
  ballB.display();

}

class Ball {
  constructor(startX, startY, startDia) {
    this.x = startX;
    this.y = startY;
    this.dia = startDia;
  }
  
  move() {
    this.x += 1;
  }

  display() {
    push()
    circle(this.x, this.y, this.dia);
    pop()
  }
}