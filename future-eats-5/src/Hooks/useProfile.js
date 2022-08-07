import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
  const navigate = useNavigate()
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
      console.log(error.response.data.message)
    }
  };

  const getProfile = async (url, token) => {
    try {
      const response = await axios.get(url, { headers: { auth: token } });
      setProfileInfo(response.data);

    } catch (error) {
      console.log(error.response.data.message)
    }
  };

  const getOrdersHistory = async (url, token) => {
    if (token !== null) {
      try {
        const response = await axios.get(url, { headers: { auth: token } });
        setOrdersHistory(response.data)
      } catch (error) {
      console.log(error.response.data.message)
      }      
    }
  }

  const updateProfile = async (url, body, token, event) => {
    event.preventDefault()
    try {
      const response = await axios.put(url, body, {headers: {auth: token}})
      window.alert("Cadastro atualizado!")
      navigate(-1)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

 
  return { profileInfo, ordersHistory, getProfile, getOrdersHistory, updateProfile, editProfile };
};
