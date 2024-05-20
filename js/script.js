//The unordered list where the player’s guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
//The button with the text “Guess!” in it
const guessLetterButton = document.querySelector(".guess");
//The text input where the player will guess a letter
const letterInput = document.querySelector(".letter");
// The empty paragraph where the word in progress will appear
const wordProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display
const remainingGuessesElement = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
// The hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again hide");
// Starter word
const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener('click', function (e) {
    e.preventDefault();
    message.innerText = "";

    const guess = letterInput.value;
    const goodGuess = playerInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    } 
    letterInput.value = "";
});

const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    if (input.length === 0) {
message.innerText = "Please enter a letter.";
    }
    else if (input.length >1) {
        message.innerText = "Please enter a single letter.";
    }
else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z."
} else { 
    return input;
}
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that one, try again!"
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};