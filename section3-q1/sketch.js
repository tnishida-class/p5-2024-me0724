// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let size = 50; //円の最小サイズ
  let count = 0; //0からスタート？
let cycle = 100; //サイズ変化の周期
let increment = 1; // カウンターの増加量 1ずつ増加

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255); 
  // カウンターを増加させ、周期ごとにリセット
  count = (count + increment) % cycle;
   if (keyIsPressed) {
   increment = 2;
} else {
  increment = 1;
   }
   if (count < cycle/2) {
  size = count + 50;
   } else {
  size = (cycle - count) + 50;
   }
  ellipse(width / 2, height / 2, size);
  }
