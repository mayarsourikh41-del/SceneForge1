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
let sierpinskiCount=0;

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
    sierpinskiCount=0;
    let a=createVector(200,20);
    let b=createVector(20,380);
    let c=createVector(380,380);
    sierpinski(a,b,c,d,1);
    fill(0);
    noStroke();
    text("sierpinski count: " + sierpinskiCount, 20, 110);
    text("seed: " + seed, 20, 30);
    text("shapes: " + n, 20, 50);
    text("palette colors: " + p, 20, 70);
    text("depth: " + d, 20, 90);
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
function sierpinski(a, b, c, depth,color1){
   if (depth === 0) {
     fill(palette[color1 % p]); 
     stroke(0);
     triangle(a.x,a.y, b.x,b.y, c.x,c.y);
     sierpinskiCount++;
     return;
 }
 let ab = p5.Vector.lerp(a,b,0.5);
 let bc = p5.Vector.lerp(b,c,0.5);
 let ca = p5.Vector.lerp(c,a,0.5);
 sierpinski(a, ab, ca, depth-1,color1);
 sierpinski(ab, b, bc, depth-1,color1+1);
 sierpinski(ca, bc, c, depth-1,color1+2);
}