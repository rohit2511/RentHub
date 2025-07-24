import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById, selectItemById, selectItemsStatus } from './itemsSlice';
import Button from '../../components/common/Button';
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import ImageGallery from './ImageGallery';
import BookingCalendar from './BookingCalendar';

const LoadingSkeleton = () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="bg-gray-300 rounded-lg w-full h-96"></div>
                </div>
                <div>
                    <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-8"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-8"></div>
                    <div className="h-16 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
);

const ItemDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(selectItemById);
    const status = useSelector(selectItemsStatus);

    useEffect(() => {
        dispatch(fetchItemById(id));
    }, [id, dispatch]);

    if (status === 'loading' || !item) {
        return <LoadingSkeleton />;
    }
    
    if (status === 'failed') {
        return <div className="text-center py-20 text-red-500">Error loading item details.</div>;
    }

    const images = [item.image_url, 'https://placehold.co/800x600/e2e8f0/4a5568', 'https://placehold.co/800x600/e2e8f0/4a5568'];

    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <ImageGallery images={images} itemName={item.name} />

                        {/* Item info */}
                        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{item.name}</h1>

                            <div className="mt-3">
                                <h2 className="sr-only">Item information</h2>
                                <p className="text-3xl text-gray-900">${item.price_per_day} / day</p>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-8">
                                <h3 className="text-sm font-medium text-gray-900">Owner Information</h3>
                                <div className="mt-4 flex items-center space-x-3">
                                    <UserCircleIcon className="h-6 w-6 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">{item.owner.full_name}</p>
                                        <p className="text-sm text-gray-500">{item.owner.email}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-10">
                                <BookingCalendar />
                                <Button type="submit" className="w-full mt-6">
                                    Book Now <CalendarIcon className="ml-2 h-5 w-5"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;