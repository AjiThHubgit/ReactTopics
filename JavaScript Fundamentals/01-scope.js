console.log(a);
const a = 5; // scope.js:1 Uncaught ReferenceError: Cannot access 'a' before initialization

console.log(b); // Output: undefined
var b;

console.log(c); // scope.js:7 Uncaught ReferenceError: Cannot access 'c' before initialization
let c;

let d;
console.log(d); // undefined

console.log(e); // Output: scope.js:10 Uncaught ReferenceError: d is not defined