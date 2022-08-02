import React from "react";
import { Container } from "./InputStyle";
export const Input = ({ type, name, value, onChange, label }) => {
  return (
    <Container>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </Container>
  );
};
