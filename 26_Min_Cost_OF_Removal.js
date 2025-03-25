// "Min Cost to remove all the elements from the array:
// Given N elements,
// At every step, we remove an element from the array. 
// Cost to remove an element = sum of all elements present in the array.
// Find the min cost to remove all the elements:
// i/p: {2,1,4}
// o/p: 11"

const arr = [2,1,4];
const ar = arr.sort();
console.log('array is:', ar);

let min_cost = 0;

while(ar.length > 0) {
    let sumOfArr = ar.reduce((a,b) => a+b);
    min_cost += sumOfArr;
    ar.pop();
}
console.log('Min cost to remove elements present in array: ',min_cost);