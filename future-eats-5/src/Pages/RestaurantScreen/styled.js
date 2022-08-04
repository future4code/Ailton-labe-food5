import styled from "styled-components";

export const RestaurantCard = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const RestaurantContainer = styled.div`
  margin-left: 17px;
  margin-right: 16px;
  color: #b8b8b8;
  font-family: "Roboto";
  #title {
    color: #5cb646;
  }
  > span {
    display: flex;
    gap: 24px;
  }
`;

export const RestaurantImg = styled.img`
  width: 328px;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  //margin: 17px 16px 12px;
  object-fit: cover;
`;
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
export const Price = styled.p`
  font-size: 14px;
  color: black;
`;
export const ButtonPrice = styled.div`
  width: 215px;
  height: 68px;
  padding-top: 18%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`;
export const BorderTitle = styled.div`
  margin-top: 12px;
  border-bottom: 1px solid black;
  > p {
    color: black;
    font-size: 18px;
    //font-weight: bold;
    padding-bottom: 4px;
  }
`;
export const DivPopUp = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PopUpStyle = styled.div`
  width: 328px;
  height: 216px;
  background-color: blue;
  padding: 0px 16px;
`;

export const TitleStyle = styled.p `

padding-top: 43px;
padding-bottom: 31px;
display: flex;
align-items: center;
justify-content: center;
`
export const DivQuantity = styled.div `
width: 100%;
height: 56px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 16px;
`
export const IconStyle = styled.img `
width: 24px;
`

