const students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Mike Johnson', age: 21 },
    { id: 4, name: 'Emily Brown', age: 19 },
    { id: 5, name: 'Alex Wilson', age: 23 },
    { id: 6, name: 'Sarah Davis', age: 18 },
    { id: 7, name: 'Ryan Taylor', age: 24 },
    { id: 8, name: 'Jessica Martinez', age: 20 },
    { id: 9, name: 'Chris Anderson', age: 22 },
    { id: 10, name: 'Amanda Thompson', age: 19 }
];

const findAgeAboveTwentyList = (students) => students.filter(student => student.age > 20);

console.log(findAgeAboveTwentyList(students));