

var TAU = Math.PI * 2;
var density = 1;
var speed = 1;
var res = 0.005; // percentage of screen per x segment
var outerScale = 0.01 / density;
var inc = [0, 0, 0, 0];

var c = document.getElementsByTagName('canvas')[0];
var ctx = c.getContext('2d');

var grad = ctx.createLinearGradient(0, 0, 0, c.height * 4);
grad.addColorStop(0, 'rgba(223, 191, 32, 1)');
grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

function onResize() {
  $("canvas").attr({
    width: $(window).width() + "px",
    height: $(window).height() + "px"
  });
}

$(window).resize(onResize);

$(document).ready(function() {
  onResize();
  loop();
});

function loop() {
  drawWave();
  requestAnimationFrame(loop);
}

function drawOneWave(n, ctxt, w, h, xMultiplier, yMultiplier, fill, TAU, speed, density) {
  inc[n] -= speed;
  var cx = w * xMultiplier;
  var cy = h * yMultiplier;
  var segmentWidth = w * res;
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(0, cy);
  for (var i = 0, endi = 1 / res; i <= endi; i++) {
    var _y = cy + Math.sin((i + inc[n]) * TAU * res * density) * cy * Math.sin(i * TAU * res * density * outerScale);
    var _x = i * segmentWidth;
    ctx.lineTo(_x, _y);
  }
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();
}

function drawWave() {
  var w = c.offsetWidth;
  var h = c.offsetHeight;
  ctx.clearRect(0, 0, w, h);
  drawOneWave(0, ctx, w, h, 0.5, 0.5, 'rgba(255, 255, 255, .35)', Math.PI * 2, 0.1, 1.5);
  drawOneWave(1, ctx, w, h, 0.5, 0.5, 'rgba(255, 255, 255, .35)', Math.PI * 2, 0.15, 2);
  drawOneWave(2, ctx, w, h, 0.5, 0.5, 'rgba(255, 255, 255, .35)', Math.PI * 2, 0.2, 2.5);
}