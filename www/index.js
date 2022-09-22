import {Cell, Species, Universe} from 'sandtable';
// Import the WebAssembly memory at the top of the file.
import {memory} from 'sandtable/sandtable_bg';

import {startWebGL} from './render'
import {fps, play} from './ui'

let ratio = 3;
let screen_width = window.innerWidth / ratio;
let screen_height = window.innerHeight / ratio;
// let pixels = screen_width * screen_height;

// Construct the universe, and get its width and height.
const universe = Universe.new(screen_width, screen_height);
const width = universe.width();
const height = universe.height();

const canvas = document.getElementById('game-of-life-canvas');
canvas.height = height;
canvas.width = width;
console.log(Species)
const renderLoop = () => {
  fps.render();  // new
  universe.tick();
  window.animationId = requestAnimationFrame(renderLoop);
};

startWebGL({canvas, universe})
renderLoop();
export {
  renderLoop,
  canvas,
  width,
  height,
  universe,
  ratio,
}