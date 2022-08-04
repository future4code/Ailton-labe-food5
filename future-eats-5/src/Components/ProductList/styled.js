import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
  display: flex;
  > img {
    width: 95px;
    height: 110px;
    margin: 0 16px 0 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #d8d8d8;
  }
  
  > div > h4 {
    color: #5cb646;
    height: 18px;
    //margin: 14px 49px 8px 16px;
    //font-family: Roboto;
    margin-top: 4px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
  > div > p {
    margin-top: 4px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
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
  color: black;
`;

export const AddButton = styled.button`
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