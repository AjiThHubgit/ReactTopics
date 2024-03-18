const fruits = ['apple', 'banana', 'orange', 'grapes', 'watermelon'];

fruits.map((fruit, ind, arr) => {
    console.log('fruit', fruit);
    console.log('ind', ind);
    console.log('arr', arr);
});

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

const studentId = 7;

const filterAgeAboveTwenty = (studentId) => {
    const updatedList = students.map((student) => {
        if (student.id === studentId) return { ...student, name: 'Ayalan' };
        else return student;
    });
    return updatedList;
}

console.log('filterAgeAboveTwenty', filterAgeAboveTwenty(studentId));
filterAgeAboveTwenty(studentId);