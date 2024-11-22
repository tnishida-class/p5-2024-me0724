// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = []; //scoresっていう名前の配列を作る
  for(let i = 0; i < 10; i++){ //繰り返しのfor文
    scores[i] = random(20, 100); // 20以上100未満のランダムな数をi番目に代入
  }
  console.log(scores); //console画面に映すための式。あんまり気にしないでいい

  // 合計を計算する
  let sum = 0; //0からカウントする。１０個の個数がある配列だとしたら０から９までたす
  for(let i = 0; i < scores.length; i++){ //scores（配列）の個数分足す
    sum += scores[i]; //　sum  = sum + scores[i]　sumというハコにiを一つ一つ入れていく
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average = sum / scores.length; // 平均値（ヒント average = 合計 / 配列の長さ）

  let largest = 0; //0から一対一で比較して最大値求める。最大値の時は小さい方から比較していく
  for(let i = 0; i < scores.length; i++){
    if (largest < scores[i]) {
     largest = scores[i];
    }
  }
  
  let smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if (scores[i] < smallest) {
      smallest = scores[i];
    }
  }


  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10; //？
  for(let i = 0; i < n; i++){
     line(0, height / n * i, width, height / n * i); 
    } 
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length; //一つ一つの棒グラフの幅を規定
    const h = height * scores[i] / 100; //画面の高さに対する割合を求めることで棒グラフの高さもわかる
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    if (scores[i] === largest) {
      fill(255, 0, 0);
    } else if (scores[i] === smallest) {
      fill(0, 0, 255);
    } else {
      fill(122);
    }
    rect(i * dx + 2, height - h, dx - 4, h); //　(スタート地点のx,y,横幅,縦幅)
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h); //数値を見える化する
  }

  // BLANK[5] 平均点の線を引きます
  stroke(0, 255, 0);
  const ah = height * average/100 //平均の数値の高さ
  line(0, height -  ah, width, height-ah); //線はスタート地点と終了時点のxy座標を決めたらいい
}
