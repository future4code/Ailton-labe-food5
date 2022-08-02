import React from "react";
import { useRequestData } from "../../Hooks/useRequestData";
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
  console.log(data);

  const restaurants = data.map((restaurant) => {
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
          <input placeholder="Restaurante" />
        </label>
      </ContainerLupe>
      <ContainerCategory>
        {data?.map(({category}) => {
          return <p>{category}</p>
        })}
      </ContainerCategory>
      <ContainerRestaurants>{restaurants}</ContainerRestaurants>
    </div>
  );
};
