// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function count(array, char) {
    counter = 0
    array.forEach(e => {
        if (e.toLowerCase() == char.toLowerCase()) {
            counter += 1
        }
    });

    return counter
}

function duplicateCount(text) {
    text = text.toLowerCase()

    let counter = 0

    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.split("")
    text = text.split("")

    for(let i = 0; i < alphabet.length; i++) {
        if (count(text, alphabet[i]) >= 2) {
            counter += 1
        }
    }
    return counter
}

console.log(duplicatesCount("aAbBcde")) 
