import { useEffect, React } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Header } from "../../Components/Header/Header";
import { Container, AddressTitleStyle, DivAddress, PStyle, DivDetail, RestaurantName } from "./styled";
import { useProfile } from "../../Hooks/useProfile";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useContext } from "react";
import { CartContext } from "../../Global/context";
import Footer from "../../Components/Footer/Footer";
import ProductList from "../../Components/ProductList/ProductList";

export const CartScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");

  const { profileInfo, getProfile } = useProfile();
  const { cart, setCart } = useContext(CartContext);
  const cartString = localStorage.getItem("cart");
  const cartObject = JSON.parse(cartString);
  const localString = localStorage.getItem("restaurantDetail")
  const localObject = JSON.parse(localString)

  useEffect(() => {
    getProfile(`${BaseUrl}profile`, token);
  }, []);
  console.log(cartObject);

  const subTotal = cartObject.reduce((prevValue, currentValue) => {
    return prevValue.price + currentValue.price
  }
  ) 

  console.log(subTotal)

  return (
    <Container>
      <Header text={"Meu carrinho"} />
      <DivAddress>
        <AddressTitleStyle>Endereço cadastrado</AddressTitleStyle>
        <PStyle>{profileInfo?.user?.address}</PStyle>
      </DivAddress>
      {cartObject ? (
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
      <Footer active={"cart"} />
    </Container>
  );
};
