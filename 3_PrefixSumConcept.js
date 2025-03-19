// SC = O(n)
// TC = O(q)

let ar = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
let psAr = [];
for(let i = 0; i< ar.length; i++){
  if(i>0){
    psAr[i] = psAr[i-1] + ar[i];
  } else {
    psAr[i] = ar[i];
  }
}
console.log(psAr);
//Created new array with prefix sum. Space complexity increases to O(n)

let q = [ [4,8],[3,7],[1,3],[0,4],[6,9],[7,7]];
for(let i = 0; i< q.length; i++){
  let l = q[i][0];
  let r = q[i][1];
  if(l === 0){
    sum = psAr[r]
  } else {
    sum = psAr[r] - psAr[l-1]; 
  }
  console.log('sum is=', sum);
}
// Time complexity reduces as compared to brute force approach. Time complexity is O(q)