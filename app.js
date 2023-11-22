// Game presentation
alert("Welcome to the secret number game!");
alert("You are trapped in a room and need to discover a secret number between 1 and 20 to escape.");
alert("You have only 5 attempts to guess the secret number.");
alert("Good luck!");

// Secret number generator
var secretNumber = parseInt(Math.random() * 21);

// Attempt counter
var attempts = 0;

// Loop that terminates when the user guess the secret number or exceeds the number of attempts
while (attempts < 6 & guess != secretNumber) {

    // Increases the number of attempts by 1 at each loop
    attempts++;

    // Receives the value entered in the prompt and assigns it to the "guess" variable
    var guess = prompt("Choose a number from 1 to 20");

    // Error message if the user enters a number below 1 or above 30 in the prompt
    if (guess < 1 | guess > 20) {
        alert("The number must be between 1 and 20. Try again!");
        continue;
    }

    // Error message if the user enters something that is not a number in the prompt
    if (isNaN(guess)) {
        alert("The entered value is not a number. Try again!");
        continue;
    }

    // Hint if the secret number is smaller
    if (guess < secretNumber) {
        alert("The number " + guess + " is less than the secret number. Try a LARGER number!");

    // Hint if the secret number is bigger
    } else if (guess > secretNumber) {
        alert("The number " + guess + " is greater than the secret number. Try a SMALLER number!");
    }
}

// Victory message
if (attempts < 6) {
    alert("Congratulations! You discovered the secret number in just " + attempts + " attempts!");
    alert("You managed to escape from the room.");

// Defeat message
} else {
    alert("You lose! The secret number was " + secretNumber + ".");
    alert("The page will be refresh for you to try again.")
    location.reload();
} 