import React from 'react';

const FilterSidebar = () => {
    // Placeholder data
    const categories = ['Cameras', 'Camping', 'Suits', 'Jewellery', 'Electronics'];

    return (
        <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                    <span className="font-medium text-gray-900">Category</span>
                </h3>
                <div className="pt-6">
                    <div className="space-y-4">
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-center">
                                <input id={`filter-category-${index}`} name="category[]" defaultValue={category} type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor={`filter-category-${index}`} className="ml-3 text-sm text-gray-600">{category}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Add more filters like price range, location etc. here */}
        </form>
    );
};

export default FilterSidebar;