import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { useForm } from "../../Hooks/useForm";
import { BaseUrl } from "../../Constants/BaseUrl";
import lupaicon from "../../Assets/img/lupa.png";
import {
  ContainerLupe,
  ContainerRestaurants,
  ContainerCategory,
  ContainerRestaurant,
  ContainerRedirect,
  Container,
  OrderContainer,
  OrderText,
  Icon,
} from "./styled";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useOrders } from "../../Hooks/useOrders";
import Clock from "../../Assets/clock.png"

export const HomeScreen = () => {
  const token = localStorage.getItem("token");
  const addressToken = localStorage.getItem("addressToken");
  const { data, getRestaurant } = useRequestData(
    `${BaseUrl}restaurants`,
    addressToken
  );
  const [array, setArray] = useState([]);
  const [searching, setSearching] = useState(false);
  const { form, onChange, cleanFields } = useForm({
    search: "",
  });
  const navigate = useNavigate();
  const unSearch = () => {
    setSearching(false);
  };
  const onClickCategory = (id) => {
    setSearching(true);
    const filteredRestaurants = data.filter((filteredCategory) => {
      return filteredCategory.category === id;
    });
    setArray(filteredRestaurants);
  };
  const { order, getActiveOrder } = useOrders();

  const categoryRestaurants = array
    .filter((filteredRestaurant) => {
      return filteredRestaurant.name
        .toLowerCase()
        .includes(form.search.toLowerCase());
    })
    .map((restaurant) => {
      return (
        <ContainerRestaurant
          onClick={() => {
            GoTo(navigate, `/restaurant/${restaurant.id}`);
          }}
          key={restaurant.id}
        >
          <img src={restaurant.logoUrl} alt="foto logo" />
          <div>
            <p id="nameRes">{restaurant.name}</p>
            <span>
              <p>{`${restaurant.deliveryTime} min`}</p>
              <p>{`Frete R$${restaurant.shipping}`}</p>
            </span>
          </div>
        </ContainerRestaurant>
      );
    });

  const restaurants = data
    .filter((filteredRestaurant) => {
      return filteredRestaurant.name
        .toLowerCase()
        .includes(form.search.toLowerCase());
    })
    .map((restaurant) => {
      return (
        <ContainerRestaurant
          key={restaurant.id}
          onClick={() => {
            GoTo(navigate, `/restaurant/${restaurant.id}`);
          }}
        >
          <img src={restaurant.logoUrl} alt="foto logo" />
          <div>
            <p id="nameRes">{restaurant.name}</p>
            <span>
              <p>{`${restaurant.deliveryTime} min`}</p>
              <p>{`Frete R$${restaurant.shipping}`}</p>
            </span>
          </div>
        </ContainerRestaurant>
      );
    });

  useEffect(() => {
    getRestaurant();
    getActiveOrder();
  }, []);

  return (
    <Container>
      <Header text={"FutureEats"} />
      {order && (
        <OrderContainer>
          <Icon src={Clock}/>
          <div>
            <OrderText color="#fff">Pedido em andamento</OrderText>
            <OrderText color="#000">{order?.restaurantName}</OrderText>
            <OrderText fontWeigth="bolder">SUBTOTAL R${order?.totalPrice}</OrderText>
          </div>
        </OrderContainer>
      )}
      {addressToken && (
        <ContainerLupe>
          <label>
            <Icon src={lupaicon} />
            <input
              name={"search"}
              placeholder="Restaurante"
              value={form.search}
              onChange={onChange}
            />
          </label>
        </ContainerLupe>
      )}
      {addressToken && (
        <ContainerCategory>
          <p onClick={unSearch}>Todos</p>
          {data?.map((data, index) => {
            return (
              <p onClick={() => onClickCategory(data.category)} key={index}>
                {data.category}
              </p>
            );
          })}
        </ContainerCategory>
      )}
      {!searching && <ContainerRestaurants>{restaurants}</ContainerRestaurants>}
      {searching && (
        <ContainerRestaurants>{categoryRestaurants}</ContainerRestaurants>
      )}
      {!addressToken && (
        <ContainerRedirect>
          <span>
            Cadastre seu endereço para descobrir restaurantes perto de você
          </span>
          <Button onClick={() => GoTo(navigate, "/address")}>
            Cadastrar endereço
          </Button>
        </ContainerRedirect>
      )}
      <Footer active={"home"} />
    </Container>
  );
};
