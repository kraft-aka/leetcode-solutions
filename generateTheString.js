// 1374. Generate a String With Characters That Have Odd Counts

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let str = "";
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";
  const getLetter = () => LETTERS[Math.floor(Math.random() * LETTERS.length)];

  const curr = getLetter();
  if (n % 2 !== 0) {
    str += curr.repeat(n);
  } else {
    let another = getLetter();
    if (curr === another) {
      another = getLetter();
    }
    str += curr.repeat(n - 1);
    str += another.repeat(1);
  }
  return str;
};
