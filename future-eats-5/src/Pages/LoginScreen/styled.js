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
`;
export const A = styled.a`
cursor: pointer;
`