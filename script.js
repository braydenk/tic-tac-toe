console.log('sx');

const boardState = [null, null, null, null, null, null, null, null, null];

const game = document.querySelector('#game');

const gameBoard = document.createElement('div');
gameBoard.classList.add('game-board');

for (let i = 0; i < 3; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < 3; j++) {
    const col = document.createElement('div');
    col.classList.add('col');
    // col.dataset.add(j);
    row.append(col);
  }

  gameBoard.append(row);
}

game.append(gameBoard);
