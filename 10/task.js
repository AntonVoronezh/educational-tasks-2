const reverseInt = (str) => {
  str = String(str);
  
  let i = str.length -1;
    let result = '';
  
    while (i >= 0) {
      if (str[i] === '-') {
        result = '-' + result;
      } else {
      result += str[i];      
      }
  
      i = i - 1;
      console.log(result);
    }
  
    return Number(result);
  
  };
  
  
  export default reverseInt;
  