import React from "react";
import {
    ProductContainer,
    AddButton,
    Price,
    ButtonPrice,
  } from "./styled";

const ProductList = ({array, showPopUp}) => {
  return (
    <>
      {array?.map((product) => {
        return (
          <ProductContainer key={product.id}>
            <img src={product.photoUrl} alt={product.name} />
            <div>
                {console.log('teste')}
                
              {product.name.length <= 20 && <h4>{product.name}</h4>}
              {product.name.length > 20 && (
                <h4>{product.name.slice(0, 17) + "..."}</h4>
              )}
              <p>{product.description}</p>
              <ButtonPrice>
                <Price>R${product.price}0</Price>
                <AddButton onClick={showPopUp}> adicionar </AddButton>
              </ButtonPrice>
            </div>
          </ProductContainer>
        );
      })}
    </>
  );
};

export default ProductList;
