import { useState } from 'react';

const FormComponent = () => {

    const [data, setFData] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [updateBtnFlag, setUpdateBtnFlag] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    const handleClick = () => {

        setFData(
            [...data, { id: data.length + 1, name: name, age: age, city: city }]
        )

        // reset
        setName('');
        setCity('');
        setAge('');

    }

    const handleDelete = (list) => {
        const filter = data.filter((data) => data.id !== list);
        setFData(filter);
        console.log(filter);

    }

    const handleEdit = (list) => {
        console.log(list);
        setName(list.name);
        setCity(list.city);
        setAge(list.age);
        setUpdateId(list.id);
        setUpdateBtnFlag(true);
    }

    const handleUpdate = () => {
        const updatedData = data.map(item => {
            if (item.id === updateId) {
                return {
                    id: updateId,
                    name: name,
                    age: age,
                    city: city
                };
            }
            return item;
        });

        setFData(updatedData);
        setUpdateBtnFlag(false);
        setName('');
        setAge('');
        setCity('');
        setUpdateId(null);
    };

    return (
        <div>
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Age : </label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>City : </label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            {
                !updateBtnFlag && <div><button onClick={handleClick}>Submit</button></div>

            }

            {
                updateBtnFlag && <div><button onClick={handleUpdate}>Update</button></div>
            }

            <div>
                {data.length > 0 &&
                    <table>
                        <thead>
                            <tr>
                                {
                                    Object.keys(data[0]).map((key, index) =>
                                    (
                                        <th key={index}>{key}</th>
                                    )
                                    )
                                }
                                <td>Action</td>
                            </tr>

                        </thead>

                        <tbody>

                            {
                                data.map((list, index) => (
                                    <tr>
                                        <td>{list.id}</td>
                                        <td>{list.name}</td>
                                        <td>{list.age}</td>
                                        <td>{list.city}</td>
                                        <td>
                                            <button onClick={() => handleEdit(list, index)}>Edit</button>
                                            <button onClick={() => handleDelete(list.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>

        </div>

    )
}

export default FormComponent;
