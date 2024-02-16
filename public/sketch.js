let video;
let detector;
let detections = [];
let allDetections = [];
let button;
let detecting = false;
let socket;

let lines = []; 
let yPos = []; 

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector = ml5.objectDetector('cocossd', modelReady);

  socket = io.connect(window.location.origin);

  socket.on('poem', (poem) => {
    console.log(poem);
    lines = poem.split('\n'); // as poem comes as a single string we use '\n' to do line breaks
    
    yPos = [];
    for (let i = 0; i < lines.length; i++) {
      yPos.push(-500 - i * 100); //  y positions off-screen
    }
  });

  button = createButton('Start Detection');
  button.position(10, height - 30);
  button.mousePressed(toggleDetection);

  textFont('Helvetica');
  textSize(18);
  textAlign(CENTER, CENTER);
}

function modelReady() {
  console.log("Model Loaded!");
}

function draw() {
  background(0);

  fill(255);
  noStroke();

  
  for (let i = 0; i < lines.length; i++) {
    if (yPos[i] !== undefined) { 
      text(lines[i], width / 2, yPos[i]);
      yPos[i] += 1 + i * 0.2; // each line moves at a slightly different speed

      // reset position if it goes off-screen
      if (yPos[i] > height + 100) {
        yPos[i] = -50 - i * 100; 
      }
    }
  }
}

function toggleDetection() {
  detecting = !detecting;
  if (detecting) {
    detector.detect(video, gotDetections);
    button.html('Stop Detection');
  } else {
    button.html('Start Detection');
    
    socket.emit("requestPoem", allDetections.join(', ')); 
    allDetections = []; 
  }
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detections.forEach(detection => {
    if (!allDetections.includes(detection.label)) {
      allDetections.push(detection.label);
    }
  });
  if (detecting) {
    detector.detect(video, gotDetections);
  }
}
