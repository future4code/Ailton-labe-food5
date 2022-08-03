import React, { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, token) => {
  const [data, setData] = useState([]);
  const getRestaurant = (() => {
    if (token !== null) {
      axios
        .get(url, {headers: {auth: token}})
        .then((res) => {
          setData(res.data.restaurants);
        })
        .catch((err) => {
          console.log(err);
          alert("Erro na Requisição");
        });
    }
  });

  return {getRestaurant, data};
};


