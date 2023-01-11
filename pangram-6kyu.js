// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


const isPangram = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    string = string.toLowerCase()
    return alphabet.every(element => string.includes(element))
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("Not a pangram."))