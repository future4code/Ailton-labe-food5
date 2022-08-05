import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity, popUp, setPopUp, setQuantity, detail) => {
    setQuantity(1)
    const newObj = {...product, quantity}
    setCart([...cart, newObj]);
    localStorage.setItem("cart", JSON.stringify([...cart, newObj]))
    localStorage.setItem("restaurantDetail", JSON.stringify(detail))
    setPopUp(!popUp);
  };

  return { setCart, cart, addToCart };
};
