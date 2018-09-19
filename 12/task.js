const areBracketsBalanced = (str) => {
  let levo = 0;
  let pravo = 0;
  let out = 0;

  if (length(str) % 2 === 0) {
    for (let i = 0; i < length(str); i += 1) {
      if (String(str[i]) === '(') {
        out += 1;
        levo += 1;
      }
      if (String(str[i]) === ')') {
        pravo += 1;
        out -= 1;
      }

      if (levo < pravo) { return false; }
    }
    return !!(levo === pravo && out === 0);
  }
  return false;
};

export default areBracketsBalanced;
