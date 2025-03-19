let ar = [[3,8,9,2],[1,2,3,6],[4,10,11,17]];
let subArLength = ar[0].length;

for(let i = 0; i < subArLength; i++){
  let sum = 0;
  for(let j=0; j< ar.length; j++) {
      sum += ar[j][i];
  }
  console.log('Column wise sum is:', sum);
}