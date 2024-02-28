import React, { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState({
        user_name: '',
        user_mail_id: ''
    });

    const handleUserNameChange = (e) => {
        setUser({ ...user, user_name: e.target.value });
    }

    const handleUserEmailChange = (e) => {
        setUser({ ...user, user_mail_id: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, 'user');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name:</label>
                    <input type="text" value={user.user_name} onChange={handleUserNameChange} />
                </div>
                <div>
                    <label>User Email:</label>
                    <input type="email" value={user.user_mail_id} onChange={handleUserEmailChange} />
                </div>
                <div>
                    <button type="submit">Perform Action</button>
                </div>
            </form>
        </div>
    );
}
