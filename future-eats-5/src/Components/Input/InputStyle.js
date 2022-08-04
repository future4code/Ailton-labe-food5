import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  transition: 1s ease-in-out;
  max-width: 480px;
  > input {
    border: 1px solid #d0d0d0;
    padding: 16px;
    width: 100%;
    max-width: 480px;
    height: 60px;
    outline: 0;
    :focus ~ label {
      transition: 0.25s ease;
      transform: translateY(-20px);
      font-size: 0.7rem;
    }
    :valid ~ label {
      transform: translateY(-20px);
      font-size: 0.7rem;
    }
  }
  > label {
    color: #d0d0d0;
    font-size: 1rem;
    position: absolute;
    left: 16px;
    bottom: 20px;
  }
`;
