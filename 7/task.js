const diff = (a, b) => {
  let result = 0;
  let x = 0;

  if (a >= b) {
    x = a - b;
  } else {
    x = b - a;
  }

  if (360 - x > x) {
    result = x;
  } else {
    result = 360 - x;
  }

  return result;
};
