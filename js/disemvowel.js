// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let alphabet = ['a', 'e', 'i', 'o', 'u', 'A', "E", "I", "O", "U"]
    for(let i = 0; i < alphabet.length; i++) {
        str = str.replaceAll(alphabet[i], '')
    }
    return str;
}

console.log(disemvowel("What are you, a communist?"))