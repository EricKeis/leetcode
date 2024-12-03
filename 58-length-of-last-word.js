/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let right = s.length;
  for (let left = s.length - 1; left >= 0; left--) {
    if (s[left] != ' ' && right == s.length) right = left;
    if (s[left] == ' ' && right != s.length) return s.slice(left + 1, right + 1).length;
  }
  return s.slice(0, right + 1).length;
};

s = "a"
console.log(lengthOfLastWord(s));
