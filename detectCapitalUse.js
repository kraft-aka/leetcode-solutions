// 520. Detect Capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    word.toUpperCase() === word ||
    (word[0].toUpperCase() === word[0] &&
      word.slice(1).toLowerCase() === word.slice(1)) ||
    word.toLowerCase() === word
  );
};
