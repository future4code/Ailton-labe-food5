import { useEffect, React } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { Header } from '../../Components/Header/Header'
import { Container, AddressTitleStyle, DivAddress, PStyle } from './styled'
import { useProfile } from '../../Hooks/useProfile'
import { BaseUrl } from '../../Constants/BaseUrl'

export const CartScreen = () => {
  useProtectedPage()
  const token = localStorage.getItem("token");
  const { profileInfo, getProfile} = useProfile(); 

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
    </Container>
  );
}
