// "Sorted Array, Distinct Element
// Count all pairs (i, j), such that A[i] - A[j] == k 
// (i!=j)

// Ex: -3, 0, 1, 3, 6, 8, 11, 14, 18, 25
// k = 5"

const arr = [-3, 0, 1, 3, 6, 8, 11, 14, 18, 25];
const k = 5;
 
const n = arr.length;
let rightPointer = n-1;
let leftPointer = n-2;

let count = 0;

while(leftPointer <= rightPointer && leftPointer >=0) {
    let subtractVal = arr[rightPointer] - arr[leftPointer];
    if(subtractVal === k) {
        count++;
        rightPointer--;
        leftPointer--;
    } else if(subtractVal > k) {
        rightPointer--;
    } else {
        leftPointer--;
    }
}
console.log('No of pairs such that A[i] - A[j] == k are:', count);