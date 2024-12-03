/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charMap = {}

    for (char in t) {
        charMap[t[char]] ? charMap[t[char]] += 1 : charMap[t[char]] = 1
    }

    for (char in s) {
        charMap[s[char]] == 1 ? delete charMap[s[char]] : charMap[s[char]] -= 1 
    }

    return Object.keys(charMap)[0]
};


findTheDifference("abc", "abca")