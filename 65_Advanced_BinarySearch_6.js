// "Find square root (int) of +ve integers.

// Ex: 18, O/p: 4
// Ex: 62, O/p: 7"
let k = 62;

let l=1;
let r = k-1;

let mid;
let answer;
while(l<= r) {
    mid = Math.floor((l+r)/2);
    // console.log('mid=', mid, 'l=', l, 'r=', r);
    if(mid * mid > k){
        r = mid -1;
    } else {
        l = mid + 1;
        answer = mid;
    }
}

if(mid * mid > k){
    mid = answer;
}

console.log('Square root is', mid)