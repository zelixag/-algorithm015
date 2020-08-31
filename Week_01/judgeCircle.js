/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let source = 0;
  let move = {
    R: 1,
    L: -1,
    U: 2,
    D: -2,
  };
  for (let i = 0; i < moves.length; i++) {
    source += move[moves[i]];
  }
  return !source;
};
