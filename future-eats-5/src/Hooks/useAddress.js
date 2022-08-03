import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoTo } from "../Functions/GoTo";

export const useAddress = () => {
  const navigate = useNavigate();

  const addAddress = async (url, body, token, e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await axios.put(url, body, {
        headers: { auth: token },
      });
      localStorage.setItem("addressToken", response.data.token);
      GoTo(navigate, "/home");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

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
      console.log(error);
    }
  };

  return { addAddress, getAddress };
};
