import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../Global/context";
import DropDown from '../../Assets/dropdown1.png'
import {
  RestaurantCard,
  RestaurantImg,
  RestaurantContainer,
  ProductContainer,
  DivQuantity,
  AddButton,
  PopUpStyle,
  DivPopUp,
  TitleStyle,
  IconStyle,
  Price,
  ButtonPrice,
  BorderTitle,
} from "./styled";

export const RestaurantScreen = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const pathParams = useParams();
  const addressToken = localStorage.getItem("addressToken");
  const [detail, setDetail] = useState([]);
  const { addToCart, cart, setCart } = useContext(CartContext);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    axios
      .get(`${BaseUrl}restaurants/${pathParams.id}`, {
        headers: {
          auth: addressToken,
        },
      })
      .then((res) => {
        setDetail(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showPopUp = () => {
    setPopUp(true);
  };

  const mainCourse = detail?.products?.filter((i) => {
    return i.category !== "Acompanhamento" && i.category !== "Bebida";
  });

  const drink = detail?.products?.filter((i) => {
    return i.category === "Bebida";
  });
  const entry = detail?.products?.filter((i) => {
    return i.category === "Acompanhamento";
  });

  return (
    <RestaurantCard>
      {popUp && (
        <DivPopUp>
          <PopUpStyle>
            <TitleStyle>Selecione a quantidade desejada</TitleStyle>
            <DivQuantity>
              <p>0</p>
              <IconStyle src={DropDown}/>
            </DivQuantity>
          </PopUpStyle>
        </DivPopUp>
      )}
      <RestaurantContainer>
        <RestaurantImg src={detail.logoUrl} alt="logo" />
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
          {mainCourse?.map((product) => {
            return (
              <ProductContainer key={product.id}>
                <img src={product.photoUrl} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <ButtonPrice>
                    <Price>R${product.price}0</Price>
                    <AddButton onClick={showPopUp}> adicionar </AddButton>
                  </ButtonPrice>
                </div>
              </ProductContainer>
            );
          })}
        </div>
        {entry?.length !== 0 && (
          <div>
            <BorderTitle>
              <p>Acompanhamentos</p>
            </BorderTitle>
            {entry?.map((product) => {
              return (
                <ProductContainer key={product.id}>
                  <img src={product.photoUrl} alt={product.name} />
                  <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <ButtonPrice>
                      <Price>R${product.price}</Price>
                      <AddButton onClick={() => addToCart(product.id, 1)}>
                        {" "}
                        adicionar{" "}
                      </AddButton>
                    </ButtonPrice>
                  </div>
                </ProductContainer>
              );
            })}
          </div>
        )}
        {drink?.length !== 0 && (
          <div>
            <BorderTitle>
              <p>Bebidas</p>
            </BorderTitle>
            {drink?.map((product) => {
              return (
                <ProductContainer key={product.id}>
                  <img src={product.photoUrl} alt={product.name} />
                  <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <ButtonPrice>
                      <Price>R${product.price}0</Price>
                      <AddButton onClick={() => addToCart(product.id, 1)}>
                        {" "}
                        adicionar{" "}
                      </AddButton>
                    </ButtonPrice>
                  </div>
                </ProductContainer>
              );
            })}
          </div>
        )}
      </RestaurantContainer>
      {console.log(cart)}
    </RestaurantCard>
  );
};
