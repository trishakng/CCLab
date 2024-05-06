let video;
let button;

let snapshot = false;

let snd;
let camera;


// function preload(){
//   camera = loadSound("assets/camera.mov");

// }

function setup() {
  let canvas = createCanvas(640, 360);
  canvas.parent("p5-canvas-container");

  background(51);


  video = createCapture(VIDEO);
  // video.size(640, 480);
  video.hide();




  // imageMode(CENTER);

  button = createButton('snap'); //create a button called "snap"
  button.mousePressed(takesnap); //when the button is pressed, call the function called "takesnap"


}

function takesnap() {
  snapshot = true;
}


function draw() {
  if (snapshot == false) {
    image(video, 0, 0, 640, 360);


  }

}

function mousePressed() {
  camera.play();

}
// function linkWithSound(link) {
//   snd.play();
//   // anonymous function
//   setTimeout(function () {
//       window.open(link, "_self");
//   }, 750);
// }
