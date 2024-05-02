function setup() {
  let osc;
  
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  

  osc = new p5.Oscillator('sine');
}

function draw() {
  


let ampValue = map(mouseY, 0, height, 1.0, 0.0, true);
osc.freq(freqValue)

}

function mousePresed() {
  osc.start();
  
}

