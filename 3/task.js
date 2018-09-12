const isPowerOfThree = (n) => {
    let i = 0;
  
    while (i <= n) {
      if (Math.pow(3, i) === n) {
        return true;
      }
      i += 1;
    }
    return false;
  };
  export default isPowerOfThree;
  