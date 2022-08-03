import React, { useState } from "react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import { Input } from "../../Components/Input/Input";
import { Form } from "../../Global/GlobalStyle";
import { useForm } from "../../Hooks/useForm";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Container, Text } from "./styled";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useAddress } from "../../Hooks/useAddress";

export const AdressScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token")
  const addressToken = localStorage.getItem("addressToken")
  const {addAddress, getAddress} = useAddress()
  const { form, setForm, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  useState(()=>{
    if (addressToken !== null) {
      getAddress(`${BaseUrl}profile/address`, addressToken, setForm)
    }
  },[])

  return (
    <Container>
      <Header arrow={true} text={"Endereço"}/>
      <Form onSubmit={(e)=>addAddress(`${BaseUrl}address`, form, token, e)}>
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
