import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated } from '../../features/auth/authSlice';
import { CameraIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();

    const activeLink = "text-indigo-600 border-b-2 border-indigo-600";
    const inactiveLink = "text-gray-500 hover:text-gray-900";

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
                            <CameraIcon className="h-8 w-8 text-indigo-600" />
                            <span className="text-2xl font-bold text-gray-900">RentAnything</span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                               <NavLink to="/items" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLink : inactiveLink}`}>
                                   Browse Items
                               </NavLink>
                               {isAuthenticated && (
                                   <NavLink to="/my-bookings" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLink : inactiveLink}`}>
                                       My Bookings
                                   </NavLink>
                               )}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {isAuthenticated ? (
                                <button onClick={() => dispatch(logout())} className="text-gray-500 hover:text-gray-900 text-sm font-medium">
                                    Logout
                                </button>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <Link to="/login" className="text-gray-500 hover:text-gray-900 text-sm font-medium">
                                        Sign in
                                    </Link>
                                    <Link to="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;