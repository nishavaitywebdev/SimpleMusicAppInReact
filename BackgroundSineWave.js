// react
import React from 'react';
import ReactDOM from 'react-dom';

export default class BackgroundSineWave extends React.Component {

  componentWillMount() {
    this.onResize();
    this.loop();
  }

  onResize() {
    const c = ReactDOM.findDOMNode(this._component);
    c.setAttr({
      width: '100%', // change it to window.width
      height: '100%',
    });
  }

  loop() {
    this.drawWave();
    this.requestAnimationFrame();
  }

  drawOneWave(n, w, h, yMultiplier, fill, TAU, speed, density) {
    const inc = [0, 0, 0, 0];
    const res = 0.005; // percentage of screen per x segment
    const c = ReactDOM.findDOMNode(this._component);
    const ctx = c.getContext('2d');
    inc[n] -= speed;
    const cy = h * yMultiplier;
    const segmentWidth = w * res;
    const outerScale = 0.01 / density;
    const grad = ctx.createLinearGradient(0, 0, 0, c.height * 4);
    grad.addColorStop(0, 'rgba(223, 191, 32, 1)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    for (let i = 0, endi = 1 / res; i <= endi; i++) {
      const calcOne = cy + Math.sin((i + inc[n]) * TAU * res * density);
      const _y = calcOne * cy * Math.sin(i * TAU * res * density * outerScale);
      const _x = i * segmentWidth;
      ctx.lineTo(_x, _y);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
  }

  drawWave() {
    const c = ReactDOM.findDOMNode(this._component);
    const ctx = c.getContext('2d');
    const w = c.offsetWidth;
    const h = c.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    this.drawOneWave(0, h, 0.5, 0.5, 'rgba(255, 255, 255, .35)', Math.PI * 2, 0.1, 1.5);
    this.drawOneWave(1, h, 0.5, 0.5, 'rgba(255, 255, 255, .35)', Math.PI * 2, 0.15, 2);
    this.drawOneWave(2, h, 0.5, 0.5, 'rgba(255, 255, 255, .35)', Math.PI * 2, 0.2, 2.5);
  }

  render() {
    return (
      <canvas>
      </canvas>
    );
  }
}
