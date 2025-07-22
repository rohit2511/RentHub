import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register, selectAuthStatus, selectAuthError } from './authSlice';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authStatus = useSelector(selectAuthStatus);
    const authError = useSelector(selectAuthError);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(register({ full_name: fullName, email, password }));
        if (register.fulfilled.match(resultAction)) {
            // On successful registration, redirect to login page with a message
            navigate('/login', { state: { message: 'Registration successful! Please log in.' } });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                {authStatus === 'failed' && <p className="text-red-500 text-center mb-4">{authError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={authStatus === 'loading'}>
                        {authStatus === 'loading' ? 'Registering...' : 'Register'}
                    </Button>
                </form>
                <p className="text-center mt-4">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
