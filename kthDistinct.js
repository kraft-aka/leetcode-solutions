// 2053. Kth Distinct String in an Array

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  return arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i))[k - 1] || "";
};
