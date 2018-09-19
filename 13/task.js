const withoutTwoZeros = (a, b) => {
  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }
  console.log (a,b);
  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};
export default withoutTwoZeros;
