import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, quantity) => {
    const newItem = { id: id, quantity: quantity };

    setCart([...cart, newItem]);
  };

  

  return { setCart, cart, addToCart };
};
