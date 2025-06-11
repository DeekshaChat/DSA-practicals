// "Sorted Array, Distinct Element
// Count all pairs (i, j), such that A[i] + A[j] == k 
// (i!=j)

// Ex: -3, 0, 1, 3, 6, 8, 11, 14, 18, 25
// k = 17
// O/P :  2"

const arr = [-3, 0, 1, 3, 6, 8, 11, 14, 18, 25];
const k = 17;

const n = arr.length;

let leftPointer = 0;
let rightPointer = n-1;

let count = 0;

while(leftPointer <= rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];
    if(sum === k){
        count++;
        rightPointer--;
        leftPointer++;
    } else if(sum > k) {
        rightPointer--;
    } else {
        leftPointer++;
    }
}

console.log('No of pairs (i, j), such that A[i] + A[j] == k are:', count);