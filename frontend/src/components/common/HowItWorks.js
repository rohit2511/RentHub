import React from 'react';
import { MagnifyingGlassIcon, CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const steps = [
    {
        name: 'Find Your Item',
        description: 'Browse our extensive catalog or search for the specific gear you need for your next adventure or project.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Book Your Dates',
        description: 'Select your desired rental dates using our simple calendar and confirm your booking in just a few clicks.',
        icon: CalendarDaysIcon,
    },
    {
        name: 'Enjoy!',
        description: 'Pick up your item from the owner or have it delivered. Enjoy your rental and return it when you\'re done.',
        icon: CheckCircleIcon,
    },
];

const HowItWorks = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">How It Works</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Rent in three simple steps
                    </p>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.name} className="pt-6">
                                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{step.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;