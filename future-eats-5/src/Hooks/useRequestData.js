import React, { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, token) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const getRestaurant = (() => {
    if (token !== null) {
      axios
        .get(url, {headers: {auth: token}})
        .then((res) => {
          setData(res.data.restaurants);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
          alert("Erro na Requisição");
        });
    }
  });

  return {loading, getRestaurant, data};
};


