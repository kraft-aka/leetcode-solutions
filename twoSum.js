// Two Sum
// Solved
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input:
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (diff in hashMap) {
        return [hashMap[diff], i];
      } else {
        hashMap[nums[i]] = i;
      }
    }
  }
}
