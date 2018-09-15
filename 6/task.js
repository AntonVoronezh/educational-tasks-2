import { length, substr } from './strings';

// BEGIN (write your solution here)
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }

  return result;
};

export default reverse;
// END
