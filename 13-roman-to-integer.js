/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    switch(s[i]) {
      case 'M':
        num += 1000;
        break;
      case 'D':
        num += 500;
        break;
      case 'C':
        s[i + 1] == 'D' || s[i + 1] == 'M' ? num -= 100 : num += 100;
        break;
      case 'L':
        num += 50;
        break;
      case 'X':
        s[i + 1] == 'L' || s[i + 1] == 'C' ? num -= 10 : num += 10;
        break;
      case 'V':
        num += 5;
        break;
      case 'I':
        s[i + 1] == 'V' || s[i + 1] == 'X' ? num -= 1 : num += 1;
        break;
      default:
        break;
    };
  }
  return num;
};

s = "LVIII"
console.log(romanToInt(s));
