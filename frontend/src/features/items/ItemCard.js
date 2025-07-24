import React from 'react';
import { Link } from 'react-router-dom';
import { TagIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ItemCard = ({ item }) => {
    const placeholderImage = `https://placehold.co/600x400/e2e8f0/4a5568?text=${encodeURIComponent(item.name)}`;
    
    return (
        <Link to={`/items/${item.id}`} className="group block bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
                <img 
                    className="w-full h-48 object-cover" 
                    src={item.image_url || placeholderImage} 
                    alt={item.name} 
                    onError={(e) => { e.target.onerror = null; e.target.src=placeholderImage; }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                    <TagIcon className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">{item.category || 'General'}</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 truncate group-hover:text-indigo-600 transition-colors duration-300">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 h-10 overflow-hidden">{item.description}</p>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                    <MapPinIcon className="h-5 w-5" />
                    <span>{item.location || 'Not specified'}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">
                        ${item.price_per_day}
                        <span className="text-sm font-normal text-gray-500">/day</span>
                    </p>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1.5 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        Rent Now
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;
