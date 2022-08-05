import React from "react";
import axios from "axios";
import Logo from "../../Assets/logofutureeats.png";
import { Container, DivLogo, ErrorText, EyeImage, LogoStyle, PasswordContainer, Title } from "./styled";
import { Form } from "../../Global/GlobalStyle";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useState } from "react";
import EyeHidden from "../../Assets/hidden-eye.png";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const register = async (event) => {
    event.preventDefault();
    if (confirmPassword === form.password) {
      try {
        setError(false);
        const response = await axios.post(`${BaseUrl}signup`, form);
        GoTo(navigate, "/address");
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        window.alert(error.reponse.data.message);
      }
    } else {
      setError(true);
    }
  };
  const onChangeConfirm = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <Container>
      <Header arrow={true} />
      <DivLogo>
        <LogoStyle src={Logo} />
      </DivLogo>
      <Title>Cadastrar</Title>
      <Form onSubmit={register}>
        {console.log(form)}
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
        <PasswordContainer>
        <Input
          name="password"
          value={form.password}
          onChange={onChange}
          required
          label={"Senha"}
          pattern="^.{6,}$"
          type={passwordShown ? "text" : "password"}
          title="Preencha uma senha com no mínimo 6 caracteres"
        />
        <EyeImage src={EyeHidden} onClick={togglePassword} />
        </PasswordContainer>
        <PasswordContainer>
        <Input
          required
          onChange={onChangeConfirm}
          label={"Confirme sua senha "}
          pattern="^.{6,}$"
          type={confirmPasswordShown ? "text" : "password"}
        />
        <EyeImage src={EyeHidden} onClick={toggleConfirmPassword} />
        </PasswordContainer>
        {error && <ErrorText>Verifique se a senha é igual</ErrorText>}
        <Button>Criar</Button>
      </Form>
    </Container>
  );
};
