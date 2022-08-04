import React from 'react'
import { Container, LogoImg } from './styled'
import Logo from "../../Assets/logo-future-eats-black.png"

const SplashScreen = ({opacity}) => {
  return (
    <Container opacity={opacity}>
        <LogoImg src={Logo} alt={"logo"}/>
    </Container>
  )
}

export default SplashScreen