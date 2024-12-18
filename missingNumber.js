// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length + 1;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let allNums = [];
  for (let i = min; i < n; i++) {
    allNums.push(i);
  }
  return allNums.filter((num) => !nums.includes(num))[0] || 0;
};
