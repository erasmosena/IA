var canvas

function centerCanvas() {
  debugger
  var x = (canvas.parent().clientWidth - width) / 2;
  var y = (canvas.parent().clientHeght - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('container');
  centerCanvas();

  background(0);
  var m1 = new Matrix(1, 2);
  var m2 = new Matrix(2, 1);
  Matrix.produtoInterno(m1, m2);
}

function draw() {

}