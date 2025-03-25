// "Noble Enteger:
// Given N distinct array elements. Calculate no of of noble integers.
// Noble Integer = arr[i] is said to be noble if: 
// count(Elements < arr[i]) == arr[i]

// Ex: 1, -5, 3, 5, -10, 4
// o/p: 3"


const arr = [1, -5, 3, 5, -10, 4];
arr.sort();
let nobleInteger = 0;

for(let i= 0; i< arr.length; i++) {
  if(arr[i] === i) {
    nobleInteger++;
    console.log('Noble integer is:' , arr[i]);
  }
}

console.log('Number of Noble integer:' , nobleInteger);