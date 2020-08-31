/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  for (let i = 0; i < astr.length; i++) {
    let count = 0;
    for (let j = 0; j < astr.length; j++) {
      if (astr[i] === astr[j]) count++;
    }
    if (count >= 2) {
      return !count;
    }
  }
  return true;
};
