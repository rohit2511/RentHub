import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const SearchBar = () => {
    return (
        <div className="mt-10 max-w-3xl mx-auto w-full">
            <form className="bg-white rounded-full shadow-2xl p-2 flex items-center">
                <div className="flex-1">
                    <input 
                        className="w-full bg-transparent px-6 py-3 text-gray-700 placeholder-gray-500 focus:outline-none" 
                        type="text" 
                        placeholder="What are you looking to rent?"
                    />
                </div>
                <Button className="rounded-full !py-3 !px-6">
                    <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                    Search
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;