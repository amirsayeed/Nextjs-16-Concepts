import React from 'react';

const loading = () => {
    return (
        <div className="grid my-5 grid-cols-3 gap-5">
            {[...Array(12)].map((_, index) => (
                <div key={index} className="bg-gray-200 border border-gray-300 rounded-md p-4">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default loading;