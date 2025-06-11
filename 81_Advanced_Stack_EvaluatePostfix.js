// "Given an array a symbols and numbers. Evaluate the postfix expression.
// Ex: 2 3 1 5 + - *
// O/p: -6"

const val = '2315+-*';
let stack = [];
let resultVal;
for(let i = 0; i< val.length; i++) {
    if(val[i] === '+' || val[i] === '-' || val[i] === '*' || val[i] === '/') {
        const topEle = stack.length > 0 && stack[stack.length -1];
        stack.pop();
        const secondEle = stack.length > 0 && stack[stack.length -1];
        stack.pop();
        // console.log('top and second', topEle, secondEle);
        if(val[i] === '+'){
            resultVal  = parseInt(secondEle) + parseInt(topEle);
        } else if(val[i] === '-') {
            resultVal  = parseInt(secondEle) - parseInt(topEle);
        } else if(val[i] === '*') {
            resultVal  = parseInt(secondEle) * parseInt(topEle);
        } else {
            resultVal  = parseInt(secondEle) / parseInt(topEle);
        }
        stack.push(resultVal)
        
    } else {
         stack.push(val[i]);
    }
}
console.log('Postfix expression value', resultVal);