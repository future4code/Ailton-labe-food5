import React from "react";
import {
  ProductContainer,
  AddButton,
  Price,
  ButtonPrice,
  NamesContainer,
  Description,
} from "./styled";

const ProductList = ({ array, showPopUp }) => {
  return (
    <>
      {array?.map(({description, id, name, photoUrl, price}) => {
        return (
          <ProductContainer key={id}>
            <img src={photoUrl} alt={name} />
            <div>
              <NamesContainer>
                {name.length <= 20 && <h4>{name}</h4>}
                {name.length > 20 && (
                  <h4>{name.slice(0, 17) + "..."}</h4>
                )}
                <Description>{description}</Description>
              </NamesContainer>
              <ButtonPrice>
                <Price>R${price}0</Price>
                <AddButton onClick={() => showPopUp(description, id, name, photoUrl, price)}>
                  adicionar
                </AddButton>
              </ButtonPrice>
            </div>
          </ProductContainer>
        );
      })}
    </>
  );
};

export default ProductList;
