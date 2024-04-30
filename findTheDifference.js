var findTheDifference = function (s, t) {
  let char = 0;
  for (const item of s) {
    char ^= item.charCodeAt(0);
  }
  for (const item of t) {
    char ^= item.charCodeAt(0);
  }
  return String.fromCharCode(char);
};

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
