import { useEffect, React } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Header } from "../../Components/Header/Header";
import { Container, AddressTitleStyle, DivAddress, PStyle } from "./styled";
import { useProfile } from "../../Hooks/useProfile";
import { BaseUrl } from "../../Constants/BaseUrl";
import Footer from "../../Components/Footer/Footer";

export const CartScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
<<<<<<< HEAD
  const { profileInfo, getProfile} = useProfile(); 
  const { cart } = useContext(CartContext);
=======
  const { profileInfo, getProfile } = useProfile();
>>>>>>> 02bfe9eaa03dea64b9e912cd83d7397f407c6b35

  useEffect(() => {
    getProfile(`${BaseUrl}profile`, token);
  }, []);
  console.log(cart)
  return (
    <Container>
      <Header text={"Meu carrinho"} />
      <DivAddress>
        <AddressTitleStyle>Endereço cadastrado</AddressTitleStyle>
        <PStyle>{profileInfo?.user?.address}</PStyle>
      </DivAddress>
      <Footer active={"cart"} />
    </Container>
  );
};
