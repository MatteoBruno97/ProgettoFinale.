import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider value={{cartItems, setCartItems, count, setCount}}>
      {props.children}
    </CartContext.Provider>
  );
};
