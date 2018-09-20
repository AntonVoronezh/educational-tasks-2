import { getLength } from './strings';

// BEGIN (write your solution here)
const substr = (str, begin = 0, end = getLength(str)) => {


//Отрицательное число
if (begin < 0) {begin = 0;}
if (end === 0) {return '';}
if (end < 0) {end = 1;}
if (begin > getLength(str)) {return '';}
end = end + begin;
if (begin + end > getLength(str)) {end = getLength(str);}

console.log(begin + '-' + end);

let i = 0;
let out = '';
  for (begin; begin < end; begin += 1) {
    out += String(str[begin]);
  } 
return out;
}
export default substr;
