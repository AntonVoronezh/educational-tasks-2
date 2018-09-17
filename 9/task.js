const ackermann = (m, n) => {
  let out = 0;
  if (m >= 0 && n >= 0) {
    if (m === 0) { out = n + 1; }
    if (m > 0) {
      if (n === 0) { out = ackermann(m - 1, 1); }
      if (n > 0) { out = ackermann(m - 1, ackermann(m, n - 1)); }
    }
    console.log(out);
    return out;
  }
};

export default ackermann;
