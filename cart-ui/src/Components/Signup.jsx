import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const handleSignUp = () => {
        axios.post('https://65edfe1708706c584d9afbcd.mockapi.io/user', {
            userName: userName,
            email: email
        }).then(response => {
            // Handle successful sign-up
            console.log('User signed up successfully:', response.data);
        }).catch(error => {
            // Handle sign-up error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with error status:', error.response.status);
                console.error('Error data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from the server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
            }
        });
    };

    return (
        <>
            <div>
                <label>User Name : </label>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} required />
            </div>

            <div>
                <label>User EmailId : </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div><button className="bg-slate-700" onClick={handleSignUp}>SignUp</button></div>
        </>
    );
};

export default Signup;
