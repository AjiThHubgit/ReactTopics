import ChildProps from './ChildProps';
import { useState } from 'react';

const ParentProps = () => {

    const studentDetails = [
        {
            "id": 1,
            "name": "John Doe",
            "age": 20,
            "grade": "A",
            "city": "New York"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "age": 22,
            "grade": "B",
            "city": "Los Angeles"
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "age": 19,
            "grade": "A",
            "city": "Chicago"
        },
        {
            "id": 4,
            "name": "Bob Williams",
            "age": 21,
            "grade": "C",
            "city": "Houston"
        },
        {
            "id": 5,
            "name": "Emily Brown",
            "age": 20,
            "grade": "B",
            "city": "Philadelphia"
        },
        {
            "id": 6,
            "name": "Michael Davis",
            "age": 22,
            "grade": "A",
            "city": "Phoenix"
        },
        {
            "id": 7,
            "name": "Sarah Wilson",
            "age": 19,
            "grade": "B",
            "city": "San Antonio"
        },
        {
            "id": 8,
            "name": "David Martinez",
            "age": 21,
            "grade": "C",
            "city": "San Diego"
        },
        {
            "id": 9,
            "name": "Jennifer Taylor",
            "age": 20,
            "grade": "A",
            "city": "Dallas"
        },
        {
            "id": 10,
            "name": "Christopher Anderson",
            "age": 22,
            "grade": "B",
            "city": "San Jose"
        }
    ]
    const [studentRecords, setStudentRecords] = useState(studentDetails);
    const [count, setCount] = useState(0);

    const countIncrement = (addCount) => {
        setCount(addCount);
    }

    return (
        <>
            <p>Parent Props Component</p>
            <h2>Update Via Child : {count}</h2>
            <ChildProps data={studentRecords} updateCount={countIncrement} countIncre={count} />
        </>
    )
}

export default ParentProps;