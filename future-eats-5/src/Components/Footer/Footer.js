import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import { ContainerFooter } from "./styled"
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()

    return (
        <ContainerFooter>
            <FontAwesomeIcon onClick={() => navigate("/home")} className="icon" icon={faHouse} />
            <FontAwesomeIcon onClick={() => navigate("/cart")} className="icon" icon={faCartShopping} />
            <FontAwesomeIcon onClick={() => navigate("/profile")} className="icon" icon={faUser} />
        </ContainerFooter>
    )
}
export default Footer