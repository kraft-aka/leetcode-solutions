// 1051. Height Checker

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let check = 0;

  let sorted = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] != heights[i]) {
      check++;
    }
  }
  return check;
};
