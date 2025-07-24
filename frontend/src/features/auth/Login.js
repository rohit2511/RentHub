import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login, selectIsAuthenticated, selectAuthStatus, selectAuthError } from './authSlice';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { CameraIcon } from '@heroicons/react/24/solid';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const authStatus = useSelector(selectAuthStatus);
    const authError = useSelector(selectAuthError);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <CameraIcon className="mx-auto h-12 w-auto text-indigo-600" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {authStatus === 'failed' && <p className="text-red-500 text-center p-3 bg-red-100 rounded-md">{authError}</p>}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <Input id="email-address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <Input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full" disabled={authStatus === 'loading'}>
                            {authStatus === 'loading' ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;