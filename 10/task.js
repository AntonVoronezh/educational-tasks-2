const reverseInt = (str0) => {
  const str = String(str0);

  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    if (str[i] === '-') {
      result = `-${result}`;
    } else {
      result += str[i];
    }

    i -= 1;
    console.log(result);
  }

  return Number(result);
};

export default reverseInt;
