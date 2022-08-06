import axios from "axios";
import React from "react";
import { BaseUrl } from "../Constants/BaseUrl";

export const useOrders = (form) => {
  const token = localStorage.getItem("addressToken");
  const postOrder = async (id) => {
    try {
      const response = await axios.post(
        `${BaseUrl}restaurants/${id}/order`,
        form,
        { headers: { auth: token } }
      );
      localStorage.removeItem("cart");
    } catch (error) {
      console.log(alert);
      alert(error.reponse.data.message);
    }
  };
  const getActiveOrder = async () => {
    try {
      const response = await axios.get(`${BaseUrl}active-order`, {
        headers: { auth: token },
      });
    //   console.log(response)
    } catch (error) {
      console.log(alert);
      alert(error.reponse.data.message);
    }
  };
  return { postOrder, getActiveOrder };
};
