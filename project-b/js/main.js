let snd;

// preload
function preload(){
snd = loadSound("assets/click.mp3");
}



function setup() {
    noCanvas();
}

function draw() {
    noLoop();
}

function playSound() {
    snd.play();
    // console.log("Do something!");
}