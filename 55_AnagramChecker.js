// "Interview Question: Anagram
// Given 2 String, check whether they both are anagram or not:
// Ex: ""tea"", ""ate""
// ""listen"", ""silent""
// ""Hello"", ""World"""

const value1 =  "tea";
const value2 = "ate";

const seett = new Set(value1);

if(value1.length === value2.length) {
  for(let i=0; i< value2.length; i++) {
    if(seett.has(value2[i])){
      seett.delete(value2[i]);
    }
  }
  if(seett.size === 0) {
    console.log('Both strings are anagram');
  } else {
    console.log('Both strings are not anagram');
  }
} else {
  console.log('Both strings are not anagram');
}