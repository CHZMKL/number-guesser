// start with grabbing the value of the inputfield
  // This is probably a variable
// generate a hardcoded random number
  // this is probably a function that you create to make the random number (you're going to call this a lot)
// see if you can compare the guess and get the correct response
  //
// put that response in the dom

// stick to the smallest thing. <-- major key

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

function realPlayerNumber() {
  return parseInt(guess.value);
};


function getRandomNumber() {
  return Math.floor(Math.random() * (max - min)) + min;
};



//clearButton clears input button

clearButton.addEventListener('click', function() {
  guess.value = '';
  clearButton.disabled = true;
})

//guessButton pushes player guess back into browser for player to see and sets input field back to ''

guessButton.addEventListener('click', function () {
 userMessage.innerText = realPlayerNumber(guess);
 submitGuess();

 compareGuess();

 guessButton.disabled = true;
 clearButton.disabled = true;
});

//function to excecture when guesButton is pressed
function submitGuess() {

  var realPlayerGuess = realPlayerNumber();
  console.log(realPlayerGuess);
  console.log(randomNumber);
  if (realPlayerGuess === randomNumber) {
    console.log('yay')
  }
  else if (realPlayerGuess < randomNumber) {
    console.log('low, guess higher')
  }
  else {
    console.log('high, guess lower')
  }
}

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


newGameButton.addEventListener('click', function() {
  resetComputerGuess();
  guess.value = '';
})
//function to turn text from guess into true number


function resetComputerGuess(){
  randomNumber = getRandomNumber();
  return randomNumber;
}

function compareGuess(){
  var currentGuess = parseInt(guess.value);
  if (currentGuess < min || currentGuess > max) {
    feedback.innerText = "Your guess is outside the range."
  }

}
// function to return random number


// realPlayerNumber(guess)

// guessButton disabled/enabled functionality
// guess.addEventListener('input', function() {
//   if (guess.value === '') {
//     clearButton.disabled = true;
//   }
//   else {
//     clearButton.disabled = false;
//   }
// })





// The below randomNumber variable prohibits my guessButton from working. Why?





// if (guess < randoNumber) {
//   userMessage.innerText = "What";
// }

// var randomNumber = math.floor(math.randomNumber() * (max - min) +  min);
// var playerGuess = document.getElementById('userGuess').value
// ;
// var realPlayerNumber = parseInt(playerGuess);
// var clearUserGuessButton = document.getElementById('userGuess');
// var playerSubmit = getElementById('submitNumber');
// var userMessage = querySelector('.userMessage');
// var clearGuessButton = querySelector('clearNumberButton');
//
// changeColorButton.addEventListener('click', function () {  var color = colorInput.value;
//   box.style.backgroundColor = color;
// });
//
// function compareResults(){
//   if (realPlayerNumber < randomNumber)
//   {userMessage.innerText = "You guessed too low. Guess a higher number."}
// }
//
// // need to work on this
//
// clearGuessButton.addEventListener('click', function() {
//   var reset =
// }
// })
