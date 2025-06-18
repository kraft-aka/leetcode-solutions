// 1207. Unique Number of Occurences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.values(obj).length === new Set(Object.values(obj)).size;
};
