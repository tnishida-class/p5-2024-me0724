// 最終課題作成


let stars = []; // 星の配列
let numStars = 50; // 星の数

function setup() {
  createCanvas(windowWidth, windowHeight); 
  // キャンバスのサイズ

  // 色の配列を初期化
  colors = [
    color(204, 255, 102),   // 緑
    color(255, 255, 153),   // 黄色
    color(255, 204, 255),   // ピンク
    color(153, 255, 255), // 青
    color(204, 153, 255)  // 紫
  ];

  for (let i = 0; i < numStars; i++) {
    // 星を初期化
    stars.push({
      x: random(width), // ランダムなX座標
      y: random(-height, height), // 初期Y座標（画面外も含む）
      size: random(10, 20), // 星のサイズ
      speed: random(1, 5), // 星の落下スピード
      color: random(colors),
    });
  }
}




function draw() {
  background(253, 245, 230); // 背景
  noStroke();
  // fill(255, 255, 102); // 星を黄色に

  for (let star of stars) {
    fill(star.color)
    konpeito(star.x, star.y, star.size); // 星を描画
    star.y += star.speed; // 星を落下させる

    // 星が画面の下に到達したら上部に戻る
    if (star.y > height) {
      star.y = random(-50, -10); // 少し画面外に設定
      star.x = random(width); // 新しいX座標を設定
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function konpeito(cx, cy, r){
  beginShape();
  for(let i = 0; i < 7; i++){
    let theta = TWO_PI * i * 2 / 7 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

  