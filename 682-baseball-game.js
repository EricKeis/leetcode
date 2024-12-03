/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let scores = [];
  
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case 'C':
        scores.pop();
        break;
      case 'D':
        scores.push(scores[scores.length - 1] * 2);
        break;
      case '+':
        scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        break;
      default:
        scores.push(parseInt(operations[i]));
    }
  }
  return scores.reduce((sum, x) => sum + x, 0);
};


ops = ["5","2","C","D","+"]
console.log(calPoints(ops));
