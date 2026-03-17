import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ADD
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // REMOVE
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // TOTAL
  const total = cart.reduce((acc, item) => acc + item.offerPrice, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
