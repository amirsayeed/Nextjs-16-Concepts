import Link from 'next/link';
import React from 'react';

const FoodCard = ({food}) => {
    const {title, foodImg, price, category, id} = food;
    return (
        <div className ="border rounded-xl p-4 shadow hover:shadow-lg">
         <img src={foodImg} alt={title} className="w-full h-44 object-cover rounded-lg" />           
        
            <div className="mt-3">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-500">{category}</p>
                <p className="text-xl font-bold mt-2">{price}৳</p>
                <div className="flex justify-between gap-3 mt-4">
                <button className="btn">Add to Cart</button>
                <Link
                href={`/foods/${id}`}
                className="btn"
                >
                View Details
                </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;