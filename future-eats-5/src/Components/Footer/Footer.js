import React from "react";
import { ContainerFooter, Icon, Positioner } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import HomeGray from "../../Assets/home-gray.png";
import HomeGreen from "../../Assets/home-green.png";
import CartGray from "../../Assets/cart-gray.png";
import CartGreen from "../../Assets/cart-green.png";
import ProfileGray from "../../Assets/profile-gray.png";
import ProfileGreen from "../../Assets/profile-green.png";
const Footer = ({ active }) => {
  const navigate = useNavigate();
  return (
      <ContainerFooter>
        {active === "home" ? (
          <Icon
            src={HomeGreen}
            onClick={() => navigate("/home")}
            alt={"home green"}
          />
        ) : (
          <Icon
            src={HomeGray}
            onClick={() => navigate("/home")}
            alt={"home gray"}
          />
        )}
        {active === "cart" ? (
          <Icon
            src={CartGreen}
            onClick={() => navigate("/cart")}
            alt={"cart green"}
          />
        ) : (
          <Icon
            src={CartGray}
            onClick={() => navigate("/cart")}
            alt={"cart gray"}
          />
        )}
        {active === "profile" ? (
          <Icon
            src={ProfileGreen}
            onClick={() => navigate("/profile")}
            alt={"profile green"}
          />
        ) : (
          <Icon
            src={ProfileGray}
            onClick={() => navigate("/profile")}
            alt={"profile gray"}
          />
        )}
      </ContainerFooter>
  );
};
export default Footer;
