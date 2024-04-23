let img;

function preload(){
    img = loadImage("assets/suzhou.jpg");
  
  }
  
  
  function setup() {
    let canvas = createCanvas(1200, 1400);
    canvas.parent("p5-canvas-container");
    background(225);

  }
  
  function draw() {
    background(255);
    image(img, 0, 0);

    for(let i = 0; i<50; i++){
        let x = floor(random(width));
        let y = floor(random(height));
        let dia = random(10, 10)
        let c = img.get(x,y)

        let r = red(c);
        let g = green(c);
        let b = blue(c);
        let a = alpha(c);

        let avg = (r + g + b) / 3;

        noStroke();
        fill(r + 50, g, b, a);
        circle(x, y, dia)
    }

//    image(cam, 0, 0);
  
    }

