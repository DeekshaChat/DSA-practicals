let string1 = 'tttt';
let string2 = 'teaaa';

let n = string1.length;
let m = string2.length;

let map = new Map();
let map2 = new Map();

let check = true;

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
if(n === m) {
    map = createMap(n , string1, map);
    map2 = createMap(m , string2, map2);
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

console.log('given string are anagram:',check )
