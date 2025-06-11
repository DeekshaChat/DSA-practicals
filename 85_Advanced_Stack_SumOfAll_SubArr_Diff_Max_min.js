// "Given an array. Find the sum of (max-min) for all subarrays.
// Ex: 2, 5, 3
// O/p: 8"

let arr = [2, 5, 3]
let newArr = []

for(let i = 0; i< arr.length; i++) {
    newArr.push([arr[i]])
    for( let j = i+1; j < arr.length; j++) {
        if (j- i == 1) {
            let val = []
            val.push(arr[i])
            val.push(arr[j])
            newArr.push(val)
        }
    }
}
newArr.push(arr)
// console.log(newArr)

const findMin = () => {
    let minArr = []
    for(let i = 0; i< newArr.length; i++) {
        let tempArr = newArr[i];
        if (tempArr.length == 1) {
            minArr.push(tempArr[0])
        } else {
            let min = Infinity;
            for(let j = 0; j < tempArr.length; j++) {
                if(tempArr[j] < min){
                    min = tempArr[j]
                }
            }
            minArr.push(min)
        }
    }
    // console.log(minArr)
    return minArr;
}

const findMax = () => {
    let maxArr = []
    for(let i = 0; i< newArr.length; i++) {
        let tempArr = newArr[i];
        if (tempArr.length == 1) {
            maxArr.push(tempArr[0])
        } else {
            let max = -Infinity;
            for(let j = 0; j < tempArr.length; j++) {
                if(tempArr[j] > max){
                    max = tempArr[j]
                }
            }
            maxArr.push(max)
        }
    }
    // console.log(maxArr)
    return maxArr;
}

const findDiff = (maxAr, minAr) => {
    let diffArr = []
    for(let i = 0; i< maxAr.length; i++){
        let val = maxAr[i] - minAr[i]
        diffArr.push(val)  
    }
    // console.log(diffArr)
    return diffArr
}

const sumOfArray = (ar) => {
    let sum = 0;
    for(let i = 0; i< ar.length; i++) {
        sum += ar[i]
    }
    // console.log(sum)
    return sum
}

minArray = findMin()
maxArray = findMax()
diffArray = findDiff(maxArray, minArray)
sumVal = sumOfArray(diffArray)
console.log(`The sum of (max-min) for all subarrays is ${sumVal}`)