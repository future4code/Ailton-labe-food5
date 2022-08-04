import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, quantity, popUp, setPopUp) => {
    const newItem = { id: id, quantity: quantity };

    setCart([...cart, newItem]);
    setPopUp(!popUp);
  };

  

  return { setCart, cart, addToCart };
};
