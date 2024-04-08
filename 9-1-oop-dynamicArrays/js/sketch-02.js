let balls = [];


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // balls[0] = new Ball(); // calls constructor
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));

}

function draw() {
  background(200);

  // balls.push(new Ball(mouseX, mouseY, random(5,30)));
  // balls[0] = new Ball(); // calls constructor
  balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));
  // balls.push(new Ball(width /2, height/2, random(5,30)));

  //update and display
  for (let i = 0; i < balls.length; i ++){
  let b = balls[i]; // get each ball
    b.display();
    b.move();
    // b.slowDown();
    b.speedUp();
  }
  
  if(balls.lenght > 50){
    //lets remove the first oldest element
    balls.splice(0, 1);
  }


  text(frameRate().toFixed(2), 10, 20);
  text(balls.length, 10, 40);
}

class Ball {
  constructor(initX, initY, initDia){
    this.x = initX;
    this.y = initY;
    this.xSpd = random(-1,1);
    this.ySpd = random(-1, 1);
    this.dia = initDia;
  }

  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    pop();
  }
  move(){
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  speedUp(){
    this.xSpd = this.xSpd * 1.02;
    this.y *= 0.02;
  }
  slowDown(){
    this.xSpd = this.xSpd * 0.98;
    this.y = 0.95;
  }
  
}