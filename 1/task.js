import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const invertCase = (str) => {

  let out = '';
  let i = 0;

  while (length(str)-1 >= i) {
    if (str[i] === toUpperCase(str[i])) {
      out += toLowerCase(str[i]);
    } else if (str[i] === toLowerCase(str[i])){
      out += toUpperCase(str[i]);
    } else {
      out += str[i];
    }
    i += 1;
    console.log(str[i]);
  }
  return out;
};

export default invertCase;
// END
