import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity, popUp, setPopUp, setQuantity) => {
    setQuantity(1)
    const newObj = {...product, quantity}
    setCart([...cart, newObj]);
    setPopUp(!popUp);
  };

  return { setCart, cart, addToCart };
};
