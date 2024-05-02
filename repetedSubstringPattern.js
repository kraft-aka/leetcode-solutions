// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies
// of the substring together.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const double = s + s;
  const trimmed = double.slice(1, -1);
  return trimmed.includes(s);
};
