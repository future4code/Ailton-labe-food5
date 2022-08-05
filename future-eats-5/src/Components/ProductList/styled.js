import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  width: 96%;
  height: 112px;
  border-radius: 8px;
  margin: 8px 0px;
  border: 1px solid #b8b8b8;
  > img {
    width: 95px;
    height: 110px;
    margin: 0 16px 0 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const ButtonPrice = styled.div`
  position: relative;
  width: 215px;
  height: 68px;
  padding-top: 18%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`;

export const Price = styled.p`
  font-size: 14px;
  color: black;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: -1px;
  right: -1px;
  border: 1.5px solid #5cb646;
  color: #5cb646;
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
`;

export const Title = styled.h1 `
`

export const Description = styled.p`
font-size: 12px;
`