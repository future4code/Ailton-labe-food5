import { useState } from "react";
import {toast} from "react-toastify"

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity, popUp, setPopUp, setQuantity, detail) => {
    const errorNotification = (message) => {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        draggable: true,
        });
    }
  
    const successNotification = (message) => {
      toast.success(message, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        draggable: true,
        });
    }
  
    const infoNotification = (message) => {
      toast.info(message, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        draggable: true,
        });
    }
    successNotification(`${product.name} foi adicionado ao seu carrinho`)
    setQuantity(1)
    const newObj = {...product, quantity}
    setCart([...cart, newObj]);
    localStorage.setItem("cart", JSON.stringify([...cart, newObj]))
    localStorage.setItem("restaurantDetail", JSON.stringify(detail))
    setPopUp(!popUp);
  };

  return { setCart, cart, addToCart };
};
