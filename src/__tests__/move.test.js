import { getNextIndex } from '../helper/move';

test('getNextIndex never returns current when total > 1', () => {
  const total = 16;

  for (let current = 0; current < total; current += 1) {
    for (let i = 0; i < 50; i += 1) {
      const next = getNextIndex(current, total);

      expect(next).not.toBe(current);
      expect(next).toBeGreaterThanOrEqual(0);
      expect(next).toBeLessThan(total);
    }
  }
});
