function findLongestWordLength(str) {
    let words = str.split(' ');
    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return [longestWord, longestWord.length];
}
let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result);  
