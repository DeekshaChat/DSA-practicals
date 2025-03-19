// Check if there exists a pair(i, j) s.t arr[i] + arr[j] == k & i != j. 
// Ex: 3, -2, 1, 4, 3, 6, 9, 8
let ar = [3,-2,1,4,3,6,8];
let k = 10;
for(let i=0; i< ar.length; i++){
  for(let j = i+1; j< ar.length; j++){
    if(ar[i] + ar[j] === k){
      console.log('Pair is =', ar[i], ar[j]);
    }
  }
}
