export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getNextIndex(current, total) {
  if (total <= 1) return 0;

  let next = getRandomInt(total);
  while (next === current) {
    next = getRandomInt(total);
  }
  return next;
}
