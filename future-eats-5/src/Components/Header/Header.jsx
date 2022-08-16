import React from "react";
import { ArrowImage, Container, Title, LogoutImage } from "./styled";
import Back from "../../Assets/back.png";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '../../Assets/logouteats2.png'

export const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>{props.text}</Title>
      {props.arrow && <ArrowImage src={Back} onClick={() => navigate(-1)} />}
      {props.logout && <LogoutImage src={LogoutIcon} onClick={props.appLogout}/>}
    </Container>
  );
};
