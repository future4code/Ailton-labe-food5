import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivLogo = styled.div`
padding: 0 128px;
padding-top: 88px;
padding-bottom: 28px;
`
export const LogoStyle = styled.img`
width: 100%;
`
export const Title = styled.p`
  user-select: none;
  font-size: 16px;
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  padding-top: 8px;
  font-size: 16px;
  font-family: Roboto;
  user-select: none;
`;
export const A = styled.a`
cursor: pointer;
user-select: none;
`

export const PasswordContainer = styled.div`
width: 100%;
max-width: 480px;
height: 60px;
position: relative;
display: flex;
align-items: center
`

export const EyeImage = styled.img`
width: 24px;
height: 24px;
position: absolute;
right: 5%;
`