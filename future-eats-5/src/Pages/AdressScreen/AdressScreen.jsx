import axios from "axios";
import React from "react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import { Input } from "../../Components/Input/Input";
import { Form } from "../../Global/GlobalStyle";
import { useForm } from "../../Hooks/useForm";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Container, Text } from "./styled";
import { BaseUrl } from "../../Constants/BaseUrl";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";

export const AdressScreen = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const addAddress = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${BaseUrl}address`, form, { headers: { auth: token } });
      localStorage.setItem("addressToken", response.data.token);
      GoTo(navigate, "/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <Container>
      <Header />
      <Text>Meu endereço</Text>
      <Form onSubmit={addAddress}>
        <Input
          required
          name="street"
          value={form.street}
          onChange={onChange}
          label={"Logradouro"}
        />
        <Input
          required
          name="number"
          value={form.number}
          onChange={onChange}
          label={"Número"}
        />
        <Input
          required
          name="complement"
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
        />
        <Input
          required
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro"}
        />
        <Input
          required
          name="city"
          value={form.city}
          onChange={onChange}
          label={"Cidade"}
        />
        <Input
          required
          name="state"
          value={form.state}
          onChange={onChange}
          label={"Estado"}
        />
        <Button>Salvar</Button>
      </Form>
    </Container>
  );
};
