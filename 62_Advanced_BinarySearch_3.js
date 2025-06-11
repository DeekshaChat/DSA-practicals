const arr = [-5, -5, -3, 0,0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 8, 10, 10, 15, 15];
const k = 5;
let leftIndex = -1;
let rightIndex = -1;

let  l = 0;
let r = arr.length -1;

let n = Math.floor((l+r)/2);

while(l<=r){
    // console.log('start==== l=', l, 'r=', r, 'n=', n);
    if(arr[n] === k) {
        rightIndex = n;
        // going in forward direction to check the frequency
        l = n +1;
        n = Math.floor((l+r)/2);
    }
    //  console.log('forward==== l=', l, 'r=', r, 'n=', n);
    if(arr[n] > k) {
        r = n-1;
        n = Math.floor((l+r)/2);
    } else {
        l = n +1;
        n = Math.floor((l+r)/2);
    }
    // console.log('l=', l, 'r=', r, 'n=', n);
    if(l === r) {
        
        if(arr[n] === k) {
            rightIndex = n;
        }
        console.log('rightIndex=', rightIndex);
        break;
    }
}

l = 0;
r = arr.length -1;
while(l<=r){
    // console.log('second==== l=', l, 'r=', r, 'n=', n);
    if(arr[n] === k) {
        leftIndex = n;
        // going in backward direction to check the frequency
        r = n - 1;
        n = Math.floor((l+r)/2);
    }
    //  console.log('backward==== l=', l, 'r=', r, 'n=', n);
    if(arr[n] < k) {
        l = r=== n? n: n+1;
        n = Math.floor((l+r)/2);
    } else {
        r = l===n ? n: n -1;
        n = Math.floor((l+r)/2);
    }
    // console.log('l=', l, 'r=', r, 'n=', n);
    if(l === r) {
        
        if(arr[n] === k) {
            leftIndex = n;
        }
        console.log('leftIndex=', leftIndex);
        break;
    }
}
console.log('Frequency is=', rightIndex - leftIndex + 1);

