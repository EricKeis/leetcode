/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sum = {};

  for (let i = 0; i < s.length; i++) {
    sum[s[i]] ? sum[s[i]]++ : sum[s[i]] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    if(!sum[t[i]]) return false;
    if(sum[t[i]]) sum[t[i]]--;
  }

  for (const key in sum) {
    if (sum[key] != 0) return false;
  }
  return true;
};

console.log(isAnagram("a", "bb"));
