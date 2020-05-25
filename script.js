let boardState = [null, null, null, null, null, null, null, null, null];
let turn = 'X';

const game = document.querySelector('#game');
const gameBoard = document.createElement('div');
gameBoard.classList.add('game-board');
game.append(gameBoard);

function renderBoard() {
  let cols = [];
  boardState.forEach((val, i) => {
    const col = document.createElement('button');
    col.innerHTML = val;
    col.classList.add('col');
    col.dataset['id'] = i;
    cols.push(col);

    if ((i + 1) % 3 === 0) {
      const row = document.createElement('div');
      row.innerHTML = val;
      row.classList.add('row');
      row.append(cols[0], cols[1], cols[2]);
      gameBoard.append(row);

      cols = [];
    }
  });
}

function updateBoard() {
  boardState.forEach((val, i) => {
    document.querySelector(`[data-id="${i}"]`).innerHTML = val;
  });
}

function resetGameState() {
  boardState = [null, null, null, null, null, null, null, null, null];
  turn = 'X';
}

function isWinState() {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    winStates.filter(
      winState =>
        boardState[winState[0]] !== null &&
        boardState[winState[0]] === boardState[winState[1]] &&
        boardState[winState[1]] === boardState[winState[2]]
    ).length > 0
  );
}

document.addEventListener('click', event => {
  if (event.target.classList[0] === 'col') {
    const id = parseInt(event.target.dataset['id']);

    if (boardState[id] === null) {
      boardState[id] = turn;
      // event.target.innerHTML = turn;
      turn = turn === 'X' ? 'O' : 'X';

      if (isWinState()) {
        console.log('WINNER');
        resetGameState();
      }
    }
  }

  updateBoard();
});

// Start game
renderBoard();
