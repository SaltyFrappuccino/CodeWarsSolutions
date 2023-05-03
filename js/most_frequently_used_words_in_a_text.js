// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
    if(!text) {
        return []
    }
    
    const words = text.toLowerCase().match(/[a-z']*[a-z][a-z']*/g);
    const wordCounts = {};
    
    if (!words) {
        return []
    }

    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    return sortedWords.slice(0, 3);
}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
