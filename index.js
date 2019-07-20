let MagicWord = require('./word.js')

///////////////////////////////////////////////////////

let listOfWords = ['apple', 'orange', 'taco']
let randomIndex = Math.floor(Math.random() * listOfWords.length);
let winningWord = new MagicWord(listOfWords[randomIndex])

//Prepare the word
winningWord.splitWord()

//Run program
winningWord.runTest('o')
winningWord.runTest('k')
winningWord.runTest('e')
winningWord.runTest('b')

