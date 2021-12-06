/**
 * Parse UNIX Epoch time to human readable date (https://www.epochconverter.com/programming/#javascript)
 * @param {String} bigInt: Epoch time
 * @returns {String}
 */

export const friendlyEpochTimeToDate = (bigInt) => {
  const date = new Date(bigInt * 1000);
  return date.toLocaleString();
};
