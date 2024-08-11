import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (title) => {
    setCartItems(cartItems.filter(item => item.title !== title));
  };

  const getCartCount = () => cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};