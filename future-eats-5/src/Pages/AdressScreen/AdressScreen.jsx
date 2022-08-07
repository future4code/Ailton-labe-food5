import React, { useEffect, useState } from "react";
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
  const [canShowErrors, setCanShowErrors] = useState(false)
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
  useEffect(()=>{
    if (addressToken !== null) {
      getAddress(`${BaseUrl}profile/address`, addressToken, setForm)
    }
  },[])

  useEffect(()=>{
    if (form.street.length > 0 && form.number.length > 0 && form.neighbourhood.length > 0 && form.city.length > 0 && form.state.length > 0) {
      setCanShowErrors(true)
    }
  },[form])

  return (
    <Container>
      <Header arrow={true} text={"Endereço"}/>
      <Form onSubmit={(e)=>addAddress(`${BaseUrl}address`, form, token, e)}>
        {form.street.length === 0 && canShowErrors ?
        <Input
          required
          name="street"
          value={form.street}
          onChange={onChange}
          label={"Logradouro*"}
          color={"#e02020"}
        />
        :
        <Input
          required
          name="street"
          value={form.street}
          onChange={onChange}
          label={"Logradouro*"}
          color={"#d0d0d0"}
        />        
        }
        {form.number.length === 0 && canShowErrors ?
        <Input
          required
          name="number"
          value={form.number}
          onChange={onChange}
          label={"Número*"}
          color={"#e02020"}

        />
        :
        <Input
          required
          name="number"
          value={form.number}
          onChange={onChange}
          label={"Número*"}
          color={"#d0d0d0"}

        />
        }
        <Input
          required
          name="complement"
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
          color={"#d0d0d0"}
        />
        {form.neighbourhood.length === 0 && canShowErrors ?
        <Input
          required
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro*"}
          color={"#e02020"}

        />
        :
        <Input
          required
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro*"}
          color={"#d0d0d0"}

        />
        }
        {form.city.length === 0 && canShowErrors ?
        <Input
          required
          name="city"
          value={form.city}
          onChange={onChange}
          label={"Cidade*"}
          color={"#e02020"}

        />
        :
        <Input
          required
          name="city"
          value={form.city}
          onChange={onChange}
          label={"Cidade*"}
          color={"#d0d0d0"}

        />
        }
        {form.state.length === 0 && canShowErrors ?
        <Input
          required
          name="state"
          value={form.state}
          onChange={onChange}
          label={"Estado*"}
          color={"#e02020"}

        />
        :
        <Input
          required
          name="state"
          value={form.state}
          onChange={onChange}
          label={"Estado*"}
          color={"#d0d0d0"}

        />
        }
        <Button>Salvar</Button>
      </Form>
    </Container>
  );
};
