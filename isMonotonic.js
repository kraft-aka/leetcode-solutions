// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
// An array nums
// is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false
// otherwise.

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  return (
    nums.every((v, i) => i === 0 || v <= nums[i - 1]) ||
    nums.every((v, i) => i === 0 || v >= nums[i - 1])
  );
};
