import { useState } from 'react'

const FormComponent = () => {

    const [data, setData] = useState([{
        id: 1,
        name: 'Ajith',
        age: 26,
        city: 'Ariyur'
    }]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setData(
            [...data, { name: e.target.name.value, age: e.target.age.value, city: e.target.city.value }]
        )

        // e.target.name.value = '';
        // e.target.age.value = '';
        // e.target.city.value = '';

        

        console.log('FormData', data);
    };

    return (
        <>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text" name="age" />
                </div>
                <div>
                    <label>City : </label>
                    <input type="text" name="city" />
                </div>

                <div><input type="submit" value="Submit" /></div>
            </form>

            <table>

                <thead>
                    <tr>
                        {
                            Object.keys(data[0]).map((key, index) => (
                                <th key={index}>{key}</th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((tdata, index) => (
                            <tr key={index}>
                                <td>{tdata.id}</td>
                                <td>{tdata.name}</td>
                                <td>{tdata.age}</td>
                                <td>{tdata.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default FormComponent;