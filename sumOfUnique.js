// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  return nums
    .filter((num, i, arr) => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((a, b) => a + b, 0);
};
