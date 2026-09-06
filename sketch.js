//الكود قبل بناء ال مينيو
let seed = 6418;
let n = 8 + seed % 8;
let p = 3 + seed % 4;
let d = 4 + seed % 3;
let shapes = [];
let palette = [
  [237,49,19],[23,143,66],[143,0,0],[32,30,29],[23,54,12]
];
let module=0;



function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(240);
text("1_Module 1", 20, 50);
text("2_Module 2", 20, 80);
text("3_Module 3", 20, 110);
text("4_Module 4", 20, 140);
text("5_Module 5", 20, 170);
}

function keyPressed(){
  if(key==='1'){
    module=1;
    console.log("not implemented yet");
  }
   if(key==='2'){
    module=2;
    console.log("not implemented yet");
  }
   if(key==='3'){
    module=3;
     console.log("not implemented yet");
  }
   if(key==='4'){
    module=4;
     console.log("not implemented yet");
  } 
  if(key==='5'){
    module=5;
    console.log("not implemented yet");
  }
  
}
