/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  const dirs = {
    0: [0, 1],
    1: [1, 0],
    2: [0, -1],
    3: [-1, 0]
  }

  for (i of instructions) {
    console.log(i);
  }
};
