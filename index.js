//Requirements/////////////////////////////////////////////////////

var inquirer = require("inquirer");
const chalk = require('chalk');
let MagicWord = require('./word.js')

//Game Object/////////////////////////////////////////////////////

let game = {
    isOver: false
}

//Global Variables/////////////////////////////////////////////////////

let remainingTurns = 5;
let listOfWords = ['apple', 'orange', 'taco', 'candy', 'banana', 'pineapple', 'kiwi', 'blueberry', 'raspberry', 'blackberry', 'mango']
let randomIndex = 0
let randomizedWord = ''
let winningWord = ''

//Functions/////////////////////////////////////////////////////

function prepareGame() {
    game.isOver = false;
    remainingTurns = 5;
    randomIndex = Math.floor(Math.random() * listOfWords.length);
    randomizedWord = listOfWords[randomIndex]
    winningWord = new MagicWord(randomizedWord)
    //Split up the winning word into letter objects
    winningWord.splitWord()
    //Show the user the blank spaces
    winningWord.showCurrent()
}

function testAndReward(input) {

    //Notify if turn count decreased
    if (winningWord.runTest(input) === 0) {
        remainingTurns -= 1;
        console.log('Remaining incorrect guesses: ' + remainingTurns + '\n')
    } else {
        console.log('\n')
    }

    //Check if game is over
    if (remainingTurns <= 0) {
        game.isOver = true;
        console.log(chalk.red.bold.underline('You have ran out of guesses! Game over.\n'))
    }

    //Check if game has been won
    let guessedCount = winningWord.checkGuessedCount()
    if (guessedCount === randomizedWord.length) {
        game.isOver = true;
        console.log(chalk.green.bold.underline('You have won the game!\n'))
    }

}

function play() {
    if (game.isOver === false) {
        inquirer.prompt([
            {
                name: "askForCharacter",
                message: "Guess a letter."
            }
        ]).then(function (answers) {
            console.log('\n')
            testAndReward(answers.askForCharacter)
            play()
        });
    } else if (game.isOver === true) {
        inquirer.prompt([
            {
                type: "confirm",
                name: "playAgain",
                message: "Would you like to play again?"
            }
        ]).then(function (response) {
            if (response.playAgain === true) {
                console.log('\n')
                prepareGame()
                play()
            } else {
                console.log('\nGoodbye.\n')
                process.exit()
            }
        });
    }
}

//Run program///////////////////////////////////////////////////////

console.log(chalk.cyan.bold(`\n *** WELCOME TO THE WORD GUESS GAME!!! *** \n`))
console.log(chalk.cyan(`You have been tasked with guessing a random word.\nEnter letters to see if you have a match.\nUp to ${remainingTurns} incorrect guesses may be made before the game is lost.\n`))
prepareGame()
console.log('\n')
play()




