// "Given the size of window as K. Check if all subarrays of size K have sum <= B.

// Ex: 3, 2, 5, 4, 6, 3, 7, 2

// k = 4, B= 20

// O/p: true"

// Note- Done via sliding window concept not via binary search approach

const arr = [ 3, 2, 5, 4, 6, 3, 7, 2];
const k = 4;
const n = arr.length;
const sum = 20;
let answer = true;

let sumOfSubArr = 0;
for(let i=0;i<k;i++){
    sumOfSubArr += arr[i];
    if(sumOfSubArr > sum){
        answer = false;
        return;
    }
}

if(answer){
    for(let i=1; i<= n-k; i++) {
        sumOfSubArr = sumOfSubArr - arr[i-1];
        sumOfSubArr += arr[k+i-1];
        console.log('here2', sumOfSubArr)
        if(sumOfSubArr > sum){
            answer = false;
            break;
        }
    }
}

if(answer) {
   console.log('Subarray sum is less than sum') 
} else {
   console.log('Subarray sum is not less than sum') 
}