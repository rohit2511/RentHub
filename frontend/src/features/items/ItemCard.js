import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
    return (
        <Link to={`/items/${item.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="text-right font-semibold text-blue-600">
                    ${item.price_per_day} / day
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;
