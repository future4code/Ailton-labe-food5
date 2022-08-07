import React, { useEffect } from "react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import { Input } from "../../Components/Input/Input";
import { Form } from "../../Global/GlobalStyle";
import { useForm } from "../../Hooks/useForm";
import { useProfile } from "../../Hooks/useProfile";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { Container } from "./styled";
import { BaseUrl } from "../../Constants/BaseUrl";

export const EditProfileScreen = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const addressToken = localStorage.getItem("addressToken")
  const { editProfile, profileInfo, updateProfile } = useProfile();
  const { form, setForm, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  useEffect(() => {
    editProfile(`${BaseUrl}profile`, token, setForm);
  }, []);

  return (
    <Container>
      <Header text={"Editar"} arrow={true} />
      <Form onSubmit={(event)=>updateProfile(`${BaseUrl}profile`, form, addressToken, event)}>
        {profileInfo.user?.name !== undefined && (
          <>
          {form.name.length === 0 ?
            <Input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            label={"Nome e Sobrenome"}
            color={"#e02020"}
            />
            :
            <Input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              label={"Nome e Sobrenome"}
              color={"#d0d0d0"}
            />
          }
          {form.email.length === 0 ?
            <Input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            label={"E-Mail"}
            color={"#e02020"}
            />
            :
            <Input
              name="email"
              value={form.email}
              onChange={onChange}
              required
              label={"Email"}
              color={"#d0d0d0"}
            />
          }
          {form.cpf.length === 0 ?
            <Input
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            required
            label={"CPF"}
            color={"#e02020"}
            />
            :
            <Input
              name="cpf"
              value={form.cpf}
              onChange={onChange}
              required
              label={"CPF"}
              color={"#d0d0d0"}
            />
          }
            <Button>Salvar</Button>
          </>
        )}
      </Form>
    </Container>
  );
};
