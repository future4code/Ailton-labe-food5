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
  OrderDate,
  TitleOrder,
  PSubTotal,
  DivCard,
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
import Footer from "../../Components/Footer/Footer";
import { toast } from "react-toastify";

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

    const successNotification = () => {
      toast.info("Você deslogou.", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        draggable: true,
      });
    };

  const appLogout = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("addressToken");
    window.localStorage.removeItem("cart")
    window.localStorage.removeItem("restaurantDetail");
    successNotification()
    GoTo(navigate, "/")
    
  }

  return (
    <Container>
      <Header text={"Meu Perfil"} arrow={false} logout={true} appLogout={appLogout}/>
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
          <DivCard>
            {ordersHistory?.orders.map((data, index) => {
              const dateFormated = Date(data.createdAt).split(" ");
              const priceFormated = data.totalPrice.toString().replace(".", ",").split(",")
              let price = "";
              if (priceFormated[1]?.length === 1) {
                price = priceFormated[1] + "0"
              } else {
                if (priceFormated[1] === undefined) {
                  price = "00"
                } else {
                  price = priceFormated[1].slice(0,2)
                }  
              }

              let month = "";
              switch (dateFormated[1]) {
                case "Jan":
                  month = "Janeiro";
                  break;
                case "Feb":
                  month = "Fevereiro";
                  break;
                case "Mar":
                  month = "Março";
                  break;
                case "Apr":
                  month = "Abril";
                  break;
                case "May":
                  month = "Maio";
                  break;
                case "Jun":
                  month = "Junho";
                  break;
                case "Jul":
                  month = "Julho";
                  break;
                case "Aug":
                  month = "Agosto";
                  break;
                case "Sep":
                  month = "Setembro";
                  break;
                case "Oct":
                  month = "Outubro";
                  break;
                case "Nov":
                  month = "Novembro";
                  break;
                case "Dec":
                  month = "Dezembro";
                  break;
              }

              return (
                <CardHistory key={index}>
                  <TitleOrder>{data.restaurantName}</TitleOrder>
                  <OrderDate>{`${dateFormated[2]} ${month.toLowerCase()} ${dateFormated[3]}`}</OrderDate>
                  <PSubTotal>
                    SUBTOTAL R${priceFormated[0]+ "," + price}
                  </PSubTotal>
                </CardHistory>
              );
            })}
          </DivCard>
        )}
      </DivHistoryCard>
      <Footer active={"profile"} />
    </Container>
  );
};
