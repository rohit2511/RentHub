import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemList from '../features/items/ItemList';
import ItemDetails from '../features/items/ItemDetails';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import ProtectedRoute from './ProtectedRoute';

const Home = () => (
    <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to RentAnything</h1>
        <p className="mt-4 text-lg">Your one-stop shop to rent anything you need.</p>
    </div>
);

const MyBookings = () => <div>My Bookings Page (Protected)</div>;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            
            <Route 
                path="/my-bookings" 
                element={
                    <ProtectedRoute>
                        <MyBookings />
                    </ProtectedRoute>
                } 
            />
        </Routes>
    );
};

export default AppRoutes;
