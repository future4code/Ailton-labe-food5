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
} from "./styled";
import { useProfile } from "../../Hooks/useProfile";
import { BaseUrl } from "../../Constants/BaseUrl";
import Footer from "../../Components/Footer/Footer";
import { useForm } from "../../Hooks/useForm";
import { Form } from "../LoginScreen/styled";
import ProductList from "../../Components/ProductList/ProductList";
import { Button } from "../../Components/Button";

export const CartScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const { profileInfo, getProfile } = useProfile();
  const cartString = localStorage.getItem("cart");
  const cartObject = JSON.parse(cartString);
  const localString = localStorage.getItem("restaurantDetail");
  const localObject = JSON.parse(localString);
  const { form, onChange, onChangeRadio, cleanFields } = useForm({
    products: [{ id: "", quantity: 0 }],
    paymentMethod: "",
  });

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
        <div>tem nada aqui nao</div>
      )}

      <DivValue>
        <Shipping>Frete</Shipping>
        <DivSubTotal>
          <PSubTotal>SUBTOTAL</PSubTotal>
          <ValueTotal>soma</ValueTotal>
        </DivSubTotal>
      </DivValue>
      <Form>
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
        {console.log(form)}
        <Button>Confirmar</Button>
      </Form>
      <Footer active={"cart"} />
    </Container>
  );
};
