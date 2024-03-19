import { useNavigate } from "react-router-dom";
import axios from "axios";

const Table = ({ data, name, email, std, btnFlag, updateId }) => {

    const navigate = useNavigate();
    const handleOnViewDetails = (list) => {
        navigate(`/userlist/${list.id}`, { state: list });
    }

    const handleOnEdit = (getlist) => {
        console.log(getlist);
        name(getlist.name);
        email(getlist.emailId);
        std(getlist.standard);
        btnFlag(true);
        updateId(getlist.id);
    }

    const handleOnDelete = (getId) => {
        axios.delete(`https://65edfe1708706c584d9afbcd.mockapi.io/user/${getId}`)
            .then(res => console.log(res))
    }

    return (
        <>
            <table id="customers">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((title, index) =>
                        (
                            <th key={index}>{title}</th>
                        ))}
                        <th>Student List</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((list, index) => (
                            <tr key={index}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{list.emailId}</td>
                                <td>{list.standard}</td>
                                <td>
                                    <button onClick={() => handleOnEdit(list)}>Edit</button>
                                    <button onClick={() => handleOnDelete(list.id)}>Delete</button>
                                    <button onClick={() => handleOnViewDetails(list)}>view Details</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;