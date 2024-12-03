/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const movemap = {
    'U': [1, 0],
    'D': [-1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }

  let start = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    let move = movemap[moves[i]];

    start[0] += move[0];
    start[1] += move [1];
  }

  return start[0] == 0 && start[1] == 0;
};

moves = "UD";
console.log(judgeCircle(moves));
