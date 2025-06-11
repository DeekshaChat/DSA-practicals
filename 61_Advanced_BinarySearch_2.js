// "Given a sorted array (asc). Find floor of element k.

// Ex: -5, 2, 3, 6, 9 ,10, 11, 14, 18

// k = 5, ans = 3
// k = 4, ans = 3
// k = 10, ans = 10
// k = -10, ans = none"

const arr = [-5, 2, 3, 6, 9 ,10, 11, 14, 18];
const k = 100;

let l=0;
let r = arr.length -1;

let tempVal = 0;
let n = parseInt((l+r)/2);

while(l <= r) {
console.log('start while-------l,r,n', l,r,n)
    if( arr[n] === k) {
        console.log(`Floor value of ${k} is ${arr[n]}`);
        break;
    } else {
        tempVal = arr[n];
        console.log('tempVal', tempVal)
        if(arr[n] > k){
            r = n-1;
        } else {
            l = n+1;
        }
        n = parseInt((l+r)/2);
        console.log('l,r,n', l,r,n)
        if(l === r) {
            if( arr[n] === k) {
                console.log(`Floor value of ${k} is ${arr[n]}`);
                break;
            } else {
                    if( arr[n] < k) {
                        console.log(`Floor value of ${k} is ${arr[n]}`);
                        break;
                    } else {
                        if(l == 0) {
                            console.log(`Floor value of ${k} is not found`);
                            break;
                        } else {
                            console.log(`Floor value of ${k} is ${tempVal}`);
                            break;
                        }
                    } 
            }
        }
    }
}