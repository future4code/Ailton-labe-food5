import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  transition: 1s ease-in-out;
  max-width: 480px;
  user-select: none;
  > input {
    border: 1px solid ${(props) => props.color};
    padding: 16px;
    width: 100%;
    max-width: 480px;
    height: 60px;
    outline: 0;
    user-select: none;
    :focus ~ Label {
      transition: 0.25s ease;
      transform: translateY(-30px);
    }
    :valid ~ Label {
      transform: translateY(-30px);
    }
  }
`;

export const Label = styled.label`
  user-select: none;
  background-color: #fff;
  border-radius: 8px;
  color: ${(props) => props.color};
  font-size: 1rem;
  position: absolute;
  left: 16px;
  bottom: 20px;
  padding-left: 4px;
  padding-right: 20px;
`;
