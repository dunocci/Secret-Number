// Game presentation
alert("Welcome to the secret number game!");
alert("You are trapped in a room and need to discover a secret number.");
alert("The difficulty levels are: easy, medium, and hard.");
alert("You have a limited number of attempts based on the chosen difficulty.");
alert("Good luck!");

// Difficulty level selection
var difficulty = prompt("Choose a difficulty level: easy, medium, or hard").toLowerCase();

// Self explanatory
var maxNumber, maxAttempts;

// Switchs beetween the difficulty levels based on what the user wrote on the prompt
switch (difficulty) {

    // Easy difficulty = Needs to discover a 1 to 10 number with a max of 8 attempts
    case "easy":
        maxNumber = 10;
        maxAttempts = 8;
        break;

    // Medium difficulty = Needs to discover a 1 to 20 number with a max of 6 attempts
    case "medium":
        maxNumber = 20;
        maxAttempts = 6;
        break;

    // Hard difficulty = Needs to discover a 1 to 30 number with a max of 4 attempts
    case "hard":
        maxNumber = 30;
        maxAttempts = 4;
        break;

    // If the user enters a invalid difficulty level, it will be set to the medium difficulty
    default:
        alert("Invalid difficulty level. Defaulting to medium.");
        maxNumber = 20;
        maxAttempts = 6;
}

// Secret number generator
var secretNumber = Math.floor(Math.random() * (maxNumber)) + 1;

// Attempt counter
var attempts = 0;

// Loop that terminates when the user guesses the secret number or exceeds the number of attempts
while (attempts < maxAttempts && guess != secretNumber) {
    
    // Increases the number of attempts by 1 at each loop
    attempts++;

    // Receives the value entered in the prompt and assigns it to the "guess" variable
    var guess = prompt("Choose a number from 1 to " + maxNumber);

    // Error message if the user enters a number below 1 or above maxNumber in the prompt
    if (guess < 1 || guess > maxNumber) {
        alert("The number must be between 1 and " + maxNumber + ". Try again!");
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
if (attempts < maxAttempts + 1) {
    alert("Congratulations! You discovered the secret number in just " + attempts + " attempts!");
    alert("You managed to escape from the room.");

// Defeat message
} else {
    alert("You lose! The secret number was " + secretNumber + ".");
    alert("The page will be refreshed for you to try again.");
    location.reload();
}