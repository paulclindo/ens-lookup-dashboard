export const formatBigIntToDate = (bigInt) => {
  const date = new Date(bigInt * 1000);
  return date.toLocaleString();
};
