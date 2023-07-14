// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(string) {
    let letters = string.split('');
    let ans = [];

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                for (let l = 0; l < letters.length; l++) {
                    word = letters[i] + letters[j] + letters[k] + letters[l];
                    if((ans.find((s) => s === word) == undefined) && (word.length == letters.length)) ans.push(word);
                }
            }
        }
    }

	return ans;
}

// Example usage:
let words = ['a', 'a', 'b', 'b'];
const perm = permutation(words);
console.log(perm);
