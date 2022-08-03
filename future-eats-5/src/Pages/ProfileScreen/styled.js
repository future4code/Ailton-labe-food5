import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const DivEdits = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
export const DivProfile = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;
export const DivAddress = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #eeeeee;
`;

export const ImgStyle = styled.img `
  position: absolute;
  width: 24px;
  right: 15px;
  top: 20px;
`
export const AddressTitleStyle = styled.p`
  color: #b8b8b8;
`;

export const DivHistoryTitle = styled.div`
padding: 16px;
width: 100%;
display: flex;
flex-direction: column;
gap: 8px;
`
export const Line = styled.div `
width: 100%;
height: 1px;
background-color: black;
`
export const DivHistoryCard = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: 0 auto;
align-items: center;
>img {
  margin-top: 64px;
  width: 64px;
}
`
export const DivEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHistory = styled.div `

`
