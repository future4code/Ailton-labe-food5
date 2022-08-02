import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Title, DivLogo, LogoStyle, Form, Text, A } from "./styled";
import Logo from "../../Assets/logofutureeats.png";
import { Separator } from "../../Components/Separator";
import { Input } from "../../Components/Input";
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
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/login
`,
        form
      );
      console.log(response);
      console.log("foi");
      GoTo(navigate, "/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  // console.log(BaseUrl)

  return (
    <Container>
      <DivLogo>
        <LogoStyle src={Logo} />
      </DivLogo>
      <Title>Entrar</Title>
      <Form onSubmit={login}>
        <Input
          name="email"
          value={form.email}
          onChange={onChange}
          required
          placeholder="E-mail"
          // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        />
        <Input
          name="password"
          value={form.password}
          onChange={onChange}
          required
          placeholder="Senha"
          // pattern="^.{6,}$"
          type={"password"}
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
