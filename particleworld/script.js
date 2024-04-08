// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 50; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width,0), random(-height,0));
  }
}

function draw() {
  background(-10, 60);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.applyWind();
    if(p.y >height){
      particles.splice(i,1);
    }
  }
  if(particles.length == 0){
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      particles[i] = new Particle(random(width), random(-height, 20));
  }
}
}
class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(-1,10);
    this.xSpd = random(0, 0.8);
    this.ySpd = random(0.5, 2)
    this.dir = 3;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x += this.xSpd * this.dir;
    this.y += this.ySpd;
    this.dir *= 0.5;
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    fill(255, 156, random(239));
    noStroke();
    for (let i = 0; i < 8; i ++) {
      ellipse(0, 30, this.dia, 60);
      ellipse(0, 10, this.dia, 10);
      rect(0, 10, 10, 10);
      ellipse(0, 30, 10, 10);
      ellipse(0, 60, 10, 10);
      rotate(radians(PI*100));
    }
  

    pop();
  }

  applyWind(){
    if(mouseX < width/2){
      this.dir = 1;
     } else{
      this.dir = -1;
   }
 }
}
