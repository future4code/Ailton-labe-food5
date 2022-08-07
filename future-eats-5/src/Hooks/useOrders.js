import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../Constants/BaseUrl";
import { GoTo } from "../Functions/GoTo";
import {toast} from "react-toastify"

export const useOrders = (form) => {
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

  const navigate = useNavigate()
  const [order, setOrder] = useState()
  const token = localStorage.getItem("addressToken");
  const postOrder = async (id, setCart) => {
    try {
      const response = await axios.post(`${BaseUrl}restaurants/${id}/order`, form, { headers: { auth: token } });
      const emptyCart = []      
      setCart([])
      localStorage.setItem("cart", JSON.stringify(emptyCart));
      GoTo(navigate, "/home");
    } catch (error) {
      errorNotification('Selecione o método de pagamento')
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
      errorNotification(error.response.data.message)
      }
    };
    }
  return { postOrder, getActiveOrder, order };
};
