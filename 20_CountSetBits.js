// Given a number N. Count set bits.
// Ex: 6, O/p: 2
let n = 27;
let count = 0;

function checkBit(n, i) {
  let setBitVal = n & (1 << i);
  
  if(setBitVal !== 0){
    return true;
  } else {
    return false;
  }
}

for( let j = 0; j< 32; j++) {
  if(checkBit(n,j)) {
    count++;
  }
}

console.log('No of set bits in', n, 'is:', count);