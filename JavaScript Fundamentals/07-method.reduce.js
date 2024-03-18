// normal for loop
// let arr = [17, 25, 15, 21, 29];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.log('result', result);


// using reduce


// const addArrayIndex = (arr) => {
//     return arr.reduce((acc, val) => acc + val, 0);
// }

// or

const addArrayIndex = (arr) => arr.reduce((acc, val) => acc + val, 0);

let arr = [17, 25, 15, 21, 29];
const result = addArrayIndex(arr);
console.log(result);