let img;

function preload(){
    img = loadImage("assets/fammart1.png");
  
  }
  
  
  function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-canvas-container");
    background(0);

  }
  
  function draw() {
    background((245, 245, 245));
    image(img, 250, 0);

    for(let i = 0; i<50; i++){
        let x = floor(random(width));
        let y = floor(random(height));
        let dia = random(10, 30)
        let c = img.get(x,y)

        let r = red(c);
        let g = green(c);
        let b = blue(c);
        let a = alpha(c);

        let avg = (r + g + b) / 3;

        noStroke();
        fill(r, g, b, a);
        circle(x, y, dia)
    }

//    image(cam, 0, 0);
  
    }

