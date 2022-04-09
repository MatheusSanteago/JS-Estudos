var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var counterSpan = document.querySelector("span");
var btn = document.querySelector("button");
var num = document.querySelector("select");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 700, 500);

var posX, posY;
var counter = 0;
var raio = 15;
var jogar = false;
var clicked = false;

function drawCircle(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 700, 500);
}

function drawNumbers(max) {
  return Math.floor(Math.random() * max);
}

function shot(evt) {
  clicked = true;
  var y = evt.pageY - tela.offsetTop;
  var x = evt.pageX - tela.offsetLeft;
 
  if (clicked) {
    if (
      x > posX - raio &&
      x < posX + raio &&
      y > posY - raio &&
      y < posY + raio
    ) {
      counter += 1;
      console.log(counter);
      counterSpan.innerHTML = counter + " Acertos ";
    }
  }
}

tela.onclick = shot;

function exibir(e) {
  limpaTela();
  posX = drawNumbers(700);
  posY = drawNumbers(500);
  drawCircle(posX, posY, raio + 13, "black");
  drawCircle(posX, posY, raio + 10, "gold");
  drawCircle(posX, posY, raio + 3, "black");
}

function startGame() {
  n = num.value;
  console.log(n);
  switch (n) {
    case "1":
      draw(1000);
      console.log("1");
      break;
    case "2":
      console.log("2");
      draw(800);
      break;
    case "3":
      console.log("3");
      draw(700);
      break;
  }
}

function draw(speed) {
  btnLocked = true;
  if (btnLocked == true) {
    clicked = false;
    setInterval(exibir, speed);
    btn.style.display = "none";
    num.style.display = "none";
  }
}
