import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('https://65edfe1708706c584d9afbcd.mockapi.io/user')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleLogin = () => {
        // Check if username and email match any user from the API response
        const matchedUser = users.find(user => user.userName === username && user.email === email);
        if (matchedUser) {
            // If a user with matching credentials is found, set isLoggedIn to true
            setIsLoggedIn(true);
            // You may also implement further actions like redirecting to a different page
            console.log('Login successful');
        } else {
            // If no matching user is found, show an error message or handle the invalid login attempt
            console.log('Invalid username or email');
        }
    };

    return (
        <>
            <div>
                <label>User Name : </label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>

            <div>
                <label>User EmailId : </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div>
                <button className="bg-slate-700" onClick={handleLogin}>Login</button>
            </div>

            {isLoggedIn && <p>Login successful!</p>}
        </>
    );
};

export default Login;
