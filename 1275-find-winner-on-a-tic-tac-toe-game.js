/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const n = 3;

  let rows = new Array(n).fill(0);
  let cols = new Array(n).fill(0);
  let diag1 = 0, diag2 = 0;

  for (let i = 0; i < moves.length; i++) {
    let player =  i % 2 == 0 ? 1 : -1;

    [r, c] = moves[i];
    rows[r] += player;
    cols[c] += player;
    if (r == c) diag1 += player;
    if (r + c == n - 1) diag2 += player;

    console.log(rows, cols, diag1, diag2);

    if (rows[r] == 3 || cols[c] == 3 || diag1 == 3 || diag2 == 3) return 'A';
    if (rows[r] == -3 || cols[c] == -3 || diag1 == -3 || diag2 == -3) return 'B';
  }
  return moves.length >= n * n ? "Draw" : "Pending";
};


moves = [[2,2],[1,2],[2,1],[1,1],[2,0]]
console.log(tictactoe(moves));
