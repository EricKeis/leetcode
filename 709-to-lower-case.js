/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
      result += String.fromCharCode(s.charCodeAt(i) + 32);
    }
    else result += s[i];
  }
  return result;
};


s = "Hello"
console.log(toLowerCase(s));