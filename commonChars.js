// 1002. Find Common Characters

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const common = words.sort((a, b) => a.length - b.length)[0].split("");

  let arr = [];

  for (let char of common) {
    let isCommon = true;

    for (let i = 1; i < words.length; i++) {
      if (words[i].includes(char)) {
        words[i] = words[i].replace(char, "");
      } else {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      arr.push(char);
    }
  }
  return arr;
};
