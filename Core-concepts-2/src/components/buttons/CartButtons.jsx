"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButtons = ({food}) => {
    const {addToCart} = use(CartContext)
    const [inCart, setInCart] = useState(false);
    const handleAddtoCart = () =>{
        setInCart(true);
        addToCart(food);
    }
    return (
        <button onClick={handleAddtoCart} className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-100 disabled:text-gray-400">
            {inCart ? 'Added' : 'Add to Cart'}
        </button>
    );
};

export default CartButtons;