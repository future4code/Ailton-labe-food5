import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Header } from "../../Components/Header/Header";
import {
  Container,
  DivEdits,
  DivProfile,
  DivAddress,
  ImgStyle,
  AddressTitleStyle,
  DivHistoryTitle,
  Line,
  CardHistory,
  DivHistoryCard,
} from "./styled";
import Pencil from "../../Assets/pencil.png";
import EmptyHistory from "../../Assets/emptyhistory.png";
import { useProfile } from "../../Hooks/useProfile";
import { BaseUrl } from "../../Constants/BaseUrl";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";

export const ProfileScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const addressToken = localStorage.getItem("addressToken");
  const { profileInfo, ordersHistory, getProfile, getOrdersHistory } =
    useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile(`${BaseUrl}profile`, token);
    getOrdersHistory(`${BaseUrl}orders/history`, addressToken);
  }, []);
  return (
    <Container>
      <Header text={"Meu Perfil"} arrow={false} />
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
          <ImgStyle onClick={() => GoTo(navigate, "/address")} src={Pencil} />
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
          <>
            <img src={EmptyHistory} />
            <p>Sem pedidos anteriores!</p>
          </>
        ) : (
          <CardHistory></CardHistory>
        )}
      </DivHistoryCard>
    </Container>
  );
};
