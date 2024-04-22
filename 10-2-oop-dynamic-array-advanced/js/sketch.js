let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // generate
  particles.push(new Particle(width / 2, height / 2, 30));
}

function draw() {
  background(220);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
  }

  //limit the number of objects
  for (particles.length > 1500) {
    let index = 0;
    particles.splice(index,1);
  }
  // display the number of particles
  text(particles.length, 10, 20);
}

//

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad
  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.rad * 2);
    pop();
  }
}
