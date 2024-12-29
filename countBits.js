// 338. Counting Bits

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  let res = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  for (let num of arr) {
    let bin = [...num.toString(2)].reduce((a, b) => a + +b, 0);
    res.push(bin);
  }
  return res;
};
