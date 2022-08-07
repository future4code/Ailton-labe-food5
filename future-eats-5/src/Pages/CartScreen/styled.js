import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 49px;
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
export const AddressTitleStyle = styled.p`
  color: #b8b8b8;
`;
export const PStyle = styled.p`
  font-weight: ${(props) => props.fontWeigth};
  color: ${(props) => props.color};
`;

export const ProductPadding = styled.div`
  padding: 16px;
`;
export const DivDetail = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
`;
export const RestaurantName = styled.p`
  color: #5cb646;
`;

export const ProductListPadding = styled.div`
width: 100%;
padding: 16px;
`

export const DivValue = styled.div`
  width: 100%;
  padding: 16px;
  padding-bottom: 0px;
  flex-direction: column;
`;
export const Shipping = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
`;
export const DivSubTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PSubTotal = styled.p`
  font-weight: 500;
`;
export const ValueTotal = styled.div`
  font-weight: 500;
  color: #5cb646;
`;
export const DivPayment = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const PayTitle = styled.div`
  font-weight: 500;
`;
export const StyleLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;
export const DivInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Label = styled.label`
  font-weight: 500;
`;
export const InputStyle = styled.input`
  -webkit-appearance: none;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }
  :checked,
  ::before {
    transform: scale(1);
    background-color: black;
  }
`;

export const ButtonHide = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 12px 16px;
  max-width: 480px;
  border-radius: 2px;
  background-color: rgba(92, 182, 70, 0.5);
  border: none;
  user-select: none;
  position: absolute;
  bottom: 64px;
`;

export const CartIsEmpty = styled.p`
  padding: 20px;
`;
