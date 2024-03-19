import { useState, useEffect } from "react";
import axios from "axios";
import Table from './Table'

const AddStudent = () => {

    const [std, setStd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [addStudentDetail, setAddStudentDetails] = useState([]);
    const [addStudentDetailCopy, setAddStudentDetailsCopy] = useState([]);
    const [sname, setSName] = useState('');
    const [semail, setSEmail] = useState('');
    const [sstd, setSStd] = useState('');
    const [btnFlag, setBtnFlag] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const [filterStd, setFilterStd] = useState('');
    const [fstd, setFStd] = useState(['All', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [sfstd, setsfstd] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://65edfe1708706c584d9afbcd.mockapi.io/user');
                setAddStudentDetails(response.data);
                setAddStudentDetailsCopy(response.data);
            } catch (error) {
                console.error('Error fetching student details:', error);
            }
        };

        fetchData();
    }, []);

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

    const handleUpdateStudent = (e) => {
        e.preventDefault();
        axios.put(`https://65edfe1708706c584d9afbcd.mockapi.io/user/${updateId}`, {
            name: sname,
            emailId: semail,
            standard: sstd
        })
            .then(res => {
                console.log(res);
            })
    }

    const filterOnChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setFilterStd(inputValue);

        if (inputValue.length === 0) {
            setAddStudentDetails(addStudentDetailCopy);
        } else {
            const filteredStudentDetails = addStudentDetailCopy.filter((list) =>
                list.name.toLowerCase().includes(inputValue)
            );
            setAddStudentDetails(filteredStudentDetails);
        }
    };

    const handleFilterByStd = (e) => {
        const selectedStd = e.target.value;
        setsfstd(selectedStd);

        if (selectedStd === 'All') {
            setAddStudentDetails(addStudentDetailCopy);
        } else {
            const stdFilter = addStudentDetailCopy.filter((student) => student.standard === selectedStd);
            setAddStudentDetails(stdFilter);
        }
    };


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
                {
                    btnFlag === false
                        ? <button onClick={(e) => handleAddStudent(e)}>Add Student</button>
                        : <button onClick={(e) => handleUpdateStudent(e)}>Update Student</button>
                }
            </form>

            <div className="filter-container">
                <div>
                    <input type="text" placeholder="search by student name" value={filterStd} onChange={(e) => filterOnChange(e)} />
                </div>
                <div>
                    <label>Filter By Standard</label>
                    <select value={sfstd} onChange={(e) => handleFilterByStd(e)}>
                        {
                            fstd.map((cls, ind) => (
                                <option key={ind}>{cls}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {
                addStudentDetail.length > 0 &&
                <Table data={addStudentDetail} name={setSName} email={setSEmail} std={setSStd} btnFlag={setBtnFlag} updateId={setUpdateId} />

            }

        </>
    )
}

export default AddStudent;

{/* // https://medium.com/swlh/restful-api-design-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-e37a8416e2a0 */ }
