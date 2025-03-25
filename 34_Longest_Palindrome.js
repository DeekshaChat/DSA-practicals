// "Given a string. Calculate length of Longest Palindromic Substring.
// Ex: abacab
// o/p: 5"

let str = 'abacab';
let n = str.length;
let palLength = 1;
for(let i=0; i<str.length; i++) {
  let compareVal = 1;
  let length = 1;
  if(i>0) {
    while ((i-compareVal) >= 0 && (i+ compareVal) < n){
      if(str[i-compareVal] === str[i+compareVal]){
        length +=2;
        compareVal++;
      } else {
        compareVal++;
      }
    }
    palLength = Math.max(length, palLength);
  } else {
    palLength = Math.max(length, palLength);
  }
}
console.log('Longest Palindrome Length = ', palLength);