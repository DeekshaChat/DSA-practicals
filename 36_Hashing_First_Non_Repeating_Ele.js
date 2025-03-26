// "FIRST NON REPEATING ELEMENT:
// Find first non-repeating element from the start.
// Ex: {1,2,3,1,2,5}.
// o/p: 3"

const arr = [1,2,3,1,2,5];
let map = new Map();

for(let i = 0; i< arr.length; i++) {
  if(map.has(arr[i])){
    let count = map.get(arr[i]);
    count++;
    map.set(arr[i], count);
  } else {
    map.set(arr[i], 1);
  }
}

for (let [key, value] of map.entries()) {
  if(value === 1) {
    console.log(`First non-repeating element from the start is: ${key}`);
    break; 
  }
}