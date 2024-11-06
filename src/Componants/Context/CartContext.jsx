import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// CartProvider component to provide cart state and actions
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add product to cart
    const addProduct = (product) => {
        setCart([...cart, product]);
    };

    // Function to remove product from cart
    const removeProduct = (productId) => {
        setCart(cart.filter(product => product.product_id !== productId));
    };

    // Function to clear cart
    const clearCart = () => {
        setCart([]); // Empty the cart
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => {
    return useContext(CartContext);
};
