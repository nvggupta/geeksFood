import React from 'react';
import { IoIosStar } from "react-icons/io";

function RestaurantCard({ code, name, rating, address, cuisine }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<IoIosStar key={i} className="text-yellow-500" />);
    }

    return (
        <div className="w-4/5 bg-white rounded-lg shadow-md overflow-hidden m-4">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">Code: <span className="font-medium">{code}</span></p>
                <div className="flex items-center mb-4">
                    {stars}
                </div>
                <p className="text-gray-700 mb-4">Address: <span className="font-medium">{address}</span></p>
                <p className="text-gray-700 mb-4">cousine: <span className="font-medium">{cuisine}</span></p>
                <a href="https://restaurant-menu-link.com" className="text-blue-500 hover:text-blue-700">Visit Menu</a>
            </div>
        </div>
    );
}

export default RestaurantCard;

