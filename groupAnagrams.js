// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};

    for (let str of strs) {
      const count = new Array(26).fill(0);
      for (let char of str) {
        count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }
      const k = count.join(",");
      if (!res[k]) {
        res[k] = [];
      }
      res[k].push(str);
    }
    return Object.values(res);
  }
}
