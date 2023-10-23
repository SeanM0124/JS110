const readline = require('readline-sync');
const SUITS = ['♥︎', '♠︎', '♣︎', '♦︎'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const BEST_NUMBER = 21;
const FACE_CARD_VALUE = 10;
const HARD_STOP_NUMBER = 17;
const WIN_CONDITION = 3;

function clearScreen() {
  console.clear();
}

function printLines() {
  console.log('<-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~->');
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffleDeckOfCards(array) { //shuffles the card deck
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }
  return array;
}

function hit(deck) { //adds a card to a passed deck
  return [deck.pop()];
}

function hand(cards) { //gives easy printing of held cards
  return cards.map(card => `${card[1]} of ${card[0]}`).join(', ');
}

function playAgain() { //play again based on user input
  printLines();
  let answer = readline.question(prompt('Do you want to play again? (y/n)')).toLowerCase();

  while (!['y', 'n'].includes(answer)) {
    answer = readline.question(prompt('That is not a correct answer, please enter "y" or "n".'));
  }
  return answer.toLowerCase() === 'y';
}

function readyToContinue() { //helps with program control flow - preventing text tidal wave.
  let answer = readline.question(prompt('Please enter any key when you are ready to continue.'));
  answer = true;

  clearScreen();
  return answer;
}

function detectResult(dealerTotal, playerTotal, scores) { //decisive function - determines/returns winner
  if (playerTotal > BEST_NUMBER) {
    scores.dealer += 1;
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > BEST_NUMBER) {
    scores.player += 1;
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    scores.player += 1;
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    scores.dealer += 1;
    return 'DEALER';
  } else {
    scores.pushes += 1;
    return 'TIE';
  }
}

function displayResults(dealerTotal, playerTotal, scores) { //displays result of round based on housed decision functions returned value
  let result = detectResult(dealerTotal, playerTotal, scores);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted.. Dealer wins the hand!\n');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You won the hand!\n');
      break;
    case 'PLAYER':
      prompt('You won the hand!\n');
      break;
    case 'DEALER':
      prompt('Dealer wins this hand!\n');
      break;
    case 'TIE':
      prompt("It's a push!\n");
  }
}

function bestOfFiveCheckAndEnd(scores) { //Checks score after each round
  if (scores.player === WIN_CONDITION) {
    prompt(`You won the series ${scores.player} hands to ${scores.dealer}!`);
    return scores.player;
  } else if (scores.dealer === WIN_CONDITION) {
    prompt(`You lost the series ${scores.dealer} hands to ${scores.player} 😰`);
    return scores.dealer;
  }
  return true;
}

function displayScores(scores) {
  prompt(`You have won ${scores.player} hand(s), the dealer has won ${scores.dealer} hand(s).`);
  prompt(`(${scores.pushes} push(es))\n\n`);
}

function compareAndEnd(playerCards, dealerCards, //Flavor text function that houses the comparative function to determin winner
  dealerTotal, playerTotal, scores) {
  prompt('And the the results are.......\n');
  printLines();
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${playerTotal}`);
  printLines();
  displayResults(dealerTotal, playerTotal, scores);
}

function dealerHits (dealerTotal, deck, dealerCards) {
  while (dealerTotal < HARD_STOP_NUMBER) {
    prompt(`Dealer hits!\n`);
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`The dealers new card is: ${dealerCards[dealerCards.length - 1][1]} of ${dealerCards[dealerCards.length - 1][0]}\n`);
    prompt(`Dealer's cards are now: ${hand(dealerCards)}, Dealer total: ${dealerTotal}`);
    printLines();
    if (dealerTotal > BEST_NUMBER) break;
    readyToContinue();
  }
  return dealerTotal;
}

function dealersTurn(deck, dealerCards, dealerTotal,) { //dealers turn, hits, total etc
  prompt('Dealers turn...\n');
  prompt(`The Dealers 2nd card is ${dealerCards[1][1]} of ${dealerCards[1][0]}`);
  prompt(`The dealers total is now ${dealerTotal}\n`);
  printLines();
  dealerTotal = dealerHits(dealerTotal, deck, dealerCards);
  if (dealerTotal > HARD_STOP_NUMBER && (!(busted(dealerTotal)))) {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }
  return dealerTotal;
}

function busted(aTotal) { //tests a total value pased for bust
  return aTotal > BEST_NUMBER;
}

function playerChoseToHit(playerCards, playerTotal, dealerCards, deck) { //executes if player chooses to hit
  clearScreen();
  printLines();
  playerCards.push(...hit(deck));
  playerTotal = total(playerCards);
  prompt(`You chose to hit!\n=> Your cards are now: ${hand(playerCards)}, and your total is now ${playerTotal}`);
  prompt(`Reminder: The dealer has ${dealerCards[0][1]} of ${dealerCards[0][0]} and a face-down card.\n`);
  return playerTotal;
}

function doesPlayerWantToHit() { //decision function - checks user input for hit
  while (true) {
    printLines();
    let playerTurn = readline.question(prompt('Would you like to hit? (y/n)')).toLowerCase();
    while (!['y', 'n'].includes(playerTurn)) {
      prompt("Sorry, must enter 'y' or 'n'.");
      playerTurn = readline.question(prompt('Would you like to hit? (y/n)')).toLowerCase();
    }
    return playerTurn;
  }

}

function playersTurn(deck, playerCards, playerTotal, dealerCards) {
  while (true) {
    if (playerTotal === BEST_NUMBER || playerTotal > BEST_NUMBER) break;
    let playerTurn = doesPlayerWantToHit();

    if (playerTurn === 'y') {
      playerTotal = playerChoseToHit(
        playerCards, playerTotal, dealerCards, deck);
    }
    if (playerTurn === 'n' || busted(playerTotal)) break;
  }
  if (playerTotal === BEST_NUMBER) {
    prompt(`You have 21! Nice... As long as the dealer doesnt get 21 you win!`);
    readyToContinue();
  } else if (playerTotal > BEST_NUMBER) {
    prompt('Uh oh....');
  }
  return playerTotal;
}

function total(cards) { //takes total of cards passed to its invocation
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += FACE_CARD_VALUE;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > BEST_NUMBER) sum -= FACE_CARD_VALUE;
  });
  return sum;
}

function dealFirstTwoCards(deck) { //deals first twp cards
  return [deck.pop(), deck.pop()];
}

function gameStart(deck, playerCards, dealerCards) { //deals cards, gets starting total, flavor text etc
  printLines();
  prompt('Dealing the cards...\n');

  playerCards.push(...dealFirstTwoCards(deck));
  dealerCards.push(...dealFirstTwoCards(deck));
  let playerTotal = total(playerCards);

  prompt(`The dealer has: ${dealerCards[0][1]} of ${dealerCards[0][0]} and a face-down card.`);
  prompt(`You have: ${hand(playerCards)} - your current total is ${playerTotal}\n`);
}

function initializeDeck() { //creates deck of cards
  let deck = [];

  for (let index = 0; index < 4; index++) {
    for (let count = 0; count < 13; count++) {
      deck.push([SUITS[index], VALUES[count]]);
    }
  }
  return shuffleDeckOfCards(deck);
}

function asLongAsPlayerDoesntBust(playerTotal, deck,
  playerCards, dealerCards, dealerTotal) {
  while (true) {
    playerTotal = playersTurn(deck, playerCards, playerTotal, dealerCards);
    if (busted(playerTotal)) break;
    clearScreen();
    dealerTotal = dealersTurn(deck, dealerCards, dealerTotal);
    if (dealerTotal === BEST_NUMBER ||
    dealerTotal > BEST_NUMBER ||
    dealerTotal >= HARD_STOP_NUMBER) break;
  }
  return playerTotal;
}

function gameRound(scores) { //this is the actual meat of the program, where most of the decisions are kept
  while (scores.player < WIN_CONDITION && scores.dealer < WIN_CONDITION) {
    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];
    gameStart(deck, playerCards, dealerCards);
    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);
    playerTotal = asLongAsPlayerDoesntBust(playerTotal, deck,
      playerCards, dealerCards, dealerTotal);
    dealerTotal = total(dealerCards);
    compareAndEnd(playerCards, dealerCards, dealerTotal, playerTotal, scores);
    displayScores(scores);
    if (readyToContinue()) continue;
  }
}

function gameMainBody() { //Main body - houses the rounds, checks score, play again prompt etc
  while (true) {
    let scores = {
      player: 0,
      dealer: 0,
      pushes: 0
    };
    gameRound(scores);

    bestOfFiveCheckAndEnd(scores);
    if (!playAgain()) break;
    clearScreen();
  }
}

function displayTwentyOneRules() { //text blurb for rules etc
  clearScreen();
  prompt('Welcome to Twenty-One!\n');
  prompt('The Rules are as follows:\n    Both the player and dealer will receive two cards to start.');
  console.log('    The player will see both their cards, but only one of the dealers cards will be known.');
  console.log(`    The goal of the game is to have a total card value of ${BEST_NUMBER}, or be as close as possible without going over..`);
  console.log('    As long as your cards are of higher total value than the dealers, you win!');
  console.log(`    But, if you go over ${BEST_NUMBER}, you lose, same goes for the dealer.`);
  console.log(`    The dealer will stop hitting after reaching or exceeding ${HARD_STOP_NUMBER} - You can hit until ${BEST_NUMBER} or bust!`);
  console.log(`    The game will continue til best of ${WIN_CONDITION}!`);
  console.log('    Goodluck!');
  printLines();
  readyToContinue();
}

function twentyOneShell() { //houses the main body of the program, start and end of program is here.
  displayTwentyOneRules();
  gameMainBody();
  clearScreen();
  prompt("Thanks for playing, come back soon!");
}

twentyOneShell(); //Starts whole program

