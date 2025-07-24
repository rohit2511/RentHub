import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, selectAllItems, selectItemsStatus } from './itemsSlice';
import ItemCard from './ItemCard';
import FilterSidebar from './FilterSidebar';
import SortDropdown from './SortDropdown';

const LoadingSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="p-6">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
            <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    </div>
);


const ItemList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectAllItems);
    const status = useSelector(selectItemsStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItems());
        }
    }, [status, dispatch]);

    return (
        <div className="bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">All Items</h1>
                    <SortDropdown />
                </div>

                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                        <FilterSidebar />
                        
                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            {status === 'loading' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[...Array(6)].map((_, i) => <LoadingSkeleton key={i} />)}
                                </div>
                            )}

                            {status === 'succeeded' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {items.map(item => (
                                        <ItemCard key={item.id} item={item} />
                                    ))}
                                </div>
                            )}

                            {status === 'failed' && (
                                <div className="text-center text-red-500 col-span-full">
                                    <p>Failed to load items. Please try again later.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ItemList;