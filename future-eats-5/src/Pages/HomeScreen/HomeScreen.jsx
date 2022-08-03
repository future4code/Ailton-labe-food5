import React from "react";
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
} from "./styled";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const addressToken = localStorage.getItem("addressToken");
  const data = useRequestData(`${BaseUrl}restaurants`, addressToken);
  const [array, setArray] = useState([]);
  const [searching, setSearching] = useState(false);
  const { form, onChange, cleanFields } = useForm({
    search: "",
  });
  const navigate = useNavigate();
  //  console.log(data)
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

  const categoryRestaurants = array.filter((filteredRestaurant) => {
    return filteredRestaurant.name
      .toLowerCase()
      .includes(form.search.toLowerCase());
  }).map((restaurant) => {
    return (
      <ContainerRestaurant key={restaurant.id}>
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
        <ContainerRestaurant key={restaurant.id} onClick={()=>{GoTo(navigate, `/restaurant/${restaurant.id}`)}}>
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

  return (
    <div>
      <ContainerLupe>
        <label>
          <img src={lupaicon} />
          <input
            name={"search"}
            placeholder="Restaurante"
            value={form.search}
            onChange={onChange}
          />
        </label>
      </ContainerLupe>
      <ContainerCategory>
        <p onClick={unSearch}>Todos</p>
        {data?.map(({ category }) => {
          return <p onClick={() => onClickCategory(category)}>{category}</p>;
        })}
      </ContainerCategory>
      {searching && (
        <ContainerRestaurants>{categoryRestaurants}</ContainerRestaurants>
      )}
      {searching || <ContainerRestaurants>{restaurants}</ContainerRestaurants>}
    </div>
  );
};
