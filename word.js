var MagicLetter = require('./letter.js')
const chalk = require('chalk');

///////////////////////////////////////////////////////

function Word(secretWord) {

    //The array holding each secret letter, its properties, and its methods
    this.allLetters = [];

    //Function to take in the secret word and split it into letters
    this.splitWord = function () {
        for (var i = 0; i < secretWord.length; i++) {
            this.allLetters.push(new MagicLetter(secretWord[i]))
        }
    }

    //Function to show the word including revealed and hidden characters
    this.showCurrent = function () {
        let presentation = '';
        for (var i = 0; i < secretWord.length; i++) {
            if (this.allLetters[i].guessedCorrectly) {
                presentation += (this.allLetters[i].letter + ' ')
            } else {
                presentation += ('_ ')
            }
        }
        console.log(chalk.cyan.bold(presentation))
    }

    //Function to see if a guessed letter is correct
    this.runTest = function (input) {

        //Establish a way to keep track of whether the user guessed one correctly
        let accuracyCount = 0;

        //Check each letter in the winning word for the supplied letter
        for (var i = 0; i < secretWord.length; i++) {
            let individualLetter = this.allLetters[i].testItem(input)
            if (individualLetter === 1) {
                accuracyCount += 1
            }
        }

        //Show current status every time a submission is given
        this.showCurrent()

        //If the tested letter wasn't there, take away a turn
        if (accuracyCount === 0) {
            console.log(chalk.red(`The provided letter (${input}) was not a match.`))
            return 0
        } else {
            console.log(chalk.green(`The provided letter (${input}) was a match!`))
            return 1
        }
    }

    this.checkGuessedCount = function () {
        let guessedCount = 0;
        for (var i = 0; i < secretWord.length; i++) {
            let guessed = this.allLetters[i].guessedCorrectly
            if (guessed === true) {
                guessedCount += 1
            }
        }
        return guessedCount
    };

}

///////////////////////////////////////////////////////

module.exports = Word