// Toggle ith Bit
let n =25;
let i=2;
let answer = n ^ (1<<i);
console.log('Toggle', i,'bit of number',n,'\nFinal answer is:',answer);


// wrong output
let solution1 = n & ~(1<<i);
console.log(solution1);