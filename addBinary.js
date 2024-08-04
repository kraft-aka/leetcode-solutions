// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = "",
    carry = 0,
    i = a.length - 1,
    j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    carry += i >= 0 ? parseInt(a[i--]) : 0;
    carry += j >= 0 ? parseInt(b[j--]) : 0;
    res = (carry % 2) + res;
    carry = Math.floor(carry / 2);
  }
  return res;
};
