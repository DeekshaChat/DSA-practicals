// "Given a char array. Toggle every character.
// Ex: SaLEs
// o/p: sAleS"

const str = 'SaLEs';
let toggleStr = '';
for(let i = 0; i< str.length; i++) {
  const asciiCodeOfChar = str.charCodeAt(i);
  if(asciiCodeOfChar >= 97 && asciiCodeOfChar <= 122){
    toggleStr += String.fromCharCode(asciiCodeOfChar - 32);
  } else {
      toggleStr += String.fromCharCode(asciiCodeOfChar + 32);
  }
}

console.log('Toggle Every character of the string. New string is:', toggleStr);