import React from "react";
import axios from "axios";
import Logo from "../../Assets/logofutureeats.png";
import { useNavigate } from "react-router-dom";
import { Container, Title, DivLogo, LogoStyle, Form, Text, A } from "./styled";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button";
import { GoTo } from "../../Functions/GoTo";
import { useForm } from "../../Hooks/useForm";
import { BaseUrl } from "../../Constants/BaseUrl";

export const LoginScreen = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BaseUrl}login`,
        form
      );
      GoTo(navigate, "/home");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <Container>
      <DivLogo>
        <LogoStyle src={Logo} />
      </DivLogo>
      <Title>Entrar</Title>
      <Form onSubmit={login}>
        <Input
          required
          name="email"
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        />
        <Input
          required
          name="password"
          value={form.password}
          onChange={onChange}
          pattern="^.{6,}$"
          type={"password"}
          label={"Senha"}
        />
        <Button>Entrar</Button>
      </Form>
      <Text>
        Não possui cadastro?{" "}
        <A onClick={() => GoTo(navigate, "/register")}>Clique aqui.</A>
      </Text>
    </Container>
  );
};
