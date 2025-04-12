// "Interview Question: AnagramChecker:
// Given List of words:
//     1. `[""eat"",""tea"",""tan"",""ate"",""nat"",""bat""]`
//     2. Given String “`tae`”
//     3. I need to check which string is anagram of “tae” from the above list."

const value =  "tae";
const arr =["eat","tea","tan","ate","nat","bat"]

const resultArr = [];

const anagramChecker = (value1, value2) => {
  const seett = new Set(value);
  if(value1.length === value2.length) {
    for(let i=0; i< value2.length; i++) {
      if(seett.has(value2[i])){
        seett.delete(value2[i]);
      }
    }
    if(seett.size === 0) {
      console.log('Both strings are anagram');
      return true;
    } else {
      console.log('Both strings are not anagram');
      return false;
    }
  } else {
    console.log('Both strings are not anagram');
    return false;
  }
}

for(let i=0; i< arr.length; i++){
  const valFromArr = arr[i];
  const res = anagramChecker(value, arr[i]);
  if(res){
    resultArr.push(valFromArr);
  }
}

console.log('Anagram of the string are:', resultArr)
