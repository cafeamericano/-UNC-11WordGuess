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
let randomIndex = Math.floor(Math.random() * listOfWords.length);
let randomizedWord = listOfWords[randomIndex]
let winningWord = new MagicWord(randomizedWord)

//Functions/////////////////////////////////////////////////////

function testAndReward(input) {

    //Notify if turn count decreased
    if (winningWord.runTest(input) === 0) {
        remainingTurns -= 1;
        console.log('Remaining guesses: ' + remainingTurns + '\n')
    } else {
        console.log('\n')
    }

    //Check if game is over
    if (remainingTurns <= 0) {
        game.isOver = true;
        console.log(chalk.red.bold.underline('You have ran out of guesses! Game over.\n'))
        process.exit()
    }

    //Check if game has been won
    let guessedCount = winningWord.checkGuessedCount()
    if (guessedCount === randomizedWord.length) {
        game.isOver = true;
        console.log(chalk.green.bold.underline('You have won the game!\n'))
        process.exit()
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
    }
}

//Prepare the word///////////////////////////////////////////////////////

winningWord.splitWord()

//Run program///////////////////////////////////////////////////////

console.log(chalk.cyan.bold(`\n *** WELCOME TO THE WORD GUESS GAME!!! *** \n`))
console.log(chalk.cyan(`You have been tasked with guessing a random word. Enter letters to see if you have a match. Up to ${remainingTurns} incorrect guesses may be made before the game is lost. \n`))
play()




