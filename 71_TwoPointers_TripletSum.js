// "3 Sum:

// Sorted Array, Triplet(i, j, k): such that (i<j<k)
// A[i]+A[j]+A[k] == sum

// Ex: -8, -4, -3, -1, 2, 3, 5, 7, 9
// sum = 14"

const arr = [-8, -4, -3, -1, 2, 3, 5, 7, 9];
const sum = 14;
const n = arr.length;

let a = 0;

let leftPointer = 1;
let rightPointer = n-1;
let count = 0;

while(leftPointer < rightPointer) {
    let val = sum - arr[a];
    let pairSum = arr[leftPointer] + arr[rightPointer];
    if(pairSum === val){
        count++;
        leftPointer++; 
        rightPointer--;
    } else if(pairSum > val) {
        rightPointer--;
    } else if(pairSum < val) {
        leftPointer++; 
    } 
    if(leftPointer === rightPointer || leftPointer > rightPointer){
        a++;
        leftPointer = a+1;
        rightPointer = n-1;
    }
}
console.log('Triplet(i, j, k): such that (i<j<k) and A[i]+A[j]+A[k] == sum is:', count);
