import './css/style.css';
import goblinUrl from './assets/goblin.png';
import { getRandomInt, getNextIndex } from './helper/move';

function buildField(container, size = 4) {
  const total = size * size;
  const cells = [];

  for (let i = 0; i < total; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.append(cell);
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
  if (!gameEl) {
    console.log('Элемент с id "game" не найден');
    return
  }
  const cells = buildField(gameEl, 4);
  const goblin = createGoblin();

  let currentIndex = getRandomInt(cells.length);
  cells[currentIndex].append(goblin);

  function stopGame() {
    if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
      console.log('Игра остановлена');
    }
  }

  gameEl.addEventListener('click', (event) => {
    if (event.target.classList.contains('goblin') || event.target.closest('.goblin')) {
      stopGame();
      alert('Игра остановлена!');
    }
  });

  let gameInterval = setInterval(() => {
    if (!goblin || !document.body.contains(goblin)) {
      stopGame()
      console.log('Гоблин не найден, интервал остановлен');
      return
    }
    const nextIndex = getNextIndex(currentIndex, cells.length);
    cells[nextIndex].append(goblin);
    currentIndex = nextIndex;
  }, 1000);
});