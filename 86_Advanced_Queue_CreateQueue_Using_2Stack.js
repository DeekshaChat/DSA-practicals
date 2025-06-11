// Implement Queue using 2 stacks
// input = 10,20,30

let st1 = [10,20,30];
let st2 = [];

const enqueue = (val) => {
    // st2.unshift(val); // shorter way - it adds value at the start of the array
    while (st2.length > 0) {
        let popVal = st2[st2.length-1];
        st2.pop();
        st1.push(popVal);
    }
    st1.push(val);
    createQueue();
    
    console.log(`Enqueue ${val} \n Queue is: ${st2}`);
}

const dequeue = (val) => {
    let temp = st2[st2.length -1];
    console.log(`Val = ${val} and Temp = ${temp}`);
    st2.pop();
    console.log(`Dequeue ${val} \n Queue is: ${st2}`);
}

const createQueue = () => {
    while (st1.length > 0) {
        let popVal = st1[st1.length-1];
        st1.pop();
        st2.push(popVal);
    }
    console.log(st2);
}


createQueue();
enqueue(40);
enqueue(50);
dequeue(10);