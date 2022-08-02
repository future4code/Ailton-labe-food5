import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
            alert("Erro na Requisição")
        })

    }, [url])

  return data
}
