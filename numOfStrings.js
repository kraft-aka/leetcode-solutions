// 1967. Number of Strings That Appear as Substrings in Word

// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.
// Example 1:

// Input: patterns = ["a","abc","bc","d"], word = "abc"
// Output: 3

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  return patterns.filter((i) => word.includes(i)).length;
};
