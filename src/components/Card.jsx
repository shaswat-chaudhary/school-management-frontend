import React from 'react'

export const Card = ({ item, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick(item);
     
        } else {
            console.log('Card clicked:', item);
        }
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={handleClick}
        >
            <div className="h-48 flex items-center justify-center">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=School+Image';
                    }}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-1 truncate">{item.address}</p>
                <p className="text-sm text-gray-500">{item.city}</p>
            </div>
        </div>
    )
}
