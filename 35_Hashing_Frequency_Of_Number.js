// "Find frequency of numbers.
// Given N array elements (-10^9 to 10^9)
// Q queries given. For every query, return the frequncy of the queried elements.
// Ex: {2,6,3,8,2,8,2,3,8,10,6,9}, 
// 4 Queries:
// 2
// 8
// 3
// 5"

// let date = Date.now();
// console.log('time start', date);
const arr = [2,6,3,8,2,8,2,3,8,10,6,9];
let queries = [2,8,3,5];
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

for(let i = 0;i< queries.length; i++) {
  if(map.has(queries[i])){
    console.log(`${queries[i]} occurrance is of ${map.get(queries[i])} times`);
  }
}
// let dateend = Date.now();
// console.log('time end', dateend);
