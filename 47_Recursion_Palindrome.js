// Write a recursive function to determine if a given string is a Palindrome or not.

const checkPalindrome = (val, i=0, j= val.length-1) => {
  if(j >= i){
    if( val[i] == val[j]) {
      return checkPalindrome(val, i+1, j-1);
    } else {
      return false;
    }
  } else {
      return true;
  }
}

const stringValue = 'mallam';
const value = checkPalindrome(stringValue);
console.log(`${stringValue} is Palindrome= ${value}`);