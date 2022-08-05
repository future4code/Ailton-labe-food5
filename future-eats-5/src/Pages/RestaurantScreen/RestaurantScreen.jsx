import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../Global/context";
import DropDown from "../../Assets/dropdown1.png";
import {
  RestaurantCard,
  RestaurantImg,
  RestaurantContainer,
  Options,
  DivQuantity,
  PopUpStyle,
  DivPopUp,
  TitleStyle,
  AddStyle,
  BorderTitle,
} from "./styled";
import ProductList from "../../Components/ProductList/ProductList";
import { Header } from "../../Components/Header/Header";

export const RestaurantScreen = () => {
  useProtectedPage();
  const pathParams = useParams();
  const addressToken = localStorage.getItem("addressToken");
  const [detail, setDetail] = useState([]);
  const { addToCart, cart, setCart } = useContext(CartContext);
  const [popUp, setPopUp] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

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

  const showPopUp = (description, id, name, photoUrl, price) => {
    setPopUp(!popUp);
    setProduct({
      description: description,
      id: id,
      name: name,
      photoUrl: photoUrl,
      price: price,
    });
  };

  const onChangeQuant = (event) => {
    setQuantity(event.target.value);
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
            <DivQuantity value={quantity} onChange={onChangeQuant}>
              {Array.from({ length: 10 }).map((data, index) => {
                return <Options key={index}>{index + 1}</Options>;
              })}
            </DivQuantity>
            <AddStyle
              onClick={() => addToCart(product, quantity, popUp, setPopUp, setQuantity)}
            >
              ADICIONAR AO CARRINHO
            </AddStyle>
          </PopUpStyle>
        </DivPopUp>
      )}
      <Header text={detail.name} arrow={true} />
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
          <ProductList showPopUp={showPopUp} array={mainCourse} />
        </div>
        {entry?.length !== 0 && (
          <div>
            <BorderTitle>
              <p>Acompanhamentos</p>
            </BorderTitle>
            <ProductList showPopUp={showPopUp} array={entry} />
          </div>
        )}
        {drink?.length !== 0 && (
          <div>
            <BorderTitle>
              <p>Bebidas</p>
            </BorderTitle>
            <ProductList showPopUp={showPopUp} array={drink} />
          </div>
        )}
      </RestaurantContainer>
    </RestaurantCard>
  );
};
