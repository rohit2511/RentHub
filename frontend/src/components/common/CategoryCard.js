import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/items?category=${category.name}`} className="group relative block">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
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