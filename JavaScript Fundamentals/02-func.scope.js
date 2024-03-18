console.log(a);
const a = () => console.log('Function a is Printed'); // func-scope.js:1 Uncaught ReferenceError: Cannot access 'a' before initialization

b();
function b() {
    console.log('Function b is Printed'); // Function b is Printed 
}

c();
console.log(c()); // Uncaught ReferenceError: c is not defined
