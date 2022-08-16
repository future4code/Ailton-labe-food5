import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 112px;
  border-radius: 8px;
  margin: 8px 0px;
  border: 1px solid #b8b8b8;
  gap: 16px;
  > img {
    width: 96px;
    height: 112px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const ButtonPrice = styled.div`
  width: 215px;
  height: 68px;
  padding-top: 18%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: 15px;
  color: black;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: -1px;
  right: -1px;
  border: 1.5px solid ${props=> props.color};
  color: ${props=> props.color};
  background-color: white;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 30px;
  width: 80px;
  font-size: 12px;
  text-align: center;
  margin-right: 0;
  margin-bottom: 0;
`;

export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 0px;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1 `
font-size: 1rem;
color: #5cb646;
`

export const Description = styled.p`
font-size: 12px;
color: #b8b8b8;
`

export const QuantityContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: -1px;
top: -1px;
border-radius: 0px 8px 0px 8px;
width: 33px;
height: 33px;
border: 1px solid #5cb646;
color: #5cb646;
`