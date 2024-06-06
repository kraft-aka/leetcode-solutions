// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let res = nums.reduce((a, b) => a * b);
  if (res > 0) {
    return 1;
  } else if (res < 0) {
    return -1;
  } else {
    return 0;
  }
};
