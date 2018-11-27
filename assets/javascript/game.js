 // Creates an array that lists out all possible letters
 var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h",
 "i", "j", "k", "l", "m", "n", "o", "p",
 "q", "r", "s", "t", "u", "v", "w",
 "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guesses left, and guesses so far
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessesSoFar = guessesSoFarText;

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guesses-remain-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

 var userGuess = event.key;

 var computerGuess = letterChoice[Math.floor(Math.random() * letterChoice.length)];

 if (userGuess === computerGuess) {
     wins++;
 } else {
     losses++;
     guessesRemaining -= 1;
     if (guessesRemaining == 0) {
         alert("You lose");
         wins = 0;
         losses = 0;
         guessesRemaining = 9;
     }

     winsText.innerHTML = "Wins: " + wins;
     lossesText.innerHTML = "Losses: " + losses;
     guessesRemainingText.innerHTML = "Guesses remaining: " + guessesRemaining;
     guessesSoFarText.innerHTML = "Guesses so far: " + userGuess;
 }

};