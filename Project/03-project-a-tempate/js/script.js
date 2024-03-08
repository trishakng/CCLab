console.log("test");


function setup(){
    let canvas = createCanvas(800,500);
    canvas.parent("p5-canvas-container")
}

function draw() {
    background(0);
    
    noStroke()
    fill(255,131, 120)
    circle(400,250, 100);
}