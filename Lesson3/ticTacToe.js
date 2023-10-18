const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_MOVES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
  [1, 5, 9], [3, 5, 7] //diagonals
];

function clearScreen() {
  console.clear();
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(emptySquares) {
  let start = emptySquares.slice(0, emptySquares.length - 1);
  let end = emptySquares.slice(emptySquares.length - 1);
  if (emptySquares.length > 1) {
    prompt(`Please choose a square: ${start.join(', ')} or ${String(end)}.`);
  } else {
    prompt(`The last square is ${String(end)}`);
  }
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function displayBoard(board) {
  clearScreen();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('1    |2    |3');
  console.log(`  ${board['1']}  |  ${board['2']}  |   ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('4    |5    |6');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('7    |8    |9');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    square = readline.question(joinOr(emptySquares(board))).trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, thats not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_MOVES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_MOVES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function roundResult(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function gameRound(board) {
  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

  }
}

function gameShell() {
  while (true) {
    let board = initializeBoard();

    gameRound(board);
    displayBoard(board);

    roundResult(board);

    let answer = readline.question(prompt('Play again? (y or n)')).toLowerCase()[0];
    if (answer !== 'y') break;
  }
  clearScreen();
  prompt("Thanks for playing Sean's Tic Tac Toe!");
}

gameShell();
