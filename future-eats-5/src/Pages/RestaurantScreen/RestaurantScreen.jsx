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
import { Loading } from "../../Components/Loading/Loading";

export const RestaurantScreen = () => {
  useProtectedPage();
  const [loading, setLoading] = useState(true)
  const pathParams = useParams();
  const addressToken = localStorage.getItem("addressToken");
  const [detail, setDetail] = useState([]);
  const { addToCart, cart, setCart } = useContext(CartContext);
  const [popUp, setPopUp] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const restaurantLocalStorage = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    axios
      .get(`${BaseUrl}restaurants/${pathParams.id}`, {
        headers: {
          auth: addressToken,
        },
      })
      .then((res) => {
        setDetail(res.data.restaurant);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }, []);

  const showPopUp = (
    description,
    id,
    name,
    photoUrl,
    price,
    restaurantNameProp,
    restaurantId
  ) => {
    if (
      restaurantLocalStorage === null ||
      restaurantLocalStorage[0]?.restaurantName === restaurantNameProp ||
      restaurantLocalStorage.length === 0
    ) {
      setPopUp(!popUp);
      setProduct({
        description: description,
        id: id,
        name: name,
        photoUrl: photoUrl,
        price: Number(price),
        restaurantName: restaurantNameProp,
        restaurantId: restaurantId
      });
    } else {
      alert("Ele nao deixa");
    }
  };

  const onChangeQuant = (event) => {
    setQuantity(Number(event.target.value));
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
              onClick={() =>
                addToCart(
                  product,
                  quantity,
                  popUp,
                  setPopUp,
                  setQuantity,
                  detail
                )
              }
            >
              ADICIONAR AO CARRINHO
            </AddStyle>
          </PopUpStyle>
        </DivPopUp>
      )}
      <Header text={detail.name} arrow={true} />
      {!loading ?      
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
          <ProductList
            showPopUp={showPopUp}
            array={mainCourse}
            restaurantName={detail.name}
            restaurantId={detail.id}
          />
        </div>
        {entry?.length !== 0 && (
          <div>
            <BorderTitle>
              <p>Acompanhamentos</p>
            </BorderTitle>
            <ProductList
              showPopUp={showPopUp}
              array={entry}
              restaurantName={detail.name}
              restaurantId={detail.id}
            />
          </div>
        )}
        {drink?.length !== 0 && (
          <div>
            <BorderTitle>
              <p>Bebidas</p>
            </BorderTitle>
            <ProductList
              showPopUp={showPopUp}
              array={drink}
              restaurantName={detail.name}
              restaurantId={detail.id}
            />
          </div>
        )}
      </RestaurantContainer>
      : 
      <Loading/>}
    </RestaurantCard>
  );
};
