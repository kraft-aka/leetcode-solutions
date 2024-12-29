// 1431. Kids with the Greatest Number of Candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let res = [];
  let max = Math.max(...candies);
  for (let candy of candies) {
    if (candy + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
