import { length } from './strings'; // eslint-disable-line

const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)

const isHappyNumber = (num) => {
  let result = sumOfSquareDigits(num); 

      for (let i = 0; i < 10; i += 1) {
        result = sumOfSquareDigits(result); 
        console.log(result);
          if (result === 1) {
            return true; break;
            }
       }

return false;  
};

export default isHappyNumber;
