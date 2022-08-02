import React from "react";
import axios from "axios";
import Logo from "../../Assets/logofutureeats.png";
import { Container, DivLogo, LogoStyle, Title } from "./styled";
import { Form } from "../../Global/GlobalStyle";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { BaseUrl } from "../../Constants/BaseUrl";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const register = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}signup`, form);
      GoTo(navigate, "/adress");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      window.alert(error.data.message);
    }
  };
  return (
    <Container>
      <Header />
      <DivLogo>
        <LogoStyle src={Logo} />
      </DivLogo>
      <Title>Cadastrar</Title>
      <Form onSubmit={register}>
        <Input
          name="name"
          value={form.name}
          onChange={onChange}
          required
          label={"Nome e Sobrenome"}
        />
        <Input
          name="email"
          value={form.email}
          onChange={onChange}
          required
          label={"Email"}
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          type="email"
        />
        <Input
          label={"CPF"}
          name="cpf"
          value={form.cpf}
          onChange={onChange}
          required
          pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
          title="Preencha um CPF válido"
        />
        <Input
          name="password"
          value={form.password}
          onChange={onChange}
          required
          label={"Senha"}
          pattern="^.{6,}$"
          type={"password"}
          title="Preencha uma senha com no mínimo 6 caracteres"
        />
        <Input
          required
          label={"Confirmar "}
          pattern="^.{6,}$"
          type={"password"}
        />
        <Button>Criar</Button>
      </Form>
    </Container>
  );
};
