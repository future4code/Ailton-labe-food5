import styled from "styled-components";

export const Container = styled.main`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #000;
position: fixed;
z-index: 1;
transition: 1s ease;
opacity: ${props=>props.opacity};
`

export const LogoImg = styled.img`
width: 35%;
`