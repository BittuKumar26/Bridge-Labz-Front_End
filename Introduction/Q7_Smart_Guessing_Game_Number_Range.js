// Q7: Smart Guessing Game (Number Range)
// Secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;
// For testing, set a userGuess value:
const userGuess = secretNumber + 2; // adjust to test different branches

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
  console.log("Very close!");
  if (userGuess > secretNumber) {
    console.log("But a bit too high.");
  } else {
    console.log("But a bit too low.");
  }
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}

console.log(`Secret: ${secretNumber}, Your guess: ${userGuess}`);
