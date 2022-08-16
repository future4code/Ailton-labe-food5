import React, { useContext } from "react";
import { CartContext } from "../../Global/context";
import {
  ProductContainer,
  AddButton,
  Price,
  ButtonPrice,
  NamesContainer,
  Description,
  Title,
  QuantityContainer,
  RemoveDiv,
  RemoveBtn,
} from "./styled";

const ProductList = ({ array, showPopUp, restaurantName, restaurantId }) => {
  const cartString = localStorage.getItem("cart")
  const cart = JSON.parse(cartString)
  const { setCart } = useContext(CartContext);
  const cartMap = cart?.map(({ id }) => {
    return id;
  });
  const removeFromCart = (id) => {
    const itemIndex = cartMap.indexOf(id);
    const newItem = { ...cart[itemIndex] };
    const removeOne = Number(newItem.quantity - 1);
    newItem.quantity = removeOne;
    const cartFilter = cart.filter((data) => {
      return data.id !== id;
    });
    if (newItem.quantity !== 0) {
      cartFilter.push(newItem);
    }
    setCart(cartFilter);
    const cartString = JSON.stringify(cartFilter)
    localStorage.setItem("cart", cartString)
  };

  return (
    <>
      {array?.map(({ description, id, name, photoUrl, price }) => {
        const priceString = price.toString()
        const priceFormated = priceString.split(".")
        let priceFirstPart = priceFormated[0]        
        let priceSecondPart = priceFormated[1]
        if (priceSecondPart?.length === 1) {
          priceSecondPart = priceSecondPart + "0"
        } else {
          if (priceSecondPart === undefined) {
            priceSecondPart = "00"
          } else {
            priceSecondPart = priceSecondPart.slice(0,2)
          }  
        }
        const indexOfItem = cartMap?.indexOf(id);
        const isInCart = cartMap?.some((data) => {
          return data === id;
        });
        return (
          <ProductContainer key={id}>
            <img src={photoUrl} alt={name} />
            <div>
              <NamesContainer>
                {name.length <= 20 && <Title>{name}</Title>}
                {name.length > 20 && <Title>{name.slice(0, 17) + "..."}</Title>}
                <Description>{description}</Description>
              </NamesContainer>
              {isInCart && (
                <QuantityContainer>
                  <p>{cart[indexOfItem].quantity}</p>
                </QuantityContainer>
              )}
              <ButtonPrice>
                <Price>R${priceFirstPart+","+priceSecondPart}</Price>
                {!isInCart ? (
                  <AddButton
                    color={"#5cb646"}
                    onClick={() =>
                      showPopUp(description, id, name, photoUrl, price, restaurantName, restaurantId)
                    }
                  >
                    adicionar
                  </AddButton>
                ) : (
                  <AddButton
                    color={"#e02020"}
                    onClick={() => removeFromCart(id)}
                  >
                    remover
                  </AddButton>
                )}
              </ButtonPrice>
            </div>
          </ProductContainer>
        );
      })}
    </>
  );
};

export default ProductList;
