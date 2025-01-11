const { knightMoves } = require('../src/knightsTravails.js');

test('knightMoves', () => {
  expect(knightMoves([0, 0], [1, 2])).toEqual([
    '(0, 0)', '(1, 2)'
  ]);
  expect(knightMoves([0, 0], [3, 3])).toEqual([
    '(0, 0)', '(1, 2)', '(3, 3)'
  ]);
});
