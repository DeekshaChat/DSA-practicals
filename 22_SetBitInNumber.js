// Given a number N. Set the ith bit.
// N:25, set 3rd Bit
let n =25;
let i = 3;

let set_Ith_Bit = n | (1<< i);
console.log('Given number:',n,'setting its',i,'bit =',set_Ith_Bit);