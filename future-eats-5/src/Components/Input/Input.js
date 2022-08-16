import React from "react";
import { Container, Label } from "./InputStyle";
export const Input = ({ type, name, value, onChange, label, color,required }) => {
  return (
    <Container color={color}>
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}        
        title={"Campo obrigatorio"}
      />
      <Label color={color}>{label}</Label>
    </Container>
  );
};
