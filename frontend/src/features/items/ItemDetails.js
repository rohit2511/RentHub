import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById, selectItemById, selectItemsStatus } from './itemsSlice';
import Button from '../../components/common/Button';

const ItemDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(selectItemById);
    const status = useSelector(selectItemsStatus);

    useEffect(() => {
        dispatch(fetchItemById(id));
    }, [id, dispatch]);

    if (status === 'loading' || !item) {
        return <div>Loading...</div>;
    }
    
    if (status === 'failed') {
        return <div>Error loading item.</div>;
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{item.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${item.price_per_day} / day</span>
                <Button>Book Now</Button>
            </div>
             <div className="mt-6 text-sm text-gray-500">
                <p>Owner: {item.owner.full_name}</p>
                <p>Contact: {item.owner.email}</p>
            </div>
        </div>
    );
};

export default ItemDetails;
