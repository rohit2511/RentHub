import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const SortDropdown = () => {
    return (
        <div className="flex items-center">
            <div className="relative inline-block text-left">
                <div>
                    <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                        Sort
                        <ChevronDownIcon className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    </button>
                </div>
                {/* Dropdown menu, show/hide based on menu state. */}
            </div>
        </div>
    );
};

export default SortDropdown;