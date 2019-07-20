function Letter(letter) {

    //The correct letter for the winning word
    this.letter = letter;

    //Whether or not the letter has been correctly guessed
    this.guessedCorrectly = false;

    //Check if the provided letter matches the correct letter
    this.testItem = function(input) {
        if (input === this.letter) {
            this.guessedCorrectly = true
            return 1
        }
    }

    //Determine what to reveal to the user in the console
    this.reveal = function() {
        if (this.guessedCorrectly) {
            return letter
        } else {
            return '_'
        }
    }
}

///////////////////////////////////////////////////////

module.exports = Letter