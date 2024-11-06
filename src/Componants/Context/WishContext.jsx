// src/Components/Context/WishContext.jsx
import React, { createContext, useContext, useState } from 'react';

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addWishProduct = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  return (
    <WishContext.Provider value={{ wishlist, addWishProduct }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWishlist = () => useContext(WishContext);
