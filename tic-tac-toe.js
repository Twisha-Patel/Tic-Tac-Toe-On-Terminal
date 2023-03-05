//Tic-Tac-Toe on terminal
const prompt = require ('prompt');
const board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};
function printBoard () {
  console.log (
    '\n' +
      ' ' +
      board[1] +
      ' | ' +
      board[2] +
      ' | ' +
      board[3] +
      '\n' +
      ' ---------\n' +
      ' ' +
      board[4] +
      ' | ' +
      board[5] +
      ' | ' +
      board[6] +
      '\n' +
      ' ---------\n' +
      ' ' +
      board[7] +
      ' | ' +
      board[8] +
      ' | ' +
      board[9] +
      '\n'
  );
}
function playGame (player) {
  console.log ('Your turn player: ' + player);
  prompt.start ();
  prompt.get (['position'], function (err, result) {
    if (validateMove (result.position) === true) {
      markOnBoard (result.position, player);
      printBoard ();
      if (checkWin (player) === true) {
        console.log ('Its A Win! Player ' + player + ' is Winner');
        return;
      }
      if (checkDraw (player, board) == true) {
        console.log ('Match is a draw!');
        return;
      }
      if (player === 'X') {
        playGame ('O');
      } else {
        playGame ('X');
      }
    } else {
      console.log (
        'position you entered is not correct please re-enter the position'
      );
      playGame (player);
    }
  });
}
function markOnBoard (position, mark) {
  board[position] = mark;
}

function isInteger (value) {
  if (isNaN (value)) {
    return false;
  }
  return value == parseInt (value);
}

function validateMove (position) {
  return (
    isInteger (position) &&
    board[position] === ' ' &&
    position >= 1 &&
    position <= 9
  );
}

const winingCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function checkWin (player) {
  let i, j, countOfMark;
  for (i = 0; i < winingCombinations.length; i++) {
    countOfMark = 0;
    for (j = 0; j < winingCombinations[i].length; j++) {
      if (board[winingCombinations[i][j]] === player) {
        countOfMark++;
      }
      if (countOfMark === 3) {
        return true;
      }
    }
  }
  return false;
}
function checkDraw (player, board) {
  if (
    checkWin (player) == false &&
    board[1] !== ' ' &&
    board[2] !== ' ' &&
    board[3] !== ' ' &&
    board[4] !== ' ' &&
    board[5] !== ' ' &&
    board[6] !== ' ' &&
    board[7] !== ' ' &&
    board[8] !== ' ' &&
    board[9] !== ' '
  ) {
    return true;
  }
  return false;
}
console.log (
  'Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n'
);
console.log ('NOTE: 1,2,3...9 indicates the position');
console.log (`STEP1:TO RUN THIS YOU NEED TO HAVE NODE INSTALLED
STEP2: npm install prompt`);

playGame ('X');
