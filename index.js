let MagicWord = require('./word.js')

let testWord = new MagicWord('Donkey')

testWord.splitWord()
testWord.runTest('o')
testWord.runTest('k')
testWord.runTest('e')
testWord.showCurrent()