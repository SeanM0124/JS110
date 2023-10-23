const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const PLAYER = 'Player';
const COMPUTER = 'Computer';
const COMPUTER_MARKER = 'O';
const WIN_CONDITION = 2;
const WINNING_MOVES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
  [1, 5, 9], [3, 5, 7] //diagonals
];

function printLines() {
  console.log('+------------------------------------------------------+');
}

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

function readyToContinue() { //helps with program control flow - preventing text tidal wave.
  let answer = readline.question(prompt('Please enter "y" when you are ready to continue.')).toLowerCase();

  while (!['y'].includes(answer)) {
    answer = readline.question(prompt('Waiting for the proper input (y)')).toLowerCase();
  }
  clearScreen();
  return answer === 'y';
}

function displayBoard(board) {
  printLines();
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
    prompt("Sorry, that is not a valid choice.");
  }
  clearScreen();
  board[square] = HUMAN_MARKER;
}

function computerChoiceLoops(board, marker) {
  let square;
  for (let index = 0; index < WINNING_MOVES.length; index++) {
    let line = WINNING_MOVES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square) return square;
  }
  return null;
}

function computerChoosesSquare(board) {
  let square;

  square = computerChoiceLoops(board, COMPUTER_MARKER); //winning choice first

  if (!square) {
    square = computerChoiceLoops(board, HUMAN_MARKER); //defensive choice next
  }

  if (!square && board['5'] === INITIAL_MARKER) {
    square = '5';
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
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

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function roundResult(board, scores) {
  if (someoneWon(board)) {
    clearScreen();
    printLines();
    prompt(`${detectWinner(board)} won this round!`);
  } else {
    clearScreen();
    prompt("It's a tie!");
  }
  prompt(`Player: ${scores.player} Computer: ${scores.computer} (Ties:${scores.ties})`);
  readyToContinue();
}

function choosesSquare(board, player) {
  if (player === PLAYER) {
    playerChoosesSquare(board);
  } else  if (player === COMPUTER) {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  if (player === PLAYER) {
    return COMPUTER;
  } else if (player === COMPUTER) {
    return PLAYER;
  }
  return null;
}

function gameRound(board) {
  let currentPlayer = getStartChoice();
  while (true) {
    displayBoard(board);

    choosesSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
    clearScreen();
  }
}

function whoWon(scores) {
  if (scores.player === 5) {
    prompt('Congratulations, you won the series! 🥳');
    printLines();
  } else {
    prompt("Sorry, you've lost this series 😭");
    printLines();
  }
}

function firstTo5Wins(scores) {
  while (scores.player < WIN_CONDITION && scores.computer < WIN_CONDITION) {
    let board = initializeBoard();

    gameRound(board, scores);
    displayBoard(board);
    trackScores(board, scores);
    roundResult(board, scores);
  }
  whoWon(scores);
}

function trackScores(board, scores) {
  if (detectWinner(board) === 'Player') {
    scores.player += 1;
  } else if (detectWinner(board) === 'Computer') {
    scores.computer += 1;
  } else {
    scores.ties += 1;
  }
}

function getUserPlayAgainAnswer() {
  let answer = readline.question(prompt('Would you like to play again? (y/n)')).toLowerCase().trim();

  while (answer !== 'n' && answer !== 'y') {
    answer = readline.question(prompt('Invalid answer - would you like to play again? (y/n)')).toLowerCase().trim();

  }
  return answer === 'y';
}

function gameMainBody() {
  while (true) {
    let scores = {
      player: 0,
      computer: 0,
      ties: 0
    };
    firstTo5Wins(scores);

    if (!getUserPlayAgainAnswer()) {
      break;
    }
  }
}

function chooseFirstPlayer() {
  let choiceOfFirstMove = readline.question(prompt('Enter "1" if you want to go first, "2" if you want to go second, or "3" for random.'));

  if (!['1', '2', '3'].includes(choiceOfFirstMove)) {
    choiceOfFirstMove = readline.question(prompt('The only valid options are 1, 2 or 3'));
  }
  return choiceOfFirstMove;
}

function getStartChoice() {
  let choice = chooseFirstPlayer();
  switch (choice) {
    case '1': return PLAYER;
    case '2': return COMPUTER;
    case '3': return randomChoice();
  }
  return null;
}

function randomChoice() {
  let random = Math.floor(Math.random() * 2) + 1;
  if (random === 2) {
    return PLAYER;
  } else {
    return COMPUTER;
  }
}

function gameShellInitialize() {
  clearScreen();
  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  prompt(`First to ${WIN_CONDITION} wins!`);
  gameMainBody();
  clearScreen();
  prompt("Thanks for playing Sean's Tic Tac Toe!");
}

gameShellInitialize();
