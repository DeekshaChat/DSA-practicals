let ar = [[3,8,9,2],[1,2,3,6],[4,10,11,17]];

for(let i = 0; i< ar.length; i++){
  let sum = 0;
  let subAr = ar[i];
    for(let j=0; j< subAr.length; j++) {
        sum += ar[i][j];
    }
  console.log('Row wise sum is:', sum);
}