import { length, substr } from './strings';

const isPalindrome = (str) => {
  let begin = 0;
  let end = length(str) - 1;

  if (length(str) > 1) {
    while (begin < end) {
      if (String(str[begin]) !== String(str[end])) {
        return false;
      }
      begin += 1;
      end -= 1;
    }
  }
  return true;
};

export default isPalindrome;
