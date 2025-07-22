import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated } from '../../features/auth/authSlice';
import Button from '../common/Button';

const Navbar = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">RentAnything</Link>
                <div className="flex items-center space-x-4">
                    <Link to="/items" className="text-gray-600 hover:text-blue-500">Browse Items</Link>
                    {isAuthenticated ? (
                        <>
                            <Link to="/my-bookings" className="text-gray-600 hover:text-blue-500">My Bookings</Link>
                            <Button onClick={() => dispatch(logout())}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-600 hover:text-blue-500">Login</Link>
                            <Link to="/register">
                                <Button>Register</Button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
