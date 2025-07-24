import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/items?category=${category.name}`} className="group relative block">
            <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{category.description}</p>
        </Link>
    );
};

export default CategoryCard;