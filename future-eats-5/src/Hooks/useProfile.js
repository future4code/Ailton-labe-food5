import React, { useState } from "react";
import axios from "axios";

export const useProfile = (url1, url2, url3, token, addressToken) => {
  const [profileInfo, setProfileInfo] = useState(undefined);
  const [ordersHistory, setOrdersHistory] = useState(undefined);
  
  const getProfile = async () => {
    try {
      const response = await axios.get(url1, { headers: { auth: token } });
      setProfileInfo(response.data);
    } catch (error) {
      console.log(error);
      window.alert("Erro na Requisição 1");
    }
  };

//   const getFullAddress = async () => {
//     try {
//         const response = await axios.get(url2, { headers: { auth: token } });
//         setData(response.data)
//     } catch (error) {
//         console.log(error);
//         window.alert("Erro na Requisição 2");
//     }
//   }

  const getOrdersHistory = async () => {
    try {
      const response = await axios.get(url3, { headers: { auth: addressToken } });
      setOrdersHistory(response.data)
    } catch (error) {
      console.log(error);
      window.alert("Erro na Requisição 3");
    }
  }

 
  return { profileInfo, ordersHistory, getProfile, getOrdersHistory };
};
