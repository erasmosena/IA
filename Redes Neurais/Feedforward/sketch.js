var canvas

function centerCanvas() {
  var x = (canvas.parent().clientWidth - width) / 2;
  var y = (canvas.parent().clientHeght - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('container');
  centerCanvas();

  background(0);
  var nm = new RedeNeural(1,3,1);
  var arr = [1,2];
  nm.feedforward(arr);

}

function draw() {

}