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
    newGameButton.disabled = false;
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
    feedback.innerText = "Your guess is outside the range."
  }
}



//button functionality

//clearButton clears input field, resets clear button to disabled
clearButton.addEventListener('click', function() {
  guess.value = '';
  clearButton.disabled = true;
})

//guessButton pushes player guess back into browser for player to see and resets field back
guessButton.addEventListener('click', function () {
 userMessage.innerText = realPlayerNumber(guess);
 submitGuess();
 compareGuess();
 guessButton.disabled = true;
 clearButton.disabled = true;
 guess.value = '';
});

//newGameButton to reset random number, set newGameButton to disabled during game, and resets text field
newGameButton.addEventListener('click', function() {
  resetComputerGuess();
  newGameButton.disabled = true;
  guess.value = '';
})



//text field functionality

// clearButton disabled/enabled functionality
guess.addEventListener('input', function() {
  if (guess.value === '') {
    clearButton.disabled = true;
  }
  else {
    clearButton.disabled = false;
  }
  if (guess.value === '') {
    guessButton.disabled = true;
  }
  else {
    guessButton.disabled = false;
  }
})
