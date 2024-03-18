
/*
================================
 Length
================================
*/

const scores = [10, 20, 30, 40, 50, 60];
console.log(scores.length);

/*
================================
 Adding/removing elements

uspp
unshift() – add one or more elements to the beginning of an array.
shift() – remove the first element from an array.
push() – add one or more elements to the end of an array.
pop() – remove an element from the end of an array.

splice() – manipulate elements in an array such as deleting, inserting, and replacing elements.
slice() – copy elements of an array.
================================
*/

// JavaScript Array splice: Delete, Insert, and Replace

const deletionArr = scores.splice(0, 2);

console.log('deletionArr', deletionArr);
console.log('scores', scores);

const insertArr = scores.splice(0, 0, 10, 20);
console.log('scores', scores);

const replaceArr = scores.splice(-1, 1, 100);
console.log('scores', scores);

// slice(start, end);
// The typical use of the slice() method is to copy a portion of an array without modifying the source array. Here is an example:

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const rgb = colors.slice(0, 3);
console.log('rgb', rgb);

/*
================================
 Finding elements

indexOf() – locate an element in an array.
includes() – check if an element is in an array.
find() – find an element in an array
findIndex() – find the index of an element in an array.
================================
*/


/*
================================
 High-order methods

map() – transform array elements.
filter() – filter elements in an array.
reduce() – reduce elements of an array to a value.
every() – check if every element in an array passes a test.
some() – check if at least one element in an array passed a test.
sort() – sort elements in an array.
forEach() – loop through array elements.
================================
*/