import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { BaseUrl } from '../../Constants/BaseUrl'
import { useNavigate, useParams } from 'react-router-dom'
import { useRequestData } from '../../Hooks/useRequestData'
import axios from 'axios'
import { RestaurantCard, RestaurantImg, RestaurantContainer } from './styled'

export const RestaurantScreen = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const pathParams = useParams()
  const addressToken = localStorage.getItem("addressToken");
  const [detail, setDetail] = useState([])
  //const data = useRequestData(`${BaseUrl}restaurants/${pathParams.id}`, addressToken);
  //console.log(data)

  useEffect(() => {
    axios.get(`${BaseUrl}restaurants/${pathParams.id}`,{
      headers: {
        auth: addressToken
      }
    })
    .then((res)=>{
      setDetail(res.data.restaurant)
    })
    .catch((err)=>{
      console.log(err)
    })

  }, [])

  //console.log(detail)

  return (
    <RestaurantCard>
      <h2>Restaurante</h2>
      <RestaurantContainer>
        <RestaurantImg src={detail.logoUrl} alt="logo"/>
        <p id="title">{detail.name}</p>
        <p>{detail.category}</p>
        <span>
          <p>{detail.deliveryTime} min</p>
          <p>Frete R${detail.shipping},00</p>
        </span>
        <p>{detail.address}</p>
      </RestaurantContainer>
    </RestaurantCard>
  )
}
