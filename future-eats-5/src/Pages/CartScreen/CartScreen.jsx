import { useEffect, React, useContext } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Header } from "../../Components/Header/Header";
import {
  Container,
  AddressTitleStyle,
  DivAddress,
  PStyle,
  DivDetail,
  DivPayment,
  RestaurantName,
  DivValue,
  Shipping,
  DivSubTotal,
  PayTitle,
  StyleLine,
  PSubTotal,
  ValueTotal,
  InputStyle,
  Label,
  DivInput,
  Positioner,
} from "./styled";
import { useProfile } from "../../Hooks/useProfile";
import { BaseUrl } from "../../Constants/BaseUrl";
import Footer from "../../Components/Footer/Footer";
import { useForm } from "../../Hooks/useForm";
import { Form } from "../LoginScreen/styled";
import ProductList from "../../Components/ProductList/ProductList";
import { Button } from "../../Components/Button";
import { useOrders } from "../../Hooks/useOrders";
import { CartContext } from "../../Global/context";

export const CartScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const { profileInfo, getProfile } = useProfile();
  const cartString = localStorage.getItem("cart");
  const cartObject = JSON.parse(cartString);
  const localString = localStorage.getItem("restaurantDetail");
  const localObject = JSON.parse(localString);
  const cartMap = cartObject?.map(({ price, quantity }) => {
    return Number(price) * Number(quantity);
  });
  const cartMapOfProducts = cartObject?.map(({ id, quantity }) => {
    return {id, quantity}
  });
  const sum = cartMap?.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const {setCart} = useContext(CartContext)

  const { form, onChangeRadio } = useForm({
    products: cartMapOfProducts,
    paymentMethod: "",
  });

  const { postOrder, getActiveOrder } = useOrders(form);

  useEffect(() => {
    getProfile(`${BaseUrl}profile`, token);
  }, []);
  return (
    <Container>
      <Header text={"Meu carrinho"} />
      <DivAddress>
        <AddressTitleStyle>Endereço cadastrado</AddressTitleStyle>
        <PStyle>{profileInfo?.user?.address}</PStyle>
      </DivAddress>
      {cartObject && cartObject.length !== 0 ? (
        <>
          <DivDetail>
            <RestaurantName>{localObject.name}</RestaurantName>
            <PStyle>{localObject.address}</PStyle>
            <PStyle>{localObject.deliveryTime} min</PStyle>
          </DivDetail>
          <ProductList array={cartObject}></ProductList>
        </>
      ) : (
        <div>Carrinho Vazio</div>
      )}
      <DivValue>
        {cartObject !== null && cartObject !== undefined && cartObject.length > 0 &&
        <Shipping>{"Frete R$"+ localObject.shipping}</Shipping>
        }
        <DivSubTotal>
          <PSubTotal>SUBTOTAL</PSubTotal>
          {!sum ? <ValueTotal>{`R$0`}</ValueTotal>:
          <ValueTotal>{`R$${(sum+localObject.shipping).toString().replace(".",",")}`}</ValueTotal>
          } 
        </DivSubTotal>
      </DivValue>
      <Form onSubmit={(e) => e.preventDefault()}>
        <DivPayment>
          <PayTitle>Forma de pagamento</PayTitle>
          <StyleLine></StyleLine>
          <DivInput>
            <InputStyle
              name="paymentMethod"
              value={"money"}
              onChange={(e) => onChangeRadio(e)}
              type="radio"
            ></InputStyle>
            <Label>Dinheiro</Label>
          </DivInput>
          <DivInput>
            <InputStyle
              name="paymentMethod"
              value={"creditcard"}
              onChange={(e) => onChangeRadio(e)}
              type="radio"
            ></InputStyle>
            <Label>Cartão de crédito</Label>
          </DivInput>
        </DivPayment>
        <Button onClick={() => postOrder(cartObject[0].restaurantId, setCart)}>
          Confirmar
        </Button>
      </Form>
      <Footer active={"cart"} />
    </Container>
  );
};
