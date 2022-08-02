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

export const HomeScreen = () => {
  const data = useRequestData(`${BaseUrl}restaurants`);
  const [array, setArray] = useState([]);
  const [searching, setSearching] = useState(false);
  const { form, onChange, cleanFields } = useForm({
    search: "",
  });
  //  console.log(data)

  const onClickCategory = (id) => {
    setSearching(true);
    const filteredRestaurants = data.filter((filteredCategory) => {
      return filteredCategory.category === id;
    });
    setArray(filteredRestaurants)
  };

  const categoryRestaurants = array.map((restaurant) => {
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
        <p>Todos</p>
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
