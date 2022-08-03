import React, { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, token) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (token !== null) {
      axios
        .get(url, {headers: {auth: token}})
        .then((res) => {
          setData(res.data.restaurants);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
          alert("Erro na Requisição");
        });
    }
  }, [url]);

  return data;
};
