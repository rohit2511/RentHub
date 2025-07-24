import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemList from '../features/items/ItemList';
import ItemDetails from '../features/items/ItemDetails';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import ProtectedRoute from './ProtectedRoute';
import SearchBar from '../components/common/SearchBar';
import CategoryCard from '../components/common/CategoryCard';


const Home = () => {
    const categories = [
        { name: 'Cameras', description: 'Capture every moment', imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' },
        { name: 'Camping Gear', description: 'Explore the great outdoors', imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
        { name: 'Event Attire', description: 'Dress to impress', imageUrl: 'https://images.unsplash.com/photo-1583394799858-00b538255544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
    ];

    return (
        <div>
            <div className="relative bg-gray-800">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Hero Background"/>
                    <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative max-w-4xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Rent Anything, Anytime</h1>
                    <p className="mt-6 text-xl text-indigo-100">The best gear, right at your fingertips. Explore a world of possibilities without the commitment of ownership.</p>
                    <SearchBar />
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Browse by Category</h2>
                            <p className="mt-4 text-lg text-gray-500">Find exactly what you need for your next project or adventure.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                            {categories.map((category) => (
                                <CategoryCard key={category.name} category={category} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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