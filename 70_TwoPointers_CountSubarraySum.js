// "Array of +ve integers,
// Find count of subarray with sum == k.

// Ex: 3, 2, 5, 1, 8, 6, 2, 10
// k = 15"

const arr = [3, 2, 5, 1, 8, 6, 2, 10];
const n = arr.length;

const k = 15;

let leftPointer = 0;
let rightPointer = 0;

let count = 0;
let sum = arr[0];
while(leftPointer <= rightPointer && rightPointer < n) {
    if(sum === k) {
        count++;
        sum = sum - arr[leftPointer];
        leftPointer++;
        rightPointer++;
        sum = sum + arr[rightPointer];
    } else if(sum > k) {
        sum = sum - arr[leftPointer];
        leftPointer++;
    } else {
        rightPointer++;
        sum = sum + arr[rightPointer];
    }
}
console.log('count of subarray with sum == k are:', count);