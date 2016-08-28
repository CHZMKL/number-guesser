//variables

var min = 1;
var max = 100;
var guess = document.querySelector('#userGuess');
var guessButton = document.querySelector('.guessButton');
var userMessage = document.querySelector('.userMessage');
var clearButton = document.querySelector('.clearButton');
var randomNumber = getRandomNumber();
var newGameButton = document.querySelector('.newGame');
var feedback = document.querySelector('.feedback');
var minField = document.querySelector('.userMin');
var maxField = document.querySelector('.userMax');
var rangeButton = document.querySelector('.rangeButton');
var winText = document.querySelector('.winText');

//functions

//change range - DOESN'T HAVE ALL VARIABLES LIVE
function changeRange() {
  min = min - 10;
  max = max + 10;
  minField.value = (realNumber(minField) - 10);
  maxField.value = realNumber(maxField) + 10;
  getRandomNumber(max, min);
}

//converts any string into number
function realNumber(a) {
  return parseInt(a.value);
}

//disabled button on/off
function disabled(a, b) {
  a.disabled = b;
}

//clear placeholder DOESN'T WORK WITH FUNCTION (A,B)
function clearPlace(){
  guess.placeholder = '';
}

//enable placeholder DOESN'T WORK WITH INNERTEXT FUNCTION
function enablePlace(){
  guess.placeholder = 'Enter guess here!';
}

//function to change any text with actual text
function innerText(value, text) {
  value.innerText = text;
}


//clears feedback to null DOESN'T WORK WITH INNERTEXT FUNCTION
function clearFeedback() {
  feedback.innerText = '';
}

//empty user guess DOESN'T WORK WITH FUNCTDION (A,B)
function emptyGuess() {
  guess.value = '';
}

//generates random number
function getRandomNumber() {
  return Math.floor(Math.random() * (max - min)) + min;
}

//function to excecture when guesButton is pressed
function submitGuess() {
  var realPlayerGuess = realNumber(guess);
  console.log(realPlayerGuess);
  console.log(randomNumber);
  if (realPlayerGuess === randomNumber) {
    innerText(feedback, 'You have guessed wisely!');
    disabled(newGameButton, false);
    disabled(guess, true);
    disabled(winText, false);
    disabled(rangeButton, false);
    clearPlace();
    changeRange();
  }
  else if (realPlayerGuess < randomNumber) {
    innerText(feedback, 'Sorry, that guess is too low. Try a higher number.');
  }
  else {
    innerText(feedback, 'Sorry, that guess is too high. Try a lower number.');
  }
}

//resets game and generates new random number
function resetComputerGuess(){
  randomNumber = getRandomNumber();
  return randomNumber;
}

// informs player that their guess is outside the range.
function compareGuess(){
  var currentGuess = realNumber(guess);
  if (currentGuess < min || currentGuess > max) {
    feedback.innerText = "Your guess is outside the range. Guess again between " + min + " and " + max +".";
  } else if (isNaN(currentGuess)) {
    userMessage.innerText = "Please submit an actual number.";
    feedback.innerText = '';
  }
}

//button functionality

rangeButton.addEventListener('click', function() {
  minRange = realNumber(minField);
  maxRange = realNumber(maxField);
  randomNumber = Math.floor(Math.random() * (maxRange-minRange)  + minRange);
  disabled(newGameButton, true);
  disabled(rangeButton, true);
  emptyGuess();
  clearFeedback();
  innerText(userMessage, 'Let\'s play again. Guess a number!');
  disabled(guess, false);
  enablePlace();
  disabled(winText, true);
});

//clearButton clears input field, resets clear button to disabled
clearButton.addEventListener('click', function() {
  emptyGuess();
  disabled(clearButton, true);
  disabled(guessButton, true);
});

//guessButton pushes player guess back into browser for player to see and resets field back
guessButton.addEventListener('click', function () {
 userMessage.innerText = "You guessed " + realNumber(guess) + ".";
 submitGuess();
 compareGuess();
 disabled(guessButton, true);
 disabled(clearButton, true);
 emptyGuess();
});

//press enter to submit guess
guess.onkeydown = function(e){
 if(e.keyCode == 13){
 userMessage.innerText = "You guessed " + realNumber(guess) + ".";
 submitGuess();
 compareGuess();
 disabled(guessButton, true);
 disabled(clearButton, true);
 emptyGuess();}
};

//newGameButton to reset random number, set newGameButton to disabled during game, and resets text field
newGameButton.addEventListener('click', function() {
  minRange = 1;
  maxRange = 100;
  randomNumber = Math.floor(Math.random() * (maxRange-minRange)  + minRange);
  minField.value = 1;
  maxField.value = 100;
  disabled(newGameButton, true);
  disabled(rangeButton, true);
  emptyGuess();
  clearFeedback();
  innerText(userMessage, 'New game. Guess a number!');
  disabled(guess, false);
  enablePlace();
  disabled(winText, true);
});




//text field functionality

// clearButton disabled/enabled functionality
guess.addEventListener('input', function() {
  if (guess.value === '') {
    disabled(clearButton, true);
    disabled(guessButton, true);
  }
  else {
    disabled(clearButton, false);
    disabled(guessButton, false);
  }
});
