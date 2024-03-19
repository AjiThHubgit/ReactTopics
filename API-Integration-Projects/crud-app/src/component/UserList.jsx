import { useLocation } from "react-router-dom";

const UserList = () => {
    const location = useLocation().state;
    console.log(location);
    return (
        <>
            <p>Student Name : {location.name}</p>
        </>
    )
}

export default UserList;

// Quarterly Exam
// Half-Yearly Exam
// Annual Exam