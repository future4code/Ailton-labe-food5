import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../Constants/BaseUrl";
import { GoTo } from "../Functions/GoTo";

export const useOrders = (form) => {
  const navigate = useNavigate()
  const [order, setOrder] = useState()
  const token = localStorage.getItem("addressToken");
  const postOrder = async (id, setCart) => {
    try {
      const response = await axios.post(`${BaseUrl}restaurants/${id}/order`, form, { headers: { auth: token } });
      console.log(response)
      const emptyCart = []      
      setCart([])
      localStorage.setItem("cart", JSON.stringify(emptyCart));
      GoTo(navigate, "/home");
    } catch (error) {
      console.log(error);
    }
  };
  const getActiveOrder = async () => {
    if(token !== null) {
      try {
        const response = await axios.get(`${BaseUrl}active-order`, {
          headers: { auth: token },
        });
        setOrder(response.data.order)
      } catch (error) {
        console.log(error);
        alert(error.reponse.data.message);
      }
    };
    }
  return { postOrder, getActiveOrder, order };
};
