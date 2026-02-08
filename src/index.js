import './css/style.css';
import goblinUrl from './assets/goblin.png';
import { getRandomInt, getNextIndex } from './helper/move';

function buildField(container, size = 4) {
  const total = size * size;
  const cells = [];

  for (let i = 0; i < total; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
    cells.push(cell);
  }
  return cells;
}

function createGoblin() {
  const img = document.createElement('img');
  img.classList.add('goblin');
  img.src = goblinUrl;
  img.alt = 'goblin';
  return img;
}

document.addEventListener('DOMContentLoaded', () => {
  const gameEl = document.getElementById('game');
  const cells = buildField(gameEl, 4);

  const goblin = createGoblin();

  let currentIndex = getRandomInt(cells.length);
  cells[currentIndex].appendChild(goblin);

  setInterval(() => {
    const nextIndex = getNextIndex(currentIndex, cells.length);
    cells[nextIndex].appendChild(goblin);
    currentIndex = nextIndex;
  }, 1000);
});
