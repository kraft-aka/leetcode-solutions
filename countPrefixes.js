// 2255. Count Prefixes of a Given String

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let output = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.indexOf(words[i]) === 0) {
      output++;
    }
  }
  return output;
};
