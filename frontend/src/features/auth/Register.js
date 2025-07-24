import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register, selectAuthStatus, selectAuthError } from './authSlice';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { CameraIcon } from '@heroicons/react/24/solid';

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
            navigate('/login', { state: { message: 'Registration successful! Please log in.' } });
        }
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <CameraIcon className="mx-auto h-10 w-auto text-indigo-600" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {authStatus === 'failed' && <p className="text-red-500 text-center p-3 bg-red-100 rounded-md">{authError}</p>}
                    <div className="rounded-md shadow-sm space-y-4">
                        <Input name="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
                        <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                        <Input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>

                    <div>
                        <Button type="submit" className="w-full" disabled={authStatus === 'loading'}>
                            {authStatus === 'loading' ? 'Creating account...' : 'Create Account'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;