import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useProfile = () => {
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
      errorNotification(error.response.data.message)
    }
  };

  const getProfile = async (url, token) => {
    try {
      const response = await axios.get(url, { headers: { auth: token } });
      setProfileInfo(response.data);
    } catch (error) {
      errorNotification(error.response.data.message)
    }
  };

  const getOrdersHistory = async (url, token) => {
    if (token !== null) {
      try {
        const response = await axios.get(url, { headers: { auth: token } });
        setOrdersHistory(response.data)
      } catch (error) {
      errorNotification(error.response.data.message)
      }      
    }
  }

  const updateProfile = async (url, body, token, event) => {
    event.preventDefault()
    try {
      const response = await axios.put(url, body, {headers: {auth: token}})
      successNotification("Cadastro atualizado!")
      navigate(-1)
    } catch (error) {
      errorNotification(error.response.data.message)
    }
  }

 
  return { profileInfo, ordersHistory, getProfile, getOrdersHistory, updateProfile, editProfile };
};
