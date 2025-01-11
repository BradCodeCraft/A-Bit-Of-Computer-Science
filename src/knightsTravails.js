const route = new Map();

function chessSquare(x, y) {
  let predecessor;

  const KNIGHT_MOVES = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ]

  function getPredecessor() {
    return predecessor;
  }

  function setPredecessor(square) {
    predecessor = square;
  }

  function info() {
    return `(${x}, ${y})`;
  }

  function createKnightMoves() {
    return KNIGHT_MOVES.map(newSquareFrom).filter(Boolean);
  }

  function newSquareFrom([xOffset, yOffset]) {
    const [newX, newY] = [x + xOffset, y + yOffset];

    if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
      return new chessSquare(newX, newY);
    }
  }

  if (route.has(info())) {
    return route.get(info());
  } else {
    const newSquare = { info, getPredecessor, setPredecessor, createKnightMoves };
    route.set(info(), newSquare);
    return newSquare;
  }
}

function knightMoves(start, end) {
  route.clear();

  const origin = chessSquare(...start);
  const target = chessSquare(...end);

  const queue = [target];
  while (!queue.includes(origin)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.createKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }

  const path = [origin]
  while (!path.includes(target)) {
    const currentSquare = path[path.length - 1];
    path.push(currentSquare.getPredecessor());
  }
  return path.map((square) => square.info());
}

module.exports = { knightMoves };
