import { useState } from "react";

const SignupForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleOnClick = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form>
                <label>Employee Name: </label> <br />
                <input type="text" name="name" onChange={handleOnChange} value={formData.name} required /> <br />
                <label>Employee Email id: </label> <br />
                <input type="email" name="email" onChange={handleOnChange} value={formData.email} required /> <br />
                <button onClick={handleOnClick}>SignUp</button>
            </form>
        </>
    )
}

export default SignupForm;
