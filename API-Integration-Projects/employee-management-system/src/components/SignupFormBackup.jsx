import React, { useState } from 'react';
import { validateForm } from '../utils/formValidation';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to register');
            }
            // If registration is successful, you can redirect or perform any other action
            console.log('User registered successfully');
        } catch (error) {
            console.error('Registration error:', error.message);
            // Handle error, e.g., display error message to the user
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Signup'}
            </button>
        </form>
    );
};

export default SignupForm;
