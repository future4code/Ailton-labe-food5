import React from "react";
import { ArrowImage, Container, Title } from "./styled";
import Back from "../../Assets/back.png";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>{props.text}</Title>
      {props.arrow && <ArrowImage src={Back} onClick={() => navigate(-1)} />}
    </Container>
  );
};
