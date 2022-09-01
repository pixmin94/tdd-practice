var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var cipher = 'bcdefghijklmnopqrstuvwxyza'

function cipherFunction(string) {
    var newString = ''
    for (var i = 0; i < string.length; i++) {
        newString += cipherLetter(string[i])
    }
    return newString
}

function cipherLetter(char) {
    var index = alphabet.indexOf(char)
    var cipherCharacter = cipher[index]
    return cipherCharacter
}

module.exports = cipherFunction;