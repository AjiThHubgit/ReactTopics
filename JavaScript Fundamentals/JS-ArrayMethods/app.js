/*
================================
 Finding elements

indexOf() – locate an element in an array.
includes() – check if an element is in an array.
find() – find an element in an array.
findIndex() – find the index of an element in an array.
================================
*/

// const contents = ["Apple", "Banana", "Orange", "Pear"];

// indexOf
// const findInd = contents.indexOf('Orange');
// console.log(findInd, 'return the index');

//includes

// console.log(contents.includes('Banana'), 'if it present true else return false');

// find

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 11);

// it return the first satisfied value.

// console.log(found); 

// Expected output: 12

// findIndex

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// it return the first satisfied Index.

// console.log(array1.findIndex(isLargeNumber));

// at
// console.log(contents.at(findInd), 'return the values in that index');


// map

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((val) => val * 3);
// const map2 = array1.map((val) => val > 3);

// console.log(map1);
// console.log(map2);
// console.log(array1);

// filter

// const filteredArr = contents.filter(item => item === 'Orange');

// console.log(filteredArr, 'filteredArr');
// console.log(contents, 'contents');

// every

// const ageForVoting = [18, 25, 19, 16, 26];

// console.log(ageForVoting.every(age => age > 17)); 

// Expected output: false

// some

// const ageForVoting = [18, 25, 19, 21, 15];

// console.log(ageForVoting.some(age => age > 17));

// Expected output: true


// Expected output: 3

// findLast

// const array1 = [5, 12, 50, 130, 44];

// const found = array1.findLast((element) => element > 45);

// console.log(found);

// Expected output: 130

// findLastIndex

// const array1 = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 45;

// console.log(array1.findLastIndex(isLargeNumber));

// Expected output: 3
// Index of element with value: 130

// slice

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// join

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"

// console.log(elements.join(' '));
// Expected output: "Fire Air Water"

//split

// const str = 'The quick brown fox jumps over the lazy dog.';
// const splitStr = str.split(' ');
// console.log(splitStr);

