import { useState, useEffect } from "react";
import axios from "axios";

const AddStudent = () => {

    // https://65edfe1708706c584d9afbcd.mockapi.io/user
    const [std, setStd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [addStudentDetail, setAddStudentDetails] = useState([]);
    const [sname, setSName] = useState('');
    const [semail, setSEmail] = useState('');
    const [sstd, setSStd] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://65edfe1708706c584d9afbcd.mockapi.io/user');
                setAddStudentDetails(response.data);
            } catch (error) {
                console.error('Error fetching student details:', error);
            }
        };

        fetchData(); // Call the fetchData function inside useEffect
    }, []); // Empty dependency array to run the effect only once


    const handleAddStudent = (e) => {
        e.preventDefault();
        axios.post('https://65edfe1708706c584d9afbcd.mockapi.io/user', {
            name: sname,
            emailId: semail,
            standard: sstd
        })
            .then(res => {
                console.log(res);
            })
    }


    return (
        <>
            <form>
                <label>Student name:</label><br />
                <input type="text" value={sname} onChange={(e) => setSName(e.target.value)} required /><br />
                <label>Student Email id:</label><br />
                <input type="email" value={semail} onChange={(e) => setSEmail(e.target.value)} required /><br /><br />
                <label>STD</label>
                <select value={sstd} onChange={(e) => setSStd(e.target.value)} required>
                    {
                        std.map((std, ind) => (
                            <option key={ind} >{std}</option>
                        ))

                    }
                </select><br /><br />
                <button onClick={(e) => handleAddStudent(e)}>Add Student</button>
            </form>

            {addStudentDetail.length > 0 &&
                <table id="customers">
                    <tr>
                        {Object.keys(addStudentDetail[0]).map((title) =>
                        (
                            <th>{title}</th>
                        ))}
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                </table>
            }

        </>
    )
}

export default AddStudent;

{/* // https://medium.com/swlh/restful-api-design-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-e37a8416e2a0 */ }
