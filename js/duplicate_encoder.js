// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function countAppearance(word, char) {
    let counter = 0
    for(let i = 0; i < word.length; i++) {
        if(word[i] === char) {
            counter += 1
        }
    }
    return counter;
}

function duplicateEncode(word){
    let str = ""
    for(let i = 0; i < word.length; i++) {
        if(countAppearance(word.toLowerCase(), word.toLowerCase()[i]) > 1) {
            str += ")"
        }
        else {
            str += "("
        }
    }
    return str
}

console.log(duplicateEncode("Success"))