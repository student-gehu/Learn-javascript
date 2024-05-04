// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Set up an array to store guessed numbers
let guessedNumbers = [];

// Function to prompt user for a guess
function guessNumber() {
    // Increment the attempt counter
    let attempts = 0;

    // Prompt the user for input until the correct number is guessed
    while (true) {
        // Prompt the user for input
        let guess = parseInt(prompt("Guess a number between 1 and 100:"));

        // Check if the guess is a valid number
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

        // Check if the number has already been guessed
        if (guessedNumbers.includes(guess)) {
            alert("You've already guessed that number. Please guess a different number.");
            continue;
        }

        // Add the guess to the array of guessed numbers
        guessedNumbers.push(guess);

        // Increment the attempts counter
        attempts++;

        // Check if the guess is correct
        if (guess === targetNumber) {
            alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
            break;
        }

        // Provide feedback if the guess is greater or less than the target number
        if (guess < targetNumber) {
            alert("The number is greater.");
        } else {
            alert("The number is less.");
        }
    }

    // Log all guesses in the console
    console.log("All guesses:", guessedNumbers);
}

// Call the guessNumber function
guessNumber();
