import React, { useState } from 'react';
import Signup from "./Signup";
import Login from "./Login";

const Auth = () => {
    const [authStep, setAuthStep] = useState('signup'); // Initially set to 'signup'

    const handleLoginClick = () => {
        setAuthStep('login'); // Set the step to 'login' when the login button is clicked
    };

    return (
        <div>
            {authStep === 'signup' && <Signup />}
            {authStep === 'login' && <Login />}
            {authStep === 'signup' && <button onClick={handleLoginClick}>Login</button>}
        </div>
    );
}

export default Auth;
