const isPowerOfThree = (n) => {
    let i = 0; 
    let x = 0; 
  
    while (i <= n) {
      if (Math.pow(3, i) === n) {
        return true;
        break;
        }
      //x = Math.pow(3, i);  
      i += 1;
      //console.log(x);
    }
  return false; 
  }
  export default isPowerOfThree;
  