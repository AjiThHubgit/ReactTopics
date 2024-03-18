// const addArr = [32, 65, 41, 29, 17];
// let result = 0;


// const addArrFunc = (arr) => { result = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0) };

// addArrFunc(addArr);
// console.log(result);


// const addArr = [32, 65, 41, 29, 17];
// const addArrFunc = (arr) => {
//     return arr.reduce((prev, current) => { return prev + current }, 0)
// }
// console.log(addArrFunc(addArr));


// const age = [17, 25, 15, 21, 29];

// const checkAge = (arr) => {
//     arr.forEach((age) => {
//         if (age > 17) console.log('You are eligible to vote');
//         else console.log('You are not eligible to vote');
//     });
// }

// checkAge(age);

const isNullOrUndefined = (value) => {
    return value === undefined || value === null;
}

// const val = 25; // or any other value for testing

// const isError = isNullOrUndefined(val);
// console.log(isError); // Output: true (if age is not undefined or null), false otherwise


const age = 15;

const checkAge = (age) => {
    if (isNullOrUndefined(age)) return;
    else if (age > 17) console.log('eligible to vote');
    else if (age < 17) console.log('not eligible to vote');
}

checkAge(age);
