/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            let valid = true
            for (let j = 1; j < needle.length; j++) {
                if (haystack[j + i] != needle[j]) {
                    valid = false
                    break
                }
            }
            if (valid) return i
        }
    }
    return -1
};

console.log(strStr("abcdefghijk", "bcd"))
