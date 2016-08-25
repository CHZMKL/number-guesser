//variables

var min = 1;
var max = 100;
var guess = document.querySelector('#userGuess');
var guessButton = document.querySelector('.guessButton');
var userMessage = document.querySelector('.userMessage');
var clearButton = document.querySelector('.clearButton');
var randomNumber = getRandomNumber();
var currentGuess = parseInt(guess.value);
var newGameButton = document.querySelector('.newGame');
var feedback = document.querySelector('.feedback');




//functions

//disable text box after player wins
function disableText() {
  guess.disabled = true;
}

//enable text field
function enableText() {
  guess.disabled = false;
}

//clear placeholder
function clearPlace(){
  guess.placeholder = '';
}

//enable placeholder
function enablePlace(){
  guess.placeholder = 'Enter guess here!';
}

//enable new game button
function enableNewGame() {
  newGameButton.disabled = false;
}

//disable new game button
function disableNewGame(){
  newGameButton.disabled = true;
}

//enable guess button
function enableGuess() {
  guessButton.disabled = false;
}

//disable guess button
function disableGuess(){
  guessButton.disabled = true;
}

//enable clear
function enableClear() {
  clearButton.disabled = false;
}

//disable clear button
function disableClear() {
  clearButton.disabled = true;
}

//clears feedback to null
function clearFeedback() {
  feedback.innerText = '';
}

//empty user guess
function emptyGuess() {
  guess.value = '';
}

//resets user message when a new game starts
function resetUserMessage() {
  userMessage.innerText = 'Let\'s play again. Guess a number!';
}

//turns player string into number
function realPlayerNumber() {
  return parseInt(guess.value);
};

//generates random number
function getRandomNumber() {
  return Math.floor(Math.random() * (max - min)) + min;
};

//function to excecture when guesButton is pressed
function submitGuess() {
  var realPlayerGuess = realPlayerNumber();
  console.log(realPlayerGuess);
  console.log(randomNumber);
  if (realPlayerGuess === randomNumber) {
    feedback.innerText = "You have guessed wisely!";
    enableNewGame();
    disableText();
    clearPlace();
  }
  else if (realPlayerGuess < randomNumber) {
    feedback.innerText = "Sorry, that guess is too low. Try a higher number.";
  }
  else {
    feedback.innerText = "Sorry, that guess is too high. Try a lower number.";
  }
}

//resets game and generates new random number
function resetComputerGuess(){
  randomNumber = getRandomNumber();
  return randomNumber;
}

// informs player that their guess is outside the range.
function compareGuess(){
  var currentGuess = parseInt(guess.value);
  if (currentGuess < min || currentGuess > max) {
    feedback.innerText = "Your guess is outside the range. Guess again between " + min + " and " + max +"."
  }
}




//button functionality

//clearButton clears input field, resets clear button to disabled
clearButton.addEventListener('click', function() {
  emptyGuess();
  disableClear();
  disableGuess();
})

//guessButton pushes player guess back into browser for player to see and resets field back
guessButton.addEventListener('click', function () {
 userMessage.innerText = "You guessed " + realPlayerNumber(guess) + ".";
 submitGuess();
 compareGuess();
 disableGuess();
 disableClear();
 emptyGuess();
});

//press enter to submit guess
guess.onkeydown = function(e){
  if(e.keyCode == 13){
 userMessage.innerText = "You guessed " + realPlayerNumber(guess) + ".";
 submitGuess();
 compareGuess();
 disableGuess();
 disableClear();
 emptyGuess();}
};

//newGameButton to reset random number, set newGameButton to disabled during game, and resets text field
newGameButton.addEventListener('click', function() {
  resetComputerGuess();
  disableNewGame();
  emptyGuess();
  clearFeedback();
  resetUserMessage();
  enableText();
  enablePlace();
})




//text field functionality

// clearButton disabled/enabled functionality
guess.addEventListener('input', function() {
  if (guess.value === '') {
    disableClear();
  }
  else {
    enableClear();
  }
  if (guess.value === '') {
    disableGuess();
  }
  else {
    enableGuess();
  }
})
