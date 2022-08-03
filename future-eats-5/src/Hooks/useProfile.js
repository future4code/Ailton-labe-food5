import React, { useState } from "react";
import axios from "axios";

export const useProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    cpf: "",
  });
  const [ordersHistory, setOrdersHistory] = useState(undefined);

  const editProfile = async (url, token, func) => {
    try {
      const response = await axios.get(url, { headers: { auth: token } });
      setProfileInfo(response.data);
      func({
        name: response.data.user.name,
        email: response.data.user.email,
        cpf: response.data.user.cpf
      })
    } catch (error) {
      console.log(error);
      window.alert("Erro na Requisição 1");
    }
  };

  const getProfile = async (url, token) => {
    try {
      const response = await axios.get(url, { headers: { auth: token } });
      setProfileInfo(response.data);

    } catch (error) {
      console.log(error);
      window.alert("Erro na Requisição 1");
    }
  };

  const getOrdersHistory = async (url, token) => {
    try {
      const response = await axios.get(url, { headers: { auth: token } });
      setOrdersHistory(response.data)
    } catch (error) {
      console.log(error);
      window.alert("Erro na Requisição 3");
    }
  }

  const updateProfile = async (url, body, token) => {
    try {
      const response = await axios.put(url, body, {headers: {auth: token}})
    } catch (error) {
      console.log(error)
      window.alert("Erro na requisição put")
    }
  }

 
  return { profileInfo, ordersHistory, getProfile, getOrdersHistory, updateProfile, editProfile };
};
