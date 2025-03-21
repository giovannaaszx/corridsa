function setup() {
    createCanvas(400, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("white");
    } else {
      background("grey");
    }
  
    textSize(60);
    text("🤬", xJogador1, 100);
    text("🥵", xJogador2, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 350) {
      text("Jogador 2 venceu!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Parabéns jogador 2", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "w") {
      xJogador1 += random(20);
    }
    if (key == "d") {
      xJogador2 += random(40);
    }
  }
  