const formattedTime = (n) => {
  let hour = Math.floor(n / 60);
  let min = n - (hour * 60);
  let out = '';
  //console.log(Math.floor(12.27)); 
  //console.log(hour);

    if (min > 9) {min = ':' + min;}
    if (min < 9) {min = ':0' + min;}

  if (hour === 0) {
    if (n > 9) {out = '00:' + n;}
    if (n < 9) {out = '00:0' + n;} 
  } 
  if (hour > 0) {
    console.log(min); 
    if (hour < 9) {out = '0' + hour + min;}
    if (hour > 9) {out = hour + min;}
}

return out; 
}
export default formattedTime;
