let string1 = 'taa';
let arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

let n = string1.length;
let answer = [];

const createMap = (strLen, strValue, mapVal) => {
    for(let i = 0; i< strLen; i++){
        const val = strValue[i];
        let count = mapVal.get(val);
        console.log('count', val,count)
        if(count){
            count = count+1;
            mapVal.set(val, count)
        } else {
            mapVal.set(val, 1)
        }
    }
    return mapVal;
}

const checkAnagram = (str1, str2) => {
    let check = true;
    let map = new Map();
    let map2 = new Map();
    let m = str2.length;
    if(n === m) {
    map = createMap(n , str1, map);
    map2 = createMap(m , str2, map2);
    console.log(map)
    } else {
        check = false;
    }

for(let [key,value] of map){
    
    const val2 =  map2.get(key);
    console.log('map', val2, key, value)
    if(val2 !== value){
        check = false;
        break;
    }
}

    if(check) {
        answer.push(str1);
    }
}


// if(n === m) {
//     map = createMap(n , string1, map);
//     // map2 = createMap(m , str2, map2);
//     console.log(map)
// } else {
//     check = false;
// }


for(let i = 0;i< arr.length; i++){
    const val = arr[i];
    // let newMap = {...map};
    // console.log('newMap', newMap)
    checkAnagram(val, string1);
    // for(let [ value] of val){
    //     let count =  newMap.get(val);
    //     count = count-1;
    //     newMap.set(val, count);
    //     console.log('newMap', newMap)
    // }

}



console.log('given string are anagram:',answer )
