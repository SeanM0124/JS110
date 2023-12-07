const readline = require('readline-sync');
const MESSAGES = require('./ttt.json');
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
  console.log('+-----------------------------------------------------------------------------------------+');
}

function clearScreen() {
  console.clear();
}

function prompt(message) {
  if (Object.keys(MESSAGES).includes(message)) {
    console.log(`=> ${MESSAGES[message]}`);
  } else {
    console.log(`=> ${message}`);
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
  let answer = readline.question(prompt('enterContinue'));
  answer = true;

  clearScreen();
  return answer;
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

function whoWon(scores) { //determines series conclusion
  if (scores.player === WIN_CONDITION) {
    prompt('wonSeries');
    printLines();
  } else {
    prompt("lostSeries");
    printLines();
  }
}

function getUserPlayAgainAnswer() {
  let answer = readline.question(prompt('getUserPlayAgain')).toLowerCase().trim();

  while (answer !== 'n' && answer !== 'y') {
    answer = readline.question(prompt('invalidPlayAgain')).toLowerCase().trim();

  }
  return answer === 'y';
}

function displayRoundResult(board, scores) {
  if (someoneWon(board)) {
    clearScreen();
    displayBoard(board);
    printLines();
    prompt(`${detectWinner(board)} won this round!`);
  } else {
    clearScreen();
    displayBoard(board);
    prompt("tie");
  }
  prompt(`Player: ${scores.player} Computer: ${scores.computer} (Ties:${scores.ties})`);
  readyToContinue();
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

function trackScores(board, scores) {
  if (detectWinner(board) === 'Player') {
    scores.player += 1;
  } else if (detectWinner(board) === 'Computer') {
    scores.computer += 1;
  } else {
    scores.ties += 1;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function alternatePlayer(currentPlayer) { //controls turn order
  if (currentPlayer === PLAYER) {
    return COMPUTER;
  } else if (currentPlayer === COMPUTER) {
    return PLAYER;
  }
  return null;
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

function computerChoiceLoops(board, marker) { //generic loop logic for computer
  let square;
  for (let index = 0; index < WINNING_MOVES.length; index++) {
    let line = WINNING_MOVES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square) return square;
  }
  return null;
}

function computerChoosesSquare(board) { //logic flow to determine computers moves
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

function joinOr(emptySquares) { //lists possible choices
  let start = emptySquares.slice(0, emptySquares.length - 1);
  let end = emptySquares.slice(emptySquares.length - 1);
  if (emptySquares.length > 1) {
    prompt(`Please choose a square: ${start.join(', ')} or ${String(end)}.`);
  } else {
    prompt(`The last square is ${String(end)}`);
  }
}

function emptySquares(board) { //determines valid move options
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) { //player input
  let square;
  while (true) {
    square = readline.question(joinOr(emptySquares(board))).trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that is not a valid choice.");
  }
  clearScreen();
  board[square] = HUMAN_MARKER;
}

function choosesSquare(board, currentPlayer) { //depending turn order - prompts placement choices
  if (currentPlayer === PLAYER) {
    playerChoosesSquare(board);
  } else  if (currentPlayer === COMPUTER) {
    computerChoosesSquare(board);
  }
}

function gameRound(board, currentPlayer) { //Each unique round is played in here
  currentPlayer = alternatePlayer(currentPlayer);
  clearScreen();
  while (true) {
    displayBoard(board);
    choosesSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
    clearScreen();
  }
}

function randomChoice() {
  let random = Math.floor(Math.random() * 2) + 1;
  if (random === 2) {
    return PLAYER;
  } else {
    return COMPUTER;
  }
}

function chooseFirstPlayer() { //takes user input and validates
  let choiceOfFirstMove = readline.question(prompt('chooseTurnOrder'));

  while (!['1', '2', '3'].includes(choiceOfFirstMove)) {
    choiceOfFirstMove = readline.question(prompt('invalidTurnChoice'));
  }
  return choiceOfFirstMove;
}

function getStartChoice() { //function that evaluates player input for who starts.
  let choice = chooseFirstPlayer();
  switch (choice) {
    case '1': return COMPUTER; //returns opposeite due to player swap in rounds..
    case '2': return PLAYER; //is accounted for at start of round
    case '3': return randomChoice();
    default: return COMPUTER;
  }
}

function firstTo5Wins(scores) { //Holds the rounds and overall game flow.
  let currentPlayer = getStartChoice();
  while (scores.player < WIN_CONDITION && scores.computer < WIN_CONDITION) {
    let board = initializeBoard();
    gameRound(board, currentPlayer);
    trackScores(board, scores);
    displayRoundResult(board, scores);
    currentPlayer = alternatePlayer(currentPlayer);
  }
  whoWon(scores);
}

function gameMainBody() { //This houses the series/scores.
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

function gameShellInitialize() { //game start and end is here.
  clearScreen();
  prompt('welcome');
  prompt('rules');
  prompt('rules2');
  printLines();
  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  prompt(`First to ${WIN_CONDITION} wins!\n`);

  gameMainBody();

  clearScreen();
  prompt("goodbye");
}

gameShellInitialize();
