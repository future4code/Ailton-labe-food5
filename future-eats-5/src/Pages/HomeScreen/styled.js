import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 57px;
`

export const ContainerLupe = styled.div `
    width: 360px;
    margin: 8px auto;
    display: flex;
    justify-content: center;
    label {
        position: relative;
        input {
            width: 328px;
            padding: 10px 10px 10px 30px;
            outline: none;
            border: 1px solid #b8b8b8;
        }
        img {
            position: absolute;
            top: 8px;
            left: 3px;
        }
    }
    img {
      position: absolute;
      top: 8px;
      left: 3px;
    }
`;

export const ContainerCategory = styled.div`
  display: flex;
  overflow: auto;
  width: 328px;
  margin: auto;
  padding: 8px;
  gap: 12px;
  ::-webkit-scrollbar {
    display: none;
  }
  p:active {
    color: #5cb646;
  }
`;

export const ContainerRestaurants = styled.div`
  width: 360px;
  margin: auto;
  /* border: 1px solid black; */
`;

export const ContainerRestaurant = styled.div`
  width: 328px;
  height: 188px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 10px auto;
  img {
    width: 326px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  div {
    margin: 0 8px 8px 8px;
    width: 94%;
    #nameRes {
      color: #5cb646;
      font-weight: bold;
      margin: 8px 0;
    }
    span {
      display: flex;
      justify-content: space-between;
      color: #b8b8b8;
    }
  }
`;

export const ContainerRedirect = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
  width: 328px;
  margin: 164px auto;
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 24px;
  background-color: #5cb646;
  width: 100%;
  height: 118px;
  position: fixed;
  bottom: 49px;
`;

export const OrderText = styled.p`
font-size: 18px;
color: ${props=> props.color};
font-weight: ${props=> props.fontWeigth};
`

export const Icon = styled.img`
width: 32px;
height: 32px;
`
