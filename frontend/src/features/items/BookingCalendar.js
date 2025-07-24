import React from 'react';

const BookingCalendar = () => {
    return (
        <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Dates</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input type="date" id="start-date" name="start-date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                    <input type="date" id="end-date" name="end-date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
            </div>
        </div>
    );
};

export default BookingCalendar;