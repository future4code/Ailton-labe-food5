import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Header } from "../../Components/Header/Header";
import { Container, DivEdits, DivProfile, DivAddress, ImgStyle, AddressTitleStyle, DivHistoryTitle, Line, CardHistory, DivHistoryCard } from "./styled";
import { useProfile } from "../../Hooks/useProfile";
import { BaseUrl } from "../../Constants/BaseUrl";
import Pencil from '../../Assets/pencil.png'
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";
import EmptyHistory from "../../Assets/emptyhistory.png"

export const ProfileScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token")
  const addressToken = localStorage.getItem("addressToken")
  const { profileInfo, ordersHistory, getProfile, getOrdersHistory } = useProfile(
    `${BaseUrl}profile`,
    `${BaseUrl}profile/address`,
    `${BaseUrl}orders/history`,
    token,
    addressToken
  );
  const navigate = useNavigate()

  useEffect(() => {
    getProfile()
    getOrdersHistory()
  },[])

  console.log(profileInfo, ordersHistory)
  return (
    <Container>
      <Header type={"profile"} />
      <DivEdits>
        <DivProfile>
          <ImgStyle
            onClick={() => GoTo(navigate, "/edit-profile")}
            src={Pencil}
          />
          <p>{profileInfo?.user?.name}</p>
          <p>{profileInfo?.user?.email}</p>
          <p>{profileInfo?.user?.cpf}</p>
        </DivProfile>
        <DivAddress>
          <ImgStyle onClick={() => GoTo(navigate, "/home")} src={Pencil} />
          <AddressTitleStyle>Endereço cadastrado</AddressTitleStyle>
          <p>{profileInfo?.user?.address}</p>
        </DivAddress>
      </DivEdits>
      <DivHistoryTitle>
        <p>Histórico de pedidos</p>
        <Line />
      </DivHistoryTitle>
      <DivHistoryCard>
        {ordersHistory?.orders.length === 0 ? (
          <div>
            <img src={EmptyHistory} />
            <p>Sem pedidos anteriores!</p>
          </div>
        ) : (
          <CardHistory></CardHistory>
        )}
      </DivHistoryCard>
    </Container>
  );
};
