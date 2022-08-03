import React from "react";
import { ArrowImage, Container, Title } from "./styled";
import Back from "../../Assets/back.png";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      {props.type === "profile" ? (
        <Title>Meu perfil</Title>
      ) : (
        <ArrowImage src={Back} onClick={() => GoTo(navigate, "/")} />
      )}
    </Container>
  );
};
