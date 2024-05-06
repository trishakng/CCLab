let snd;

// preload
function preload() {
    snd = loadSound("assets/click.mov");
}

function setup() {
    noCanvas();
}

function draw() {
    noLoop();
}

function linkWithSound(link) {
    snd.play();
    // anonymous function
    setTimeout(function () {
        window.open(link, "_self");
    }, 750);
}
