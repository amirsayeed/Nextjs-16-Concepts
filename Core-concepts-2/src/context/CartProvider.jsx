"use client";
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) =>{
        setCart([...cart, item]);
    }

    const cartInfo = {
        cart,
        addToCart
    }

    return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;