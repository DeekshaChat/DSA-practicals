const arr = [[5, 10, 15, 20],[6, 12, 18, 24],[7, 14, 21, 28],[8, 16, 24, 34]];

let n = arr.length;
let m = arr[0].length;
let i = 0;
let j = m-1;
let k = 9;
while(i < n && j >= 0) {
    if(arr[i][j] === k) {
        console.log(k ,'found');
        break;
    } else {
        if(arr[i][j] > k) {
            j--
        } else {
            i++;
        }
        if(i === n-1 && j=== 0) {
            console.log(k ,'not found');
        }
    }
}