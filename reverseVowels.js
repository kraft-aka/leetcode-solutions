// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelIndex = 0;
  let reversedStr = [];
  let vowels = [...s.replace(/[^aeiou]/gi, "")].reverse();

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      reversedStr.push(vowels[vowelIndex]);
      vowelIndex++;
    } else {
      reversedStr.push(s[i]);
    }
  }
  return reversedStr.join("");
};
