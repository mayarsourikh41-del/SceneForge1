let seed = 6418;
let n = 8 + seed % 8;
let p = 3 + seed % 4;
let d = 4 + seed % 3;
let shapes = [];
let palette = [
  [237,49,19],[23,143,66],[143,0,0],[32,30,29],[23,54,12]
];
let mode = 0; 
let state = seed;

function setup() {
  createCanvas(400, 400); 
  CreateShape();
}

function draw() {
  background(240);

  if (mode === 0) {
    fill(0);
    textSize(18);
    text("                 ======Menue======",20,50)
    textSize(14);
    text("1. Module 1: Shapes & Colors", 20, 80);
    text("2. Module 2: Sierpinski Gasket", 20, 110);
    text("3. Module 3: Transform Scene", 20, 140);
    text("4. Module 4: View in 3-D", 20, 170);
    text("5. Module 5: Measure & Compare", 20, 200);

  }

  if (mode === 1) {
    let rectCount = 0;
    let circleCount = 0;
    let triangleCount = 0;

    for (let i = 0; i < shapes.length; i++) {
      let s = shapes[i];

      fill(palette[s.color]);
      stroke(0);

      if (s.type === 0) {
        rect(s.x, s.y, s.size, s.size);
        rectCount++;
      }
      if (s.type === 1) {
        circle(s.x, s.y, s.size);
        circleCount++;
      }
      if (s.type === 2) {
        triangle(s.x, s.y, s.x - s.size, s.y + s.size, s.x + s.size, s.y + s.size);
        triangleCount++;
      }
    }
    fill(0);
    noStroke();
    textSize(12);

    text("seed: " + seed, 20, 30);
    text("shapes: " + n, 20, 50);
    text("palette colors: " + p, 20, 70);
    text("depth: " + d, 20, 90);

    text("rect count: " + rectCount, 260, 30);
    text("circle count: " + circleCount, 260, 50);
    text("triangle count: " + triangleCount, 260, 70);
    text("total shapes: " + n, 260, 90);

    fill(120);
    text("Press [M] to return to Menu", 20, 370);
  }

  if (mode === 2) {
    mode=2;
     console.log("not implemented yet");
  }
  if (mode === 3) {
     mode=3;
     console.log("not implemented yet");  }
  if (mode === 4) {
     mode=4;
     console.log("not implemented yet");  }
  if (mode === 5) {
     mode=5;
     console.log("not implemented yet");  }
} 


function keyPressed() {
  if (key === '1') {
    mode = 1;
  }
  if (key === '2') {
    mode = 2;
  }
  if (key === '3') {
    mode = 3;
  }
  if (key === '4') {
    mode = 4;
  }
  if (key === '5') {
    mode = 5;
  }
  if (key === 'm' || key === 'M') {
    mode = 0; 
  }
}

function next(x) {
  return (1103515245 * x + 12345) % 2147483648;
}

function CreateShape() {
  for (let i = 0; i < n; i++) {
    state = next(state);
    let typeSh = floor(state % 3);

    state = next(state);
    let colorSh = floor(state % p);

    state = next(state);
    let xSh = floor(state % 400);

    state = next(state);
    let ySh = floor(state % 400);

    state = next(state);
    let sizeSh = floor(state % 50) + 15;

    shapes.push({
      type: typeSh,
      color: colorSh,
      x: xSh,
      y: ySh,
      size: sizeSh
    });
  }
}