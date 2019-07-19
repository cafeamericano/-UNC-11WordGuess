var MagicLetter = require('./letter.js')

function Word(secretWord) {
    this.allLetters = [];
    this.splitWord = function () {
        for (var i = 0; i < secretWord.length; i++) {
            this.allLetters.push(new MagicLetter(secretWord[i]))
            //console.log(this.allLetters)
        }
    }
    this.showCurrent = function() {
        let presentation = '';
        for (var i = 0; i < secretWord.length; i++) {
            if (this.allLetters[i].guessedCorrectly) {
                presentation += (this.allLetters[i].letter)
            } else {
                presentation += ('_')
            }
        }
        console.log(presentation)
    }
    this.runTest = function(input) {
        for (var i = 0; i < secretWord.length; i++) {
            //console.log(this.allLetters[i])
            this.allLetters[i].testItem(input)
        }
    }
}

module.exports = Word