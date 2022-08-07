import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../Constants/BaseUrl";
import { GoTo } from "../Functions/GoTo";

export const useAddress = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({})
  const addAddress = async (url, body, token, e) => {
    e.preventDefault();
    try {
      const response = await axios.put(url, body, {
        headers: { auth: token },
      });
      localStorage.setItem("addressToken", response.data.token);
      GoTo(navigate, "/home");
    } catch (error) {
      console.log(error.response.data.message)
    }
  };

  const defineAddress = async(url, body, token) => {
    try {
      const response = await axios.put( url, body, {headers: {auth: token}} )
      localStorage.setItem("addressToken", response.data.token)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const getAddress = async (url, token, func) => {
    try {
      const response = await axios.get(url, { headers: { auth: token } });
      const { city, street, state, complement, neighbourhood, number } =
        response.data.address;
      func({
        street: street,
        number: number,
        neighbourhood: neighbourhood,
        city: city,
        state: state,
        complement: complement,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getFullAddress = async(url, token, setLoading, body) => {
    try {
      const response = await axios.get(url, {headers: {auth: token}})
      setAddress(response.data.address)
      defineAddress(`${BaseUrl}address`, body, token)
    } catch (error) {
      console.log(error.response.data.message)
      setLoading(false)
    }
  }

  return { addAddress, getAddress, getFullAddress, address };
};
