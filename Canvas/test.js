var tela = document.querySelector("canvas");
var context = tela.getContext("2d");

context.fillStyle = "grey";
context.fillRect(0, 0, 400, 400);

var mouseClicked = false,
  mouseReleased = true;

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e) {
  mouseClicked = !mouseClicked;
}

function onMouseMove(e) {

  
  if(mouseClicked) {
  context.fillStyle = `#000`;

  context.beginPath();
  context.arc(e.pageX, e.pageY, 3, 0, Math.PI * 2, true);
  context.fill();
  context.stroke(false);
  }
}
