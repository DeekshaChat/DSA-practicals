const arr = [5, 4, 1, 4, 3, 2, 7];

let n = arr.length;

let sum = 0;
let leftMax = [];
let rightMax = [];
let result = 0
let leftMaxVal = arr[0];
let rightMaxVal = arr[n-1];
leftMax.push(leftMaxVal);
for(let i=1; i< n; i++){
    if(leftMaxVal < arr[i]) {
        leftMaxVal = arr[i];
    }
    leftMax.push(leftMaxVal);
}
console.log('leftMax arr=', leftMax);

for(let i= n -1; i >= 0; i--){
    if(rightMaxVal < arr[i]) {
        rightMaxVal = arr[i];
    }
    rightMax[i] = rightMaxVal;
}

console.log('rightMax arr=', rightMax);

for(let i = 0; i< n; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - arr[i];
}

console.log('Water trapped value=', result);