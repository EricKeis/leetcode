/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false;
  for (let i = 0; i < s.length / 2; i++) {
    let isValid = true;
    let substr = s.slice(0, i + 1);

    for (let j = 0; j < s.length; j += substr.length) {
      let curr = s.slice(j, j + substr.length);
      if (substr != curr) {
        isValid = false;
        break;
      }
    }
    if (isValid) return true;
  }
  return false;
};

console.log(repeatedSubstringPattern("abab"));
