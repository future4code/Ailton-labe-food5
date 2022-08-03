import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { BaseUrl } from '../../Constants/BaseUrl'
import { useNavigate, useParams } from 'react-router-dom'
import { useRequestData } from '../../Hooks/useRequestData'
import axios from 'axios'
import { RestaurantCard, RestaurantImg, RestaurantContainer, ProductContainer, AddButton, Price, ButtonPrice, BorderTitle } from './styled'

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

  const mainCourse = detail?.products?.filter((i)=>{
      return i.category !== "Acompanhamento" && i.category !== "Bebida" 
  })
  
  const drink = detail?.products?.filter((i)=>{
    return  i.category === "Bebida" 
})
  const entry = detail?.products?.filter((i)=>{
    return i.category === "Acompanhamento" 
  })


  return (
    <RestaurantCard>      
      <RestaurantContainer>
        <RestaurantImg src={detail.logoUrl} alt="logo"/>
        <p id="title">{detail.name}</p>
        <p>{detail.category}</p>
        <span>
          <p>{detail.deliveryTime} min</p>
          <p>Frete R${detail.shipping},00</p>
        </span>
        <p>{detail.address}</p>
        <div>
          <BorderTitle>
            <p>Principais</p>
          </BorderTitle>
          {mainCourse?.map((product)=>{
            return(
              <ProductContainer key={product.id}>
                <img src={product.photoUrl} alt={product.name}/> 
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <ButtonPrice>
                    <Price>R${product.price}0</Price>
                    <AddButton> adicionar </AddButton>
                  </ButtonPrice>
                </div>
              </ProductContainer>
            )
          })}
        </div>
        <div>
          <BorderTitle>
            <p>Acompanhamentos</p>
          </BorderTitle>
          {entry?.map((product)=>{
            return(
              <ProductContainer key={product.id}>
                <img src={product.photoUrl} alt={product.name}/> 
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <ButtonPrice>
                    <Price>R${product.price}</Price>
                    <AddButton> adicionar </AddButton>
                  </ButtonPrice>
                </div>
              </ProductContainer>
            )
          })}
        </div>
        <div>
          <BorderTitle>
            <p>Bebidas</p>
          </BorderTitle>
          {drink?.map((product)=>{
            return(
              <ProductContainer key={product.id}>
                <img src={product.photoUrl} alt={product.name}/> 
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <ButtonPrice>
                    <Price>R${product.price}0</Price>
                    <AddButton> adicionar </AddButton>
                  </ButtonPrice>
                </div>
              </ProductContainer>
            )
          })}
        </div>
      </RestaurantContainer>
    </RestaurantCard>
  )
}
