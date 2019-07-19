function Letter(letter) {
    this.letter = letter;
    this.guessedCorrectly = false;
    this.testItem = function(input) {
        //console.log('***' + input)
        //console.log('***' + this.letter)
        if (input === this.letter) {
            this.guessedCorrectly = true
        }
    }
    this.reveal = function() {
        if (this.guessedCorrectly) {
            return letter
        } else {
            return '_'
        }
    }
}

module.exports = Letter