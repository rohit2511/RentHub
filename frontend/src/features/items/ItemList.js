import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, selectAllItems, selectItemsStatus } from './itemsSlice';
import ItemCard from './ItemCard';

const ItemList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectAllItems);
    const status = useSelector(selectItemsStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItems());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading items...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Available Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
