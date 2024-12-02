// 3280. Convert Date to Binary

// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

// date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

// Return the binary representation of date.

// Example 1:

// Input: date = "2080-02-29"

// Output: "100000100000-10-11101"

// Explanation:

// 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  const [year, month, day] = date.split("-");
  let binaryYear = Number(year).toString(2);
  let binaryMonth = Number(month).toString(2);
  let binaryDay = Number(day).toString(2);

  return `${binaryYear}-${binaryMonth}-${binaryDay}`;
};
